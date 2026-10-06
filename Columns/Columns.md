---
title: Columns
permalink: index
---

A stratigraphic column records the succession of rock units at a place, each unit
positioned in geologic time by an explicit age model. Columns are the oldest part of
Macrostrat and the basis of most of its scientific results.

> [!cards]
> - [[Stratigraphic columns]]: The column model: units, sections, boundaries, and how columns are organized.
> - [[Age model]]: How units are placed in geologic time, and how ages flow to everything linked to them.
> - [[Accessing column data]]: Getting column footprints, units and measurements through the API.
> - [[Column ingestion quickstart]]: Step-by-step guide to building a column spreadsheet.
> - [[Full specification|Column ingestion format]]: The full spreadsheet format for preparing new columns.

## Glossary

**Age model**: The account of how a column's units are placed in geologic time: ages at
the surfaces between units, anchored at tie points and interpolated between them. See
[[Age model]].

**Column**: A record of the succession of rock units at a place, compiled at regional or
local scale. Also used generally for both column types (column and section). See
[[Stratigraphic columns]].

**Column group**: A set of related columns, for example those of one basin.

**Footprint**: The area a record covers: a column's footprint is the region it
represents; a map's footprint is where it is defined.

**Package**: An unconformity-bounded group of units within a column, inside which time
is represented continuously. Stored as a *section* in the database.

**Project**: A dataset of columns developed as a unit within Macrostrat, such as the
core North American compilation or a set of ocean-drilling cores.

**Section**: (1) A column type recording one physical succession, such as a measured
section or core, positioned by height. (2) An unconformity-bounded package of units
within a column.

**Tie point**: A surface in a column whose age is constrained directly (absolute,
relative, spike or imposed), as opposed to interpolated by the age model.

**Unit**: A body of rock or sediment within a column, bounded in space and time and
described by its name, lithologies, environments, thickness and age.
