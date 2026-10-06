---
title: Maps
permalink: index
---

Geologic maps show where rock units reach the surface. Macrostrat integrates maps
made by many organizations, at scales from a single quadrangle to the whole globe,
into one harmonized map, and keeps each source's original description beside it.

> [!cards]
> - [[Geologic maps]]: What a map source is, how its units are harmonized, and how the integrated map is served.
> - [[Map ingestion]]: The stages a published map passes through to become part of Macrostrat.
> - [[Map compilations]]: How maps assemble into compilations, and how their overlaps are resolved.
> - [[Contributing maps]]: The fields a map needs for each unit, for anyone preparing a map to contribute.
> - [Map interface](/docs/website/map): Using the interactive map on the website, and what changed in each release.

## Glossary

**Best age**: The age range assigned to a map legend entry by combining the map's stated
intervals with the ages of linked column units.

**Carto**: Macrostrat's main multiscale geologic map, composed from all integrated maps
and served as map tiles at several levels of detail. See [[Map compilations]].

**Compilation**: A map assembled from other maps (its members), with priorities deciding
which member is shown where. See [[Map compilations]].

**Legend entry**: All the polygons of a map that share one description. Legend entries
are the unit of harmonization. See [[Geologic maps]].

**Mosaic**: A compilation whose members divide its area between them without
overlapping.

**Priority**: The authored rank that decides which map is shown where maps overlap in a
compilation.

**Scale (tiny, small, medium, large)**: The four scale buckets Macrostrat sorts maps
into, from global compilations (tiny) to detailed local mapping (large).

**Served layer**: A compilation that is published as map tiles.

**Source**: Any map in Macrostrat, individual or compiled, identified by a `source_id`
and a `slug`.

**Staging**: The workspace where a newly ingested map is cleaned and harmonized before
it joins Macrostrat's core map tables. See [[Map ingestion]].

**Superseded**: Said of a map that has been replaced by a newer map or compilation.
