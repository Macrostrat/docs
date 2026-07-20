# .tooling

Assembly, verification, and asset-sync scripts for the documentation vault.
**Walled off on purpose** — a prose contributor never needs to look in here.
Maintainers and CI use it to compose and check the federated doc set.

## Setup

```sh
cd .tooling && yarn install    # or npm install
```

## Assemble — `assemble.mjs`

Reads [`../sources.yml`](../sources.yml) and composes the vault + federated
sources into one tree. One manifest, two modes:

```sh
# Publish mode (what the website build runs): read-only, throwaway clones.
node assemble.mjs --mode=publish --out=../../web/content

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
returns 200). Exits non-zero on any dangling reference — wire it into CI before
the image build.

```sh
node check.mjs ../../web/content
```

## Sync assets — `sync-assets.sh`

Pushes/pulls the local `docs-assets/` mirror to/from the object store.

```sh
./sync-assets.sh push     # local -> bucket
./sync-assets.sh pull     # bucket -> local
```
