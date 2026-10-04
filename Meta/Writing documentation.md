---
title: Writing documentation
---

Writing rules for Macrostrat's public documentation, with examples from the pages as
they stand. They apply to every source the site publishes, vault and code-coupled
alike, with the exceptions noted for developer pages.

## Who the page is for decides its voice

Pages come in five kinds, and the kind decides the reader and the voice. Since the
2026-10-04 restructure the documentation sections are subjects (Maps, Columns, Lexicon,
Data services, website, platform), so a section can hold concept pages and how-to pages
side by side; the kind is the page's, not the folder's. Pick it before writing a word,
and keep one page on one kind.

| Kind | Where | Reader | Voice | Example that gets it right |
| --- | --- | --- | --- | --- |
| Site page | `/about`, `/community`, news | Anyone: a geologist, a funder, a journalist | Plain, third person for the system, "we" allowed for the lab when it is really the lab speaking | `Site/About/Scientific approach.md` |
| Index page | section landings, the documentation landing, `/about/version-2` | Someone deciding where to go | One or two sentences per item and a link; explains nothing the linked page explains | `Maps/Maps.md` |
| Concept page | the subject sections | A geologist who wants to trust the data | Impersonal present tense; explain the model, not the code | `Columns/Stratigraphic columns.md` |
| How-to page | Data services, website, Meta | Someone with a task | Second person, imperative, task-first | `Data services/Use in QGIS.md` |
| Developer page | `platform/`, pulled sources | A developer or operator | Precise, identifiers allowed, assumes the reader can run code | `platform/System architecture.md` |

A page that mixes kinds is split, not smoothed. The website's code-style page was a
developer page filed under *Contributing*; it moved to the web repository's
`CONTRIBUTING.md` on 2026-10-04.

## Evergreen pages carry no clock

Documentation pages are read for years. Nothing in them may depend on when the reader
arrives.

- Never "recently", "currently", "new", "now", "soon", "in development" without a date
  or a status label (below).
- A fact that is true only for a while is either dated (`Released March 2026`) or moved
  to a news post or changelog, which are time-stamped by design.

> **Before** (`platform/Macrostrat system architecture.md`, pulled from the macrostrat
> repository): *"We recently completed a migration of some legacy components from
> MariaDB, and we are nearing completion of a new Kubernetes-based infrastructure."*
>
> **After:** *"Macrostrat runs in containers on a Kubernetes cluster at UW–Madison's
> Center for High Throughput Computing. Its data were consolidated into one PostgreSQL
> database in March 2026; before that, columns and the lexicon were held in MariaDB."*

> **Before** (`About Macrostrat/History and Version 2.md`): *"As of 2026, Macrostrat
> runs fully on its new infrastructure. Current work includes bringing in major new map
> compilations…"*
>
> **After:** the page is absorbed into [Version 2](/about/version-2)
> (`/about/version-2`), which dates each fact and owns status; the history page is deleted.

## One status vocabulary

Four words, used exactly, in tables and in prose. Anything else ("experimental",
"alpha", "coming", "beta" used loosely) is replaced by one of them.

| Label | Means |
| --- | --- |
| **Released** *month year* | On `macrostrat.org`, supported, documented |
| **In beta** | On `macrostrat.org`, open to everyone, may change; a feedback route is linked |
| **In development** | Exists and is being tested with collaborators; not open to the public and not for published work. Not "private beta" |
| **Planned** | Designed or funded; nothing to use yet |

The website's own "Beta" badge is a product decision, not a documentation one; the
docs say "in beta" only while the badge is shown.

## Names

Consistency here is what lets a reader connect a sentence on the About page with a table
in the platform docs.

**"Macrostrat v2" is an effort, not a product.** It names the program of work, begun in
2023, that remade the system beneath the website. There is one Macrostrat; version 2
changed it. The earlier state is "previously" or "before version 2", never *Version 1*
against *Version 2*, and no page sets up a "v3": later change is dated releases and
roadmap directions. API v2 and API v3 are the API's own numbers and are unaffected.

| Write | Not |
| --- | --- |
| Macrostrat v2, version 2: the effort begun in 2023; the software is Macrostrat, unnumbered | Macrostrat 2, V2, v2.0, "version 2 of Macrostrat", "the new Macrostrat", "the v2 site", "v3" |
| previously, before version 2 (the earlier state) | v1 (except as a historical era name), "the rebuild", "the old Macrostrat", "legacy" |
| API v2, API v3 | APIv3, API version three, "the v3" |
| the map interface, the column pages, the lexicon | the Map, Sift (except as a historical name), "the app" |
| PostgreSQL, PostGIS, MariaDB, Kubernetes, ORCID | Postgres, postgres, k8s, Orcid |
| stratigraphic column, geologic map, map unit, compilation | strat column, geology map, polygon (unless the geometry is meant) |
| `macrostrat.org` in code font | the production site, prod. The development site is never named or linked on a public page; say "a separate site where changes are tested" if it must be mentioned |

