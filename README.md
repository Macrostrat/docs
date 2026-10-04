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

How the vault is organized and published is in [`Meta/About this vault.md`](./Meta/About%20this%20vault.md);
the writing rules are in [`Meta/Writing documentation.md`](./Meta/Writing%20documentation.md).

## Contributing prose

Clone this repo, open the folder as an Obsidian vault, edit, and open a pull request.
Read [`Meta/Writing documentation.md`](./Meta/Writing%20documentation.md) first.

Link direction runs **general → specific**: pages here may link down into
code-coupled docs, but code-coupled docs should not depend on pages here (so they
stay valid on their own).
