#!/usr/bin/env node
// Reference-integrity check over an assembled documentation tree.
//
//   node check.mjs <dir> [--strict]     (default dir: ../.assembled)
//
// Verifies that every referenced asset is reachable (local file exists / remote
// URL returns 200) and that every [[wikilink]] resolves to a page in the tree.
//
//   Missing assets  -> ERROR  (they break rendering; fail the build).
//   Dangling links  -> WARNING (the renderer degrades them to plain text).
// Use --strict to escalate warnings to errors. Use as a CI gate before the build.

import { readFileSync, readdirSync, statSync, existsSync } from "node:fs";
import { join, resolve, relative, basename, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";

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
    if (statSync(p).isDirectory()) walk(p);
    else if (extname(p).toLowerCase() === ".md") mdFiles.push(p);
  }
})(root);

// Wikilinks resolve by basename (Obsidian shortest-path) or by relative path.
const pageNames = new Set();
for (const f of mdFiles) {
  pageNames.add(basename(f, ".md"));
  pageNames.add(relative(root, f).replace(/\.md$/, ""));
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

for (const f of mdFiles) {
  const text = stripCode(readFileSync(f, "utf8"));
  const where = relative(root, f);

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

// --- remote asset availability (HEAD) --------------------------------------
console.log(`[check] ${mdFiles.length} pages, ${remoteChecks.length} remote assets`);
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
console.log(`\n[check] OK — assets resolve${warnings.length ? ` (${warnings.length} link warning(s))` : ""}.`);
