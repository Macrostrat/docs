---
title: Geologic maps
---

Geologic maps show where rock units reach the surface. Where
[[Stratigraphic columns]] describe the vertical succession of rocks at a place, maps
describe their extent across the landscape. Macrostrat integrates maps made by many
organizations, at scales from individual quadrangles to the whole globe, into a
single queryable, multiscale geologic map of the Earth. It can be explored in the map
interface (`/map`) and through the API and map tiles ([[Data services]]).

## Map sources

Each map brought into Macrostrat is a **source**. A source records the map's
bibliographic reference (authors, title, year, publisher, DOI), its license, the URL
it came from, and its **scale**. Macrostrat sorts maps into four scale buckets:

| Scale | Typical maps |
| --- | --- |
| **tiny** | Global compilations |
| **small** | Continental and national compilations |
| **medium** | Regional and state maps |
| **large** | Detailed local mapping, such as quadrangles |

A source also has a **footprint**: the area it covers. Footprints decide where each
map is drawn and which map wins where several overlap (see [[Map compilations]]).

Each source is identified by a numeric `source_id` and a short, readable `slug`.

## What a map contains

A map source holds three kinds of geometry:

- **Polygons**: the units on the map. Each polygon carries the descriptive fields of
  its legend: a unit name, a stratigraphic name, an age as written by the author,
  formal base and top intervals, lithologies, and a free-text description.
- **Lines**: contacts, faults and other linear features, each with a type and
  name.
- **Points**: point observations, chiefly structural measurements such as strike and
  dip.

Polygons that share a description form a **legend entry**. The legend is the unit
of harmonization: matching a legend entry to Macrostrat's vocabulary applies to every
polygon drawn with it. The fields Macrostrat expects for polygons are described in
[[Contributing maps|Contributing maps to Macrostrat]].

## From many maps to one

Source maps overlap, disagree at their edges, and describe rocks in their authors'
own terms. Three steps turn them into one coherent map:

1. **Ingestion** brings a map's files into Macrostrat and cleans them into the
   standard structure above ([[Map ingestion]]).
2. **Harmonization** matches each legend entry to the [[Geologic lexicon]]:
   stratigraphic names, lithologies and time intervals. This is what lets a user
   search for "all Ordovician carbonates" across maps made by different surveys
   decades apart ([[Linking data]]).
3. **Compilation** decides which map is shown where, at each zoom level, so that
   detailed maps appear where they exist and global maps fill in everywhere else
   ([[Map compilations]]).

The result is published as Macrostrat's **carto** map: one continuous geologic map at
several levels of detail, used by Macrostrat's own map interface, by
[Rockd](https://rockd.org), and by many other applications. Every polygon in it can
still be traced back to the map it came from and that map's original description.

## Coverage

Macrostrat currently integrates more than 300 geologic maps containing more than 2.5
million polygons, with global coverage at small scales and detailed mapping where it has
been ingested, most extensively in the United States. Major new compilations from the United States, Europe and
Japan are being brought in.
