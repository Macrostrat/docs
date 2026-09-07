#!/usr/bin/env node
// Reference-integrity check over an assembled documentation tree.
//
//   node check.mjs <dir> [--strict]     (default dir: ../.assembled)
//
// Verifies that every referenced asset is reachable (local file exists / remote
// URL returns 200), that every [[wikilink]] resolves to a page in the tree, that
// frontmatter is valid YAML, and that every .mdx page compiles.
//
//   Missing assets, bad frontmatter, MDX that does not compile -> ERROR
//                                    (they break the site build; fail here first).
//   Dangling links  -> WARNING (the renderer degrades them to plain text).
// Use --strict to escalate warnings to errors. Use as a CI gate before the build.
//
// Format contract (shared with the website's text-toolchain): `.md` is plain
// markdown and cannot fail to compile; `.mdx` may contain JSX and is compiled
// here with the same MDX major version the site uses.

import { readFileSync, readdirSync, statSync, lstatSync, existsSync } from "node:fs";
import { join, resolve, relative, basename, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { parse as parseYaml } from "yaml";
import { compile as compileMdx } from "@mdx-js/mdx";
import remarkFrontmatter from "remark-frontmatter";

const __dirname = dirname(fileURLToPath(import.meta.url));
const argv = process.argv.slice(2);
const strict = argv.includes("--strict");
const dirArg = argv.find((a) => !a.startsWith("--"));
const root = resolve(dirArg ?? join(__dirname, "..", ".assembled"));

if (!existsSync(root)) {
  console.error(`[check] tree not found: ${root} (run assemble.mjs first)`);
  process.exit(2);
}

// --- collect markdown files + build a page-name index ----------------------
const mdFiles = [];
(function walk(dir) {
  for (const name of readdirSync(dir)) {
    if (name.startsWith(".")) continue;
    const p = join(dir, name);
    if (lstatSync(p).isSymbolicLink()) continue; // skip symlinks (don't follow / crash on dangling)
    if (statSync(p).isDirectory()) walk(p);
    else if ([".md", ".mdx"].includes(extname(p).toLowerCase())) mdFiles.push(p);
  }
})(root);

// Wikilinks resolve by basename (Obsidian shortest-path) or by relative path.
const pageNames = new Set();
for (const f of mdFiles) {
  pageNames.add(basename(f, extname(f)));
  pageNames.add(relative(root, f).replace(/\.mdx?$/, ""));
}

const IMG = /!\[[^\]]*\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g;
const HTML_IMG = /<img[^>]+src=["']([^"']+)["']/g;
const WIKI = /\[\[([^\]|#]+)(?:[#|][^\]]*)?\]\]/g;

const errors = [];   // break rendering -> fail
const warnings = []; // degrade gracefully -> report only (unless --strict)
const remoteChecks = [];

// Strip fenced + inline code so literal `[[wikilink]]` / `![](url)` *examples*
// in prose about the syntax aren't mistaken for real references.
function stripCode(s) {
  return s.replace(/```[\s\S]*?```/g, "").replace(/`[^`\n]*`/g, "");
}

const FRONTMATTER = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/;

function checkFrontmatter(raw, where) {
  const m = FRONTMATTER.exec(raw);
  if (m == null) return;
  try {
    parseYaml(m[1]);
  } catch (e) {
    errors.push(`${where}: frontmatter is not valid YAML (${e.message.split("\n")[0]})`);
  }
}

const mdxChecks = [];

for (const f of mdFiles) {
  const raw = readFileSync(f, "utf8");
  const text = stripCode(raw);
  const where = relative(root, f);

  checkFrontmatter(raw, where);
  if (extname(f).toLowerCase() === ".mdx") mdxChecks.push({ raw, where });

  for (const m of [...text.matchAll(IMG), ...text.matchAll(HTML_IMG)]) {
    const url = m[1];
    if (/^https?:\/\//.test(url)) {
      remoteChecks.push({ url, where });
    } else if (!url.startsWith("data:")) {
      const local = resolve(dirname(f), url.split("#")[0]);
      if (!existsSync(local)) errors.push(`${where}: missing local asset -> ${url}`);
    }
  }

  for (const m of text.matchAll(WIKI)) {
    const target = m[1].trim();
    if (!pageNames.has(target) && !pageNames.has(basename(target))) {
      warnings.push(`${where}: unresolved wikilink -> [[${target}]]`);
    }
  }
}

// --- MDX pages must compile ------------------------------------------------
for (const { raw, where } of mdxChecks) {
  try {
    await compileMdx(raw, { remarkPlugins: [remarkFrontmatter] });
  } catch (e) {
    const place = e.line != null ? ` (line ${e.line}:${e.column})` : "";
    errors.push(`${where}: MDX does not compile${place}: ${e.reason ?? e.message}`);
  }
}

// --- remote asset availability (HEAD) --------------------------------------
console.log(
  `[check] ${mdFiles.length} pages (${mdxChecks.length} mdx), ${remoteChecks.length} remote assets`
);
await Promise.all(
  remoteChecks.map(async ({ url, where }) => {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (!res.ok) errors.push(`${where}: asset ${res.status} -> ${url}`);
    } catch (e) {
      errors.push(`${where}: asset unreachable (${e.message}) -> ${url}`);
    }
  })
);

if (warnings.length) {
  console.warn(`\n[check] ${warnings.length} warning(s):`);
  for (const w of warnings) console.warn("  - " + w);
}
if (errors.length) {
  console.error(`\n[check] ${errors.length} error(s):`);
  for (const e of errors) console.error("  - " + e);
}

const failed = errors.length > 0 || (strict && warnings.length > 0);
if (failed) {
  console.error(`\n[check] FAILED${strict ? " (strict)" : ""}.`);
  process.exit(1);
}
console.log(
  `\n[check] OK — assets resolve, frontmatter and MDX compile${warnings.length ? ` (${warnings.length} link warning(s))` : ""}.`
);