Internal names stay internal: feature-area titles, branch names, pull-request numbers,
schema and table names, and people's first names do not appear on reader-facing pages.
Developer pages may use schema and table names; nothing else may.

## Claims

- State what the system does and does not do. No "seamless", "powerful", "robust",
  "dramatic", "cutting-edge", "harness".
- A limitation stated plainly earns trust; a limitation hidden costs it. *"Version 3 is
  in early development; its routes may change"* is the model.
- Credit goes to the lab, the community and funders by name; effort ("years of work")
  is shown by dates and scope, not asserted.

> **Before** (`platform/v2-transition.md`, 2023, still published): *"These efforts
> culminated in the Macrostrat v2 effort, which includes a dramatic expansion funded by
> NSF and DARPA."*
>
> **After:** *"Macrostrat v2 is supported by two NSF projects (OAC-2311091,
> RISE-2324579) and by DARPA's CriticalMAAS program."*

## Sentences and structure

- Lead with the answer. The first paragraph of every page says what the page is about
  and who it is for; a reader who stops there has not been misled.
- One idea per sentence; prefer two short sentences to a semicolon.
- Headings are sentence case and name the thing, not the action ("The database", not
  "Understanding the database"). H2 for sections, H3 sparingly, never H4.
- Tables for anything with three or more parallel items that share attributes;
  bulleted lists for parallel items without attributes; prose for argument.
- A page is as long as its subject and no longer. Under about 150 words, it should
  probably be a section of another page; the vault had twelve such stubs on
  2026-09-07, and the taxonomy pass of 2026-10-01 removed most of them.
- If a section is meant to be short, make it short. No "at a glance", "in brief",
  "overview" or "summary" framings, and no table where a list of links will do: a
  table is for items that share attributes worth comparing, not for presenting a list
  with ceremony.

## Links

This is technical documentation with a strong linking pattern. Most readers need a
fraction of any page, so **link out, don't explain**: state the fact a reader needs to
decide whether to follow the link, and let the owning page do the rest.

- **Index pages** (the About pages, section landings, `/about/version-2`) gather several
  subjects. Each item is one or two sentences and a link to the page that owns it, and
  the index explains nothing the owning page explains. If the owning page lacks the
  fact, add it there, not to the index; if no page owns it, write that page.
- Links run from general to specific, never upward: an *About* page may link into
  *How Macrostrat works*, which may link into *Platform*; a pulled developer page
  never links to a vault page, so it stays valid in its own repository.
- Link a term at its first mention on a page, and not again.
- Link to the page that owns the fact, not to a page that mentions it. If the owning
  page does not exist yet, write `TODO` in the draft rather than linking to the
  nearest neighbour; a wrong link is worse than none.
- Wikilinks for pages in the assembled tree; URL links for site routes (`/map`,
  `/docs/website/changelog`) and anything outside the site. A wikilink to a pulled
  page resolves only after assembly, so check it in the CI output or on
  `dev.macrostrat.org`, not in Obsidian.
- Deep links into changelogs use the heading anchor as GitHub writes it
  (`changelog.md#version-410`).

## Callouts and media

- Callouts (`> [!note]`) for a fact that cuts across the page's flow, at most one per
  screen. `[!warning]` only for data loss or wrong results. `[!cards]` is layout for
  index pages, site and documentation alike: one link per item, a one-line description.
  `[!logo]` is for site pages only.
- Every image or video is a URL into the asset store under `assets/web/docs/`, with
  alt text that states what the reader is meant to see. No image carries information
  that is not also in the text.

## Frontmatter

Every vault page carries `title`. Section landing pages are the note named after their
folder, with `permalink: index`. Site pages carry `route:` instead and are not
documentation. A page
whose facts expire adds `status:` with one of the four labels above, and the check will
one day warn on a `Released` page with no date. News posts use the record fields in `Meta/About this vault.md`.
Code-coupled sources are not required to carry frontmatter, but a `title` saves the
reader from a filename (`v2-transition`) in the navigation.

## Before you open a pull request

1. Which kind of page is this, and does every paragraph stay in it?
2. Does anything in it stop being true on a date you can name? Date it or move it.
3. Is every status one of the four labels?
4. Are the names in the table above spelled the table's way?
5. Does each link point down, and to the owning page?
6. Does the first paragraph alone answer "what is this and who is it for"?
