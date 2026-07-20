# Macrostrat documentation

The platform documentation vault for [Macrostrat](https://macrostrat.org) — its
scientific vision, user guides, conceptual approach, and the connective tissue
that ties the system's components together.

This repository is **content-first**. It is an [Obsidian](https://obsidian.md)
vault of Markdown: clone it, open it in Obsidian (or any editor), edit prose, and
open a pull request. You do **not** need Node, the website toolchain, or any
build step to contribute — Obsidian renders the Markdown and wikilinks locally as
you write.

## How it fits together

Documentation is **federated**. Broadly-targeted prose lives here directly.
System-specific, code-coupled docs (format specs, architecture notes, per-package
READMEs) stay in their own code repositories and are **pulled in** at build time,
so they version and review alongside the code they describe. The website
(`UW-Macrostrat/web`) is the **publisher**: it assembles this vault plus the
federated sources into one tree and renders it at `macrostrat.org/docs`.

- **What gets pulled in** is declared in [`sources.yml`](./sources.yml).
- **The tooling** that assembles, checks, and syncs lives in [`.tooling/`](./.tooling)
  — walled off so it never distracts from the content.
- **Media** (screenshots, gifs, datasets) lives in the Macrostrat object store,
  not in git. See [`docs-assets/`](./docs-assets).

See the full architecture in the workbench feature doc, *Documentation*.

## Contributing prose

1. Clone this repo and open the folder as an Obsidian vault.
2. Edit or add Markdown. Link between pages with `[[Wikilinks]]`.
3. Reference images by their object-store URL (see [`docs-assets/`](./docs-assets)).
4. Open a pull request.

Link direction runs **general → specific**: pages here may link down into
code-coupled docs, but code-coupled docs should not depend on pages here (so they
stay valid on their own).
