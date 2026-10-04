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
- **Drafts** — a page under `__drafts__/` is not published at all. A site page with
  `status: draft` is published at its route with a draft notice. Nothing else marks a
  draft.
- **Format** — `.md` is plain GitHub markdown with `[[wikilinks]]` and Obsidian
  callouts, and every source honours it. `.mdx` is reserved for pages that need
  components.
- **Writing** — the rules for voice, status words, names and links are in
  [[Writing documentation]].

## Site pages and records (`Site/`)

The website's own pages, About, Support, Community, Publications, are prose in this
vault too, under `Site/`, so anyone can fix a grant number or add a collaborator by
pull request. They differ from documentation pages in two ways:

- **`route:` frontmatter** names the site address (`route: /about`). The website
  renders these pages as *shells*: the prose, with components inserted at the HTML
  comments marked `<!-- slot: ... -->`. They are not part of the `/docs` navigation.
- **Records live in `Site/data/`** as YAML: `supporters.yml`, `apps.yml`,
  `integrations.yml`, `contact.yml`, `people.yml`. Anything with identity and
  repetition (a person, an app, a supporter) is a record, not a paragraph. Each file
  starts with a comment describing its fields; the website reads them, and the check
  will validate them against a schema.
- **News posts** are ordinary pages under `News/`, one file per post, with `title`,
  `date`, `author` (an id from `people.yml`), `summary`, `tags`, `image` and `kind`
  (`major` posts also go to the newsletter; `minor` ones stay on the site). Draft a
  post under `__drafts__/News/` until it is ready.

Media for these pages (logos, photos, post images) goes to the asset store like any
other media.

## Tooling

The `.tooling/` directory holds the assembly, reference-integrity check, and
asset-sync scripts. It is walled off so it never competes with the content — a
prose contributor never needs to open it. See `.tooling/README.md`.
