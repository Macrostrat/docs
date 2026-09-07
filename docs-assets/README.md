# docs-assets

Local working mirror of the documentation **asset store**: the `web/docs/` prefix
of the public `assets` bucket on `storage.macrostrat.org` (Ceph-backed S3), beside
the site's other media. Published URL: `https://storage.macrostrat.org/assets/web/docs/<path>`.

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

1. Drop a file into this directory, mirroring the assembled page tree
   (`<mount>/<page-slug>/<name>.<ext>`, e.g. `docs-assets/platform/using-raster-layers-in-qgis/wmts-dialog.png`).
2. Sync it up: `.tooling/sync-assets.sh push`.
3. Reference it from Markdown by its stable store URL
   (`https://storage.macrostrat.org/assets/web/docs/<path>`).

Push the asset **before** the doc that cites it: remote URLs preview directly in
Obsidian and on GitHub, so there is no local fallback, and the reference-integrity
check (`.tooling/check.mjs`) verifies at build time that every referenced asset
actually resolves.
