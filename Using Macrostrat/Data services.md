---
title: Data services
---

Macrostrat's data are available through public web services, free to use under a
[CC-BY 4.0 license](https://creativecommons.org/licenses/by/4.0/). Macrostrat's own
website and the Rockd app are built on the same services that are open to everyone.

## The Macrostrat API

The general-purpose API at [`https://macrostrat.org/api`](https://macrostrat.org/api)
(version 2, the default) exposes Macrostrat's columns, units, maps and lexicon. Each
route describes its own parameters when called without arguments. The main families of
routes are:

| Routes | Provide |
| --- | --- |
| `/columns`, `/units`, `/sections` | [[Stratigraphic columns]], their units and packages, filterable by location, age, lithology, name, project and more |
| `/age_model` | The surfaces and ages of a column's [[Age model]] |
| `/geologic_units/map` | The map units at or near a location, from the integrated geologic map |
| `/defs/...` | The [[Geologic lexicon]]: lithologies, lithology attributes, environments, economic attributes, intervals, timescales, stratigraphic names and concepts, map sources, projects and references |
| `/fossils`, `/measurements` | Fossil collections and measurements linked to units |

Responses are available as JSON and CSV, and many routes also return GeoJSON or
TopoJSON for use in GIS. Every response states its license, and records carry
references to their original sources.

For a guided tour with examples, see [[The Macrostrat Geologic API]] and
[[Accessing column data]].

## Map tiles

Macrostrat's tile server at [`https://tiles.macrostrat.org`](https://tiles.macrostrat.org/docs)
serves the integrated geologic map as tiles for web maps and GIS:

- **Vector tiles** of the carto map at `https://tiles.macrostrat.org/carto/{z}/{x}/{y}`,
  with map units and lines as separate layers carrying their attributes. A lighter
  variant with fewer attributes is available at `/carto-slim/{z}/{x}/{y}`.
- **Raster tiles** of the same map, pre-styled, at
  `https://tiles.macrostrat.org/carto/{z}/{x}/{y}.png`.
- **Raster layers** derived from remote sensing and other gridded data, such as
  mineral maps, under `/rasters/...`, including WMTS endpoints for GIS (see
  [[Using raster layers in QGIS]]).

The tile server's interactive API documentation is at
[`tiles.macrostrat.org/docs`](https://tiles.macrostrat.org/docs).

## In development

New services are being built as part of Macrostrat v2 and are not yet stable:

- **API version 3**, a Python service for the workflows version 2 introduces: map
  ingestion, compilations, column ingestion, and user accounts with tokens. It is in
  early development; its routes may change, and it should not be relied on for
  published work. API version 2 is unchanged and remains the stable way to read data;
- direct, query-based access to curated views of the database for contributors and
  integrations;
- tiles for individual maps and compilations, alongside the carto map;
- an elevation service backed by global digital elevation models.

## Use and impact

Macrostrat's services are used by a wide range of applications, including
[Rockd](https://rockd.org), StraboSpot, Mindat, iNaturalist, Flyover Country and
Mancos, a California Academy of Sciences museum kiosk, geological surveys and
individual researchers. As of 2023, the tile server had served more than 2 billion
requests since logging began in 2018, and the data APIs were serving millions of
requests each month.
