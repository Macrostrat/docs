---
title: Map compilations
---

> [!note] In active development
> Macrostrat's compilation system is being rebuilt as part of Macrostrat v2. This page
> describes the model and its vocabulary; details of how compilations are authored and
> served are still changing.

Most of the maps people use are themselves assembled from other maps. A state
geologic map is stitched together from county or quadrangle sheets; a national
compilation is built from state maps; Macrostrat's global map is built from all of
these. Macrostrat represents this directly, as **compilations**.

## Maps and compilations

Every map in Macrostrat is a [[Geologic maps|source]]. A source can have
**members**: other sources it is assembled from. A source with members is a
**compilation**; a source without them is an individual **map**. A compilation is
itself a map: it has a footprint, can be cited, and can be a member of a larger
compilation. Compilations can nest to any depth.

Members combine in one of two ways:

- **Topological**: members overlap, and where they do, a **priority** decides which
  one is shown. Typical of compilations that layer detailed maps over coarser ones.
- **Mosaic**: members partition the area between them without overlap, like the
  county sheets of a state map. Each member is shown inside its own footprint.

Some compilations arrive as a single published dataset that already merges many
maps; others are assembled inside Macrostrat from maps ingested separately.

## Footprints, territories and priority

Each map has a **footprint**, the area where it is defined. Where footprints
overlap, priorities on the compilation's members decide which map wins, location by
location. The area a map actually wins within a compilation is its **territory**.
Territories are computed with a topology engine that maintains a non-overlapping
coverage of faces, so that any location resolves quickly to the one map, and the one
unit, that should be shown there. (The same engine underlies the
[Mapboard GIS](https://mapboard-gis.app) editing app.)

Priority is authored, not inferred. Placing a detailed map above a regional one is an
editorial decision, and recording it explicitly lets Macrostrat explain why any
polygon on the global map comes from the map it does.

When a newer map replaces an older one, the older map is marked as **superseded**,
and the replacement is recorded.

## Served layers

The compilations that Macrostrat publishes as map tiles are **served layers**. The
four base layers follow the scale buckets (**tiny**, **small**, **medium**, **large**)
and gather the maps of each scale. The **carto** layers combine them into the map
most people see: at each zoom level, the most detailed appropriate map is drawn, with
coarser maps filling in wherever detailed mapping is missing.

## Why compilations matter

Treating compilations as first-class maps solves several long-standing problems:

- **Credit.** A large compilation can hide dozens of contributing surveys behind a
  single citation. Recording its members keeps every contributing map visible and
  citable.
- **Updates.** When one member map is revised, only its area of the compilation
  needs to change, instead of rebuilding the whole global map.
- **Transparency.** Every polygon on the global map can be traced through the
  compilations it belongs to, back to the map it came from.

Earlier versions of Macrostrat built the carto map once, with implicit priorities.
The compilation system replaces that one-time build with a live structure that can be
inspected and revised.
