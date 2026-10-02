# .tooling

Assembly, verification, and asset-sync scripts for the documentation vault.
**Walled off on purpose** — a prose contributor never needs to look in here.
Maintainers and CI use it to compose and check the federated doc set.

## Setup

```sh
cd .tooling && yarn install
```

The website build never calls these scripts by hand: `yarn docs:assemble` in the
`UW-Macrostrat/web` repository (`scripts/assemble-docs.sh`) clones this vault,
installs this directory and runs assemble + check into the site's `content/`.
The same two commands run in this repository's own CI on every pull request
(`.github/workflows/docs.yml`), which also notifies the website when `main` changes.

## Assemble — `assemble.mjs`

Reads [`../sources.yml`](../sources.yml) and composes the vault + federated
sources into one tree. One manifest, two modes:

```sh
# Publish mode (what the website build runs): read-only, throwaway clones.
node assemble.mjs --mode=publish --out=../.assembled

# Workspace mode: editable partial + sparse clones under ../.workspace/,
# for aligning documentation across repositories, then branch-and-push per source.
node assemble.mjs --mode=workspace
```

- **Publish** shallow-clones each source, copies the selected docs into
  `--out/<mount>`, and copies this vault's standalone prose to the root.
- **Workspace** uses `git clone --filter=blob:none --sparse` so each source is a
  real, pushable repo materializing only its docs subtree. Edit across repos in
  one place; each change is committed and pushed back to its home repo (make a
  branch per source and open a PR — don't push to `main`).

## Check — `check.mjs`

Reference-integrity gate over an assembled tree: verifies every `[[wikilink]]`
resolves and every referenced asset is reachable (local file exists / remote URL
returns 200). Missing assets are errors; unresolved wikilinks are warnings
unless `--strict` is given. CI runs it after every assembly.

```sh
node check.mjs ../.assembled
```

## Sync assets — `sync-assets.sh`

Pushes/pulls the local `docs-assets/` mirror to/from the object store.

```sh
./sync-assets.sh push     # local -> bucket
./sync-assets.sh pull     # bucket -> local
```

## Fetch citations — `fetch-citations.mjs`

Writes `Site/data/publications.json` from the public Zotero group that holds
Macrostrat's publications: CSL-JSON per item, plus the names of the collections
it sits in. Run it after curating the library and commit the result; the website
formats the records. No install needed.

```sh
node .tooling/fetch-citations.mjs   # from the vault root
```
