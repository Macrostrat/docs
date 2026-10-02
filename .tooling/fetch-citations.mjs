// Fetch the Macrostrat publications library (a public Zotero group) into
// Site/data/publications.json, which the website's /publications page renders.
//
//   node .tooling/fetch-citations.mjs   (from the vault root; no install needed)
//
// The output is committed: run this after curating the library and commit the
// diff. Formatting is the website's job; the file holds only the records.
// Each item is Zotero's CSL-JSON plus `macrostrat_collections`, the names of
// the collections it sits in. Items are sorted so an unchanged library writes
// an unchanged file.
//
// Environment:
//   ZOTERO_GROUP  group library id (default: 6644229)
import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const group = process.env.ZOTERO_GROUP ?? "6644229";
const api = `https://api.zotero.org/groups/${group}`;
const out = join(
  dirname(fileURLToPath(import.meta.url)),
  "../Site/data/publications.json",
);

async function fetchAll(path, params = {}) {
  const results = [];
  let start = 0;
  let total = Infinity;
  while (start < total) {
    const query = new URLSearchParams({ ...params, limit: "100", start: String(start) });
    const res = await fetchWithRetry(`${api}${path}?${query}`);
    total = Number(res.headers.get("Total-Results") ?? 0);
    const page = await res.json();
    results.push(...page);
    if (page.length === 0) break;
    start += page.length;
  }
  return results;
}

async function fetchWithRetry(url) {
  for (let attempt = 1; ; attempt++) {
    const res = await fetch(url, { headers: { "Zotero-API-Version": "3" } });
    if (res.ok) return res;
    if (attempt >= 5 || (res.status !== 429 && res.status < 500)) {
      throw new Error(`${res.status} ${res.statusText} for ${url}`);
    }
    const wait = Number(res.headers.get("Retry-After") ?? attempt * 5);
    await new Promise((resolve) => setTimeout(resolve, wait * 1000));
  }
}

function year(item) {
  return item.issued?.["date-parts"]?.[0]?.[0] ?? 0;
}

const collections = await fetchAll("/collections");
const collectionName = Object.fromEntries(collections.map((c) => [c.key, c.data.name]));

const records = await fetchAll("/items/top", { include: "data,csljson" });
const items = records
  .filter((r) => r.data.itemType !== "note" && r.data.itemType !== "attachment")
  .map((r) => ({
    ...r.csljson,
    macrostrat_collections: [...new Set(r.data.collections.map((k) => collectionName[k]))]
      .filter(Boolean)
      .sort(),
  }))
  .sort((a, b) => year(b) - year(a) || a.id.localeCompare(b.id));

mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, JSON.stringify(items, null, 2) + "\n");

const counts = {};
for (const item of items) {
  for (const name of item.macrostrat_collections) counts[name] = (counts[name] ?? 0) + 1;
}
console.log(`[citations] ${items.length} items from Zotero group ${group}`);
for (const [name, n] of Object.entries(counts).sort()) {
  console.log(`[citations]   ${name}: ${n}`);
}
