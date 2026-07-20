# docs-assets

Local working mirror of the documentation **asset store** — a semantically
organized, versioned bucket on `storage.macrostrat.org` (Ceph-backed S3).

## The model

- **Binary media** (png, gif, mp4, datasets) is the store's responsibility, **not
  git's**. Files here are synced to the bucket; their contents are **git-ignored**
  (only this README and `.gitkeep` are tracked).
- **Text/markup assets** (SVG source, Mermaid) are *not* binary — keep those in
  the repo beside the Markdown, where they diff and review like code.
- **Object versioning is enabled** on the bucket, so overwriting an asset keeps
  prior versions (auditable, restorable). That is where asset change-tracking
  lives — no Git LFS or git-annex needed.

## Workflow

1. Drop a file into this directory, mirroring the bucket's path layout
   (e.g. `docs-assets/web/section-editor/demo.gif`).
2. Sync it up: `.tooling/sync-assets.sh push`.
3. Reference it from Markdown by its stable store URL.

In dev, reference resolution falls back to this local directory, so you can
preview a doc before pushing the asset. The reference-integrity check
(`.tooling/check.mjs`) verifies, at build time, that every referenced asset
actually resolves.
