---
title: How Macrostrat works
permalink: index
---

Macrostrat describes the rocks of the Earth's crust in space and time. It brings
together three kinds of information that geologists normally keep apart, and links
them so that a question asked of one can be answered with the others:

- **[[Stratigraphic columns]]** record successions of rock units at a place: what
  lies on top of what, how thick it is, what it is made of, and when it formed.
  Every column carries an **[[Age model]]** that ties its units to the geologic
  timescale.
- **[[Geologic maps]]** record where rock units crop out at the surface. Maps from
  many organizations, at scales from quadrangles to the globe, are brought into one
  harmonized, multiscale map.
- The **[[Geologic lexicon]]** is the shared vocabulary that makes the first two
  comparable: stratigraphic names, lithologies, depositional environments, economic
  resources, and the intervals of the geologic timescale.

Around this core sit records from other systems: fossil collections, geochemical
samples, ocean-drilling cores and descriptions mined from the scientific literature.
They attach to Macrostrat's units through the same lexicon, by location and by
age (see [[Linking data]]).

## How the pieces fit

| Component | What it holds | Where to read more |
| --- | --- | --- |
| Columns and units | Successions of rock and sediment, with lithologies, environments, thicknesses and ages | [[Stratigraphic columns]], [[Age model]] |
| Lexicon | Controlled vocabularies and the timescale | [[Geologic lexicon]] |
| Map sources | Individual geologic maps: polygons, lines, points and their legends | [[Geologic maps]], [[Map ingestion]] |
| Compilations | Multiscale maps assembled from many sources, served as one map | [[Map compilations]] |
| Links | Matches between map legends, column units, names and outside records | [[Linking data]] |
| Literature | Entities and relations extracted from geologic papers | [[Knowledge graph]] |

All of it lives in a single PostgreSQL/PostGIS database and is served to the world
through public APIs and map tiles ([[Data services]]). Macrostrat's own website, the
[Rockd](https://rockd.org) mobile app and many third-party applications are built on
those services. How the software is put together is described in
[[System architecture]].

## Design principles

A few ideas recur throughout the system:

- **Time is first-class.** Units are positioned in geologic time, not just in
  space. Ages come from an explicit model that can be refined as constraints
  improve, and every derived age (for a map unit, a fossil, a sample) traces back to
  it.
- **Multiscale by construction.** The same data structures hold a global
  compilation and a single measured section, a continental map and a quadrangle.
  Detail is added where it exists without breaking the coarse picture elsewhere.
- **Harmonize, but keep the source.** Maps and columns are translated into
  Macrostrat's shared vocabulary so they can be compared, but each record keeps its
  original description and its reference.
- **Open by default.** Data are available through public APIs under a CC-BY
  license, and the software is open source.

If a term is unfamiliar, the [[Glossary]] defines the vocabulary used across these
pages.
