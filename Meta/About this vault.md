---
title: About this vault
---

# About this vault

This repository (`Macrostrat/docs`) is the **content root** for Macrostrat's
platform documentation. It follows a *federated* model.

## Two kinds of documentation

- **Standalone prose** — vision, scientific approach, user guides. Lives here, in
  this vault, directly. Not tied to any codebase.
- **Code-coupled docs** — format specs, architecture notes, per-package READMEs.
  Live in their own code repositories and are *pulled in* at build time, so they
  version and review with the code they describe.

The rule of thumb for deciding: **where does a change to this doc get reviewed?**
If in the PR that changes the code → it is code-coupled and belongs with the code.
Otherwise → it belongs here.

## How it is published

The website (`UW-Macrostrat/web`) is the publisher. At build time it assembles
this vault plus every source declared in `sources.yml` into one tree and renders
it. Nothing here needs to be built to be edited — Obsidian previews it locally.

## Conventions

- **Links** use `[[Wikilinks]]`. Link direction runs **general → specific**:
  pages here may link down into code-coupled docs, but not the reverse.
- **Media** (images, gifs, video) goes to the object store, referenced by URL —
  see the `docs-assets/` directory. Text/markup assets (SVG, Mermaid) may live
  beside the Markdown.
- **Drafts** — put work-in-progress under a `__drafts__/` folder to keep it out
  of the published index.

## Tooling

The `.tooling/` directory holds the assembly, reference-integrity check, and
asset-sync scripts. It is walled off so it never competes with the content — a
prose contributor never needs to open it. See `.tooling/README.md`.
