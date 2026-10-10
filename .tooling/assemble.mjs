#!/usr/bin/env node
// Assemble the federated Macrostrat documentation vault.
//
//   node assemble.mjs --mode=publish --out=../../web/content
//   node assemble.mjs --mode=workspace
//
// publish   : read-only shallow pulls -> one flat tree at --out (for the site build)
// workspace : editable partial+sparse clones under ../.workspace/ (cross-repo authoring)
//
// See .tooling/README.md. Depends on `yaml` (yarn install in this directory).

import {
  readFileSync, writeFileSync, readdirSync, mkdirSync, rmSync, cpSync, renameSync, existsSync,
} from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { parse } from "yaml";

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = resolve(__dirname, "..");

// --- args ------------------------------------------------------------------
const args = Object.fromEntries(
  process.argv.slice(2).map((a) => {
    const [k, v] = a.replace(/^--/, "").split("=");
    return [k, v ?? true];
  })
);
const mode = args.mode ?? "publish";

// Directories that are tooling/support, never treated as publishable content.
const NON_CONTENT = new Set([
  ".git", ".tooling", ".obsidian", "docs-assets",
  ".assembled", ".cache", ".workspace",
  "README.md", "sources.yml", ".gitignore",
]);

const cacheDir = join(repoRoot, ".cache", "sources");
const workspaceDir = join(repoRoot, ".workspace");

function git(cwd, ...a) {
  execFileSync("git", a, { cwd, stdio: "inherit" });
}
function freshDir(p) {
  rmSync(p, { recursive: true, force: true });
  mkdirSync(p, { recursive: true });
}

const manifest = parse(readFileSync(join(repoRoot, "sources.yml"), "utf8"));
const sources = manifest.sources ?? [];

if (mode === "workspace") {
  assembleWorkspace(sources);
} else {
  assemblePublish(sources, resolve(args.out ?? join(repoRoot, ".assembled")));
}

// --- publish ---------------------------------------------------------------
function assemblePublish(sources, out) {
  console.log(`[assemble] publish -> ${out}`);
  freshDir(out);
  mkdirSync(cacheDir, { recursive: true });

  // 1. This vault's own standalone prose -> root of the assembled tree.
  for (const name of readdirSync(repoRoot)) {
    if (NON_CONTENT.has(name) || name.startsWith(".")) continue;
    cpSync(join(repoRoot, name), join(out, name), { recursive: true });
  }

  // 2. Each federated source -> out/<mount>.
  for (const s of sources) {
    const ref = s.ref ?? "main";
    const clone = join(cacheDir, s.id);
    console.log(`[assemble]   ${s.id} (${s.repo} @ ${ref})`);
    freshDir(clone);
    // Shallow, blobless, sparse: minimal read-only pull of just the doc path.
    git(clone, "init", "-q");
    git(clone, "remote", "add", "origin", s.repo);
    git(clone, "config", "extensions.partialClone", "origin");
    if (s.path) {
      git(clone, "sparse-checkout", "set", "--cone", s.path);
    }
    git(clone, "fetch", "-q", "--depth=1", "--filter=blob:none", "origin", ref);
    git(clone, "checkout", "-q", "FETCH_HEAD");

    const srcDir = s.path ? join(clone, s.path) : clone;
    const dest = join(out, s.mount ?? s.id);
    copySelected(srcDir, dest, s.include);
    if (s.flatten) flattenInto(dest, s.flatten);
  }
  console.log("[assemble] done.");
}

// Lift the pages of `sub` to the mount root, and fix the relative links that crossed it:
// `./sub/X.md` in the pages already at the root, `../X.md` in the lifted ones.
function flattenInto(dest, sub) {
  const inner = join(dest, sub);
  if (!existsSync(inner)) {
    console.warn(`[assemble]   ! flatten: ${sub} not found`);
    return;
  }
  const lifted = readdirSync(inner);
  for (const name of lifted) {
    if (existsSync(join(dest, name))) {
      throw new Error(`[assemble] flatten ${sub}: ${name} already exists at the mount root`);
    }
    renameSync(join(inner, name), join(dest, name));
  }
  rmSync(inner, { recursive: true });

  const escaped = encodeURI(sub).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const intoSub = new RegExp(`(\\]\\(|\\]:\\s*)(?:\\./)?${escaped}/`, "g");
  for (const name of readdirSync(dest)) {
    if (!/\.mdx?$/i.test(name)) continue;
    const path = join(dest, name);
    const text = readFileSync(path, "utf8");
    let relinked = text.replace(intoSub, "$1./");
    if (lifted.includes(name)) relinked = relinked.replace(/(\]\(|\]:\s*)\.\.\//g, "$1./");
    if (relinked !== text) writeFileSync(path, relinked);
  }
}

// Copy either the whole dir or only files matching `include` globs.
function copySelected(srcDir, dest, include) {
  mkdirSync(dest, { recursive: true });
  if (!include || include.length === 0) {
    cpSync(srcDir, dest, { recursive: true, filter: (p) => !p.includes("/.git") });
    return;
  }
  for (const rel of include) {
    const from = join(srcDir, rel);
    if (existsSync(from)) cpSync(from, join(dest, rel), { recursive: true });
    else console.warn(`[assemble]   ! include not found: ${rel}`);
  }
}

// --- workspace -------------------------------------------------------------
function assembleWorkspace(sources) {
  console.log(`[assemble] workspace -> ${workspaceDir}`);
  mkdirSync(workspaceDir, { recursive: true });
  for (const s of sources) {
    const ref = s.ref ?? "main";
    const dir = join(workspaceDir, s.id);
    if (existsSync(join(dir, ".git"))) {
      console.log(`[assemble]   ${s.id}: exists, skipping (pull manually to update)`);
      continue;
    }
    console.log(`[assemble]   ${s.id}: editable clone (${s.repo} @ ${ref})`);
    freshDir(dir);
    // Full history, blobless, sparse on the doc path: editable AND pushable.
    git(workspaceDir, "clone", "--filter=blob:none", "--sparse", "-b", ref, s.repo, s.id);
    if (s.path) git(dir, "sparse-checkout", "set", "--cone", s.path);
  }
  console.log(
    "[assemble] workspace ready. Edit in place; branch + push each source to its own repo."
  );
}
