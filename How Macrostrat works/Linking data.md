---
title: Linking data
---

Macrostrat is more than an overlay of maps and columns. Its value comes from **links**
between records of different kinds, which let information flow from one to another:
a map unit gains a precise age from a column, a column unit gains a detailed
description from a map, a fossil or a geochemical sample is placed in its
stratigraphic context. Together these links are the identity-carrying elements of a
geologic framework model.

Nearly all links pass through the [[Geologic lexicon]], above all through
stratigraphic names, constrained by **location** and **age**.

## Map legends to the lexicon

When a map is ingested, each [[Geologic maps|legend entry]] is matched against
Macrostrat's vocabularies (see [[Map ingestion]]):

- **Stratigraphic names** are looked for in the legend's stratigraphic name field,
  and also in the unit name, description and comments. A candidate name counts only
  if it is plausible where the map is: Macrostrat records whether a match is
  supported by a column unit at that location, by an adjacent column, by the
  footprint where the name is known to occur, or by nothing beyond the name itself.
  This is what keeps the Admiral Formation of the United States from being confused
  with the unrelated Admiral Formation of Australia.
- **Column units** are matched by name, space and time: a map unit is linked to the
  units of the [[Stratigraphic columns|columns]] beneath it that carry the same name
  and overlap it in age.
- **Lithologies** named in the legend are matched to Macrostrat's lithology terms.

The matches are then rolled up onto each legend entry: the stratigraphic names,
concepts, column units and lithologies it corresponds to, a **best age** that combines
the map's stated intervals with the ages of linked column units, and a display color.
Each match records the basis on which it was made, so links can be reviewed and their
strength weighed.

## Columns and maps

Linking map units to column units runs in both directions. Map units inherit the
precise ages of the [[Age model]], so a polygon labelled only by period gains ages
from the units it matches. Column units, in turn, gain the extent and detailed
lithologic descriptions recorded on maps.

## Outside records

Records from other data systems attach to Macrostrat units through the same
strategies:

- **Fossil collections** from the [Paleobiology Database](https://paleobiodb.org) are
  matched to column units using their stratigraphic names and locations, connecting
  the rock and fossil records.
- **Geochemical samples**, for example from the Sedimentary Geochemistry and
  Paleoenvironments Project (SGP), are matched to units so that each measurement
  carries its stratigraphic and age context.
- **Ocean-drilling cores** enter as columns of their own (see
  [[Stratigraphic columns]]).
- **Literature**: descriptions of units extracted from geologic papers are linked to
  the lexicon through the [[Knowledge graph]].

Each integration adds a new kind of data to the framework, and a new way to check it:
a sample that does not fit the age of the unit it matches points to a problem in one
record or the other.
