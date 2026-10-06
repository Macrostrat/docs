---
title: Codebase
---

Macrostrat's software is open source and spread across several repositories, each
released independently. Most live in the
[UW-Macrostrat](https://github.com/UW-Macrostrat) organization on GitHub.

## Core system

| Repository | What it holds |
| --- | --- |
| [macrostrat](https://github.com/UW-Macrostrat/macrostrat) | The core of the system: database schema definitions, the `macrostrat` command-line tool, map and column ingestion libraries, and services including the tile server, API v3 and background workers. Developer documentation in this section comes from its `docs/` directory. |
| [macrostrat-api](https://github.com/UW-Macrostrat/macrostrat-api) | API v2, the stable public data API (Node.js) |
| [web](https://github.com/UW-Macrostrat/web) | The Macrostrat website (TypeScript, React, Vike), including the map, columns, lexicon and contributor interfaces and the renderer for these documentation pages |
| [column-ingestion](https://github.com/Macrostrat/column-ingestion) | The specification and templates for the column ingestion format ([[Full specification]]; [[Column ingestion quickstart]]) |
| [docs](https://github.com/Macrostrat/docs) | These documentation pages |

## Libraries

| Repository | What it holds |
| --- | --- |
| [python-libraries](https://github.com/UW-Macrostrat/python-libraries) | Python packages under the `macrostrat` namespace on PyPI, notably `macrostrat.database` for database access, plus application, authentication, raster and utility modules ([documentation](/docs/python-libraries/)) |
| [web-components](https://github.com/UW-Macrostrat/web-components) | React and TypeScript components published under `@macrostrat` on npm: map interfaces, column views, timescales, data sheets and UI building blocks ([component documentation](/docs/web-components/)) |

## Related projects

| Repository | What it holds |
| --- | --- |
| [corelle](https://github.com/UW-Macrostrat/corelle) | A plate rotation system compatible with GPlates, used to place Macrostrat's data in paleogeographic context |
| [topology-manager](https://github.com/Mapboard/topology-manager) | Topological map management for PostGIS, shared with the Mapboard GIS app and used for Macrostrat's map compilations |
| [macrostrat-xdd](https://github.com/UW-Macrostrat/macrostrat-xdd) | Pipelines that extract geologic information from the literature through xDD, feeding the [[Knowledge graph]] |
| [rockd-website](https://github.com/UW-Macrostrat/rockd-website) | The website for the Rockd mobile app |

Development of these repositories is closely coupled even though they are released
separately: a change to a tile layer, for example, usually touches the tile server and
the website together.
