---
title: Related systems
---

Macrostrat is one part of a broad ecosystem of geoscience data systems. Some supply
data that Macrostrat integrates, some build on Macrostrat's data, and some share
software and identifiers with it. The full, maintained list of integrations is on the
[community integrations page](/community/integrations); this page explains how the main
ones connect to Macrostrat's data model.

## Data Macrostrat builds on

- **Geologic surveys** publish most of the maps Macrostrat integrates. In the United
  States, the USGS [National Geologic Map Database](https://ngmdb.usgs.gov) is a
  primary source of maps and metadata, and its [Geolex](https://ngmdb.usgs.gov/Geolex)
  lexicon defines many of the stratigraphic concepts names are linked to (see
  [[Geologic lexicon]]).
- The [International Commission on Stratigraphy](https://stratigraphy.org) maintains
  the international chronostratigraphic chart, which anchors Macrostrat's timescale and
  [[Age model]].
- [EarthByte and GPlates](https://www.earthbyte.org) provide plate rotation models
  that Macrostrat uses, through its Corelle rotation service, to place maps and columns
  in their positions in deep time.
- [xDD](https://xdd.wisc.edu) provides access to the geologic literature, the source of
  Macrostrat's [[Knowledge graph]].

## Data linked into Macrostrat's framework

These systems hold site-based records that gain stratigraphic and age context from
Macrostrat, and in turn enrich its units (see [[Linking data]]):

- the [Paleobiology Database](https://paleobiodb.org) (fossil occurrences);
- the [Sedimentary Geochemistry and Paleoenvironments Project](https://sgp-search.io)
  (geochemical proxy records);
- ocean-drilling cores, compiled into Macrostrat columns through the eODP project;
- [StraboSpot](https://strabospot.org), a field data system with which Macrostrat
  shares an open-source software ecosystem.

## Applications built on Macrostrat

Macrostrat's [[Data services]] provide geologic context to many applications, including
[Rockd](https://rockd.org), StraboSpot, Mindat, iNaturalist, Flyover Country and
Mancos, as well as museum exhibits, geological surveys and individual researchers.
