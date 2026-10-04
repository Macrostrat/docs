---
title: Stratigraphic columns
---

A **column** is Macrostrat's record of the rock succession at a place. Columns are
built from stacked **units**: bodies of rock or sediment bounded in both space and
time. The column model is the oldest part of Macrostrat and the basis of most of its
scientific results.

## Columns

Each column has a location and, usually, a **footprint**: the area it represents,
stored as a polygon. Columns are tiled across a region so that every point falls
within one, which lets Macrostrat answer "what is beneath this location?" and sum
rock quantities over areas.

Columns come in two types:

- **Columns** proper are composite records, typically compiled at basin or regional
  scale from published stratigraphic summaries (for example, the COSUNA charts for
  North America). Units are ordered in geologic time. Most of Macrostrat's columns
  are of this kind.
- **Sections** are records of one physical succession, such as a measured outcrop
  section or a drill core, where units are positioned by stratigraphic height.

Both use the same data structure. Superposition can be tracked against height or
against time, so the system can hold anything from a regional composite with no
single physical locality to a centimetre-scale core log.

Columns are grouped into **column groups** (for example, the columns of one basin)
and into **projects**. A project is a dataset developed in its own right inside
Macrostrat: the core North American compilation, ocean-drilling cores (the eODP
project), or focused compilations of particular basins and time intervals. Projects
let new datasets grow without disturbing the core dataset. A column's **status**
records whether it is part of the public, active dataset or still in process.

## Units

A unit describes a body of rock with consistent character. It carries:

- a **stratigraphic name**, where one applies, linked to the [[Geologic lexicon]];
- **lithologies** (dominant and subordinate rock types) and **lithology attributes**
  such as sedimentary structures, bedforms or grain sizes;
- **depositional environments** and **economic** attributes;
- **thickness**, as a single value or a minimum and maximum;
- **ages**, from the column's [[Age model]];
- **references** to the publications the description comes from.

Units can be linked to records held elsewhere: fossil collections in the
[Paleobiology Database](https://paleobiodb.org), geochemical and other measurements,
and the units of [[Geologic maps]] (see [[Linking data]]).

## Sections and packages

Within a column, units can be grouped into **sections**: unconformity-bounded
packages within which time is represented continuously. (These are distinct from the
*section* column type above.) Packages mirror how stratigraphers already reason about
the rock record, and they bound where the age model may interpolate.

## Getting columns into Macrostrat

New column data are prepared as spreadsheets in Macrostrat's column ingestion format
(see [[Format documentation]]), which describes columns, units, facies, metadata and
references in separate sheets. The format is loaded by Macrostrat's command-line
tools. A web-based column editor is in development; contributors interested in
adding columns should get in touch (see [Contributing](/community/contributing)).

## Getting columns out

Columns, units and their footprints are available through the public API, in JSON,
CSV and GIS-ready formats. See [[Accessing column data]] and [[Data services]].
