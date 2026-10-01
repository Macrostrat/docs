---
title: Glossary
---

Terms used across Macrostrat's documentation and software.

**Age model**: The account of how a column's units are placed in geologic time: ages at the
surfaces between units, anchored at tie points and interpolated between them. See
[[Age model]].

**Best age**: The age range assigned to a map legend entry by combining the map's stated
intervals with the ages of linked column units.

**Carto**: Macrostrat's main multiscale geologic map, composed from all integrated maps and
served as map tiles at several levels of detail. See [[Map compilations]].

**Column**: A record of the succession of rock units at a place, compiled at regional or local
scale. Also used generally for both column types (column and section). See
[[Stratigraphic columns]].

**Column group**: A set of related columns, for example those of one basin.

**Compilation**: A map assembled from other maps (its members), with priorities deciding which
member is shown where. See [[Map compilations]].

**Concept**: The stratigraphic unit a name refers to, as defined in an authoritative lexicon.
Several names may share a concept. See [[Geologic lexicon]].

**Environment**: A depositional environment (for example, fluvial or carbonate marine) assigned to
units.

**Footprint**: The area a record covers: a column's footprint is the region it represents; a map's
footprint is where it is defined.

**Interval**: A named span of geologic time (an eon, period, stage, zone and so on) with numeric
top and bottom ages. Intervals are grouped into timescales.

**Legend entry**: All the polygons of a map that share one description. Legend entries are the unit
of harmonization. See [[Geologic maps]].

**Lexicon**: Macrostrat's controlled vocabularies: stratigraphic names and concepts,
lithologies, lithology attributes, environments, economic attributes and intervals.
See [[Geologic lexicon]].

**Lithology**: A rock type (for example, *basalt*), placed in a hierarchy of group, type and class
(*mafic*, *volcanic*, *igneous*).

**Lithology attribute**: A qualifier of a lithology, such as a sedimentary structure, bedform, grain
characteristic or color.

**Mosaic**: A compilation whose members divide its area between them without overlapping.

**Package**: An unconformity-bounded group of units within a column, inside which time is
represented continuously. Stored as a *section* in the database.

**Priority**: The authored rank that decides which map is shown where maps overlap in a
compilation.

**Project**: A dataset of columns developed as a unit within Macrostrat, such as the core North
American compilation or a set of ocean-drilling cores.

**Scale (tiny, small, medium, large)**: The four scale buckets Macrostrat sorts maps into, from global compilations (tiny)
to detailed local mapping (large).

**Section**: (1) A column type recording one physical succession, such as a measured section or
core, positioned by height. (2) An unconformity-bounded package of units within a
column.

**Served layer**: A compilation that is published as map tiles.

**Source**: Any map in Macrostrat, individual or compiled, identified by a `source_id` and a
`slug`.

**Staging**: The workspace where a newly ingested map is cleaned and harmonized before it joins
Macrostrat's core map tables. See [[Map ingestion]].

**Stratigraphic name**: A name for a body of rock (supergroup, group, subgroup, formation, member or bed) as
used in a particular place, nested within its parent names.

**Superseded**: Said of a map that has been replaced by a newer map or compilation.

**Tie point**: A surface in a column whose age is constrained directly (absolute, relative,
spike or imposed), as opposed to interpolated by the age model.

**Timescale**: A set of intervals that together divide geologic time, such as the international
chronostratigraphic timescale.

**Unit**: A body of rock or sediment within a column, bounded in space and time and described
by its name, lithologies, environments, thickness and age.
