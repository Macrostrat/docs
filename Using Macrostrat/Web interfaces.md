---
title: Web interfaces
---

Macrostrat's website presents its data the way geologists are used to seeing them:
as maps, as columns, and as pages about named units and terms. Everything shown is
built on the public [[Data services]].

> [!note] The new website is in beta
> These interfaces belong to the new Macrostrat website, which is being rolled out
> alongside the existing one. Some pages are still being developed.

## Geologic map (`/map`)

An interactive map of the integrated geologic map of the world. Click anywhere to see
the map unit there, its age, lithologies and stratigraphic names, the column beneath
it, nearby fossil collections, and the original map the unit comes from. Layers and
filters let you highlight units by age, lithology or name. A usage guide and changelog
for the map are published with the website's own documentation (`/docs/website/map`).

## Maps (`/maps`)

A catalog of every [[Geologic maps|map source]] in Macrostrat, with each map's
reference, scale and extent, a view of the map on its own, and its legend.

## Columns (`/columns`)

Browse [[Stratigraphic columns]] by map or list. Each column page shows the
succession of units against geologic time, with lithologies, environments, ages and
links to the lexicon. Columns are organized by project (`/projects`).

## Lexicon (`/lex`)

Pages for every term in the [[Geologic lexicon]]: stratigraphic names and concepts,
lithologies and their attributes, environments, economic resources, minerals,
structures, intervals and timescales. Each page gathers what Macrostrat knows about the
term: where it occurs, in which columns and maps, and how it relates to other terms.
These pages replace the older "Sift" explorer.

## Contributor tools

Signed-in contributors have access to tools for adding and improving data:

- the **map ingestion** interface (`/maps/ingestion`), a spreadsheet-like editor for
  harmonizing newly ingested maps (see [[Map ingestion]]);
- a **column editor**, in development, for creating and revising columns.

See [[Contributing]] for how to get involved.

## Rockd

[Rockd](https://rockd.org) is Macrostrat's mobile app. It shows the geology beneath
you anywhere on Earth, and lets you record and share field observations
("checkins") with photos and notes.
