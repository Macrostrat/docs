---
title: Map ingestion
---

Map ingestion is how a geologic map published by a survey or researcher becomes part
of Macrostrat. A map moves through a sequence of stages; at each one it is checked,
cleaned or enriched, and its progress is tracked so that many maps can be in flight at
once.

Before version 2, maps were added through scripts run by the core team, one map at a
time. Since October 2026 the pipeline described here, with its web interface for
harmonizing legends, is how every map enters Macrostrat: new and updated maps appear
sooner, each map unit records its source and how it was harmonized, and a correction to
one map does not rebuild the whole.

## 1. Acquisition

Map packages (shapefiles, geodatabases, GeoPackages, georeferenced images and their
documentation) are gathered from the publishing organization. For large programs,
such as state and national survey archives, harvesting scripts collect maps in bulk
along with their metadata: title, source URL, scale and the files that make up each
map. The original files are kept in Macrostrat's object store, so the ingested map can
always be compared with what was published.

## 2. Staging

Each map is registered as a [[Geologic maps|source]] and its features are loaded into
**staging tables**: one table each for polygons, lines and points, with a standard
set of columns. Staging is a workspace: nothing here appears on Macrostrat's public
map yet. An **ingestion record** tracks the map through its states:

> pending → ingested → needs review → post-harmonization → ready → finalized

(or *failed*, if something goes wrong). The list of maps in progress, and their
states, is visible in Macrostrat's map ingestion interface.

## 3. Normalization and harmonization

The staging tables are brought into Macrostrat's standard form. Original attribute
columns are copied or transformed into the fields Macrostrat expects (unit name,
stratigraphic name, age, lithologies, description; see
[[Maps|Contributing maps to Macrostrat]]). Values are cleaned and checked: ages are
translated into formal intervals, structural measurements are validated, and features
that should not be shown are flagged for omission.

This work can be done in a spreadsheet-like web interface over the staging tables or
with command-line tools; both edit the same data. It is the step where a geologist's
judgment matters most, and where contributors outside the Macrostrat team are
increasingly involved.

## 4. Processing

Cleaned features are copied from staging into Macrostrat's core map tables, sorted by
scale. Polygons are grouped into **legend entries**, one per distinct unit
description, and the map's footprint is computed from its features.

## 5. Matching to the lexicon

Each legend entry is matched to Macrostrat's [[Geologic lexicon]]: stratigraphic
names, column units and lithologies. The matches are rolled up into a best estimate of
each unit's age and its display color. This is what makes a newly ingested map
searchable by name, age and rock type, and what connects it to Macrostrat's columns.
See [[Linking data]].

## 6. Compilation and serving

Finally, the map is placed into the multiscale map: it is given a position among the
maps that overlap it, so that the most appropriate map is shown at each location and
zoom level ([[Map compilations]]). Placement into the main **carto** map follows
review: the map is checked for quality and for what it adds to existing coverage.
A map does not have to be part of the carto map to be useful: every ingested map
remains a source in its own right, with its original attributes preserved.

## Tools

Ingestion is driven by the `macrostrat` command-line tools (`macrostrat maps ...`)
and by the map ingestion pages of the Macrostrat website. Developer-level
documentation for the pipeline lives with the code in the
[macrostrat repository](https://github.com/UW-Macrostrat/macrostrat), including the
staging file schema ([[Map Ingestion - Files Schema]]).

If you have a map you would like to see in Macrostrat, see
[[Maps|Contributing maps to Macrostrat]].
