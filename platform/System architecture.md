---
title: System architecture
---

Macrostrat is a **database-centric** system. A single PostgreSQL/PostGIS database holds
all of its data and much of its logic; a small set of services expose that database to
the web; and command-line tools manage it. This page is an overview across the whole
system. Developer documentation for individual components lives with their code and is
collected in this section and in [[Codebase]].

## The database

Everything described under [[Maps]], [[Columns]] and [[Lexicon]] lives in one PostgreSQL database with
the PostGIS spatial extension, organized into schemas by subsystem:

| Area | Schemas | Holds |
| --- | --- | --- |
| Stratigraphy and lexicon | `macrostrat` | Columns, units, sections, unit boundaries (the age model), stratigraphic names and concepts, lithologies, environments, intervals and timescales, references, and derived lookup tables |
| Maps | `maps` | Map sources, their polygons, lines and points (partitioned by scale), legends, and the matches between legends and the lexicon |
| Map ingestion | `sources`, `maps_metadata` | Per-map staging tables and the records that track each map through ingestion |
| Compilations and topology | `map_bounds`, `map_bounds_topology` | Map footprints, compilations and their members, priorities, and the topological face coverage of each served layer |
| Serving | `carto`, `tile_layers`, `tile_cache` | The multiscale carto map, the SQL functions that produce vector tiles, and a cache of rendered tiles |
| Integrations | `integrations`, `macrostrat_kg` | Linked external datasets such as geochemical samples, and the literature-derived knowledge graph |
| Access | `macrostrat_auth`, `macrostrat_api`, `map_ingestion_api` | Users, roles and tokens, and the curated views exposed to client applications |
| Storage | `storage` | A registry of files held in the object store |

The schema is defined declaratively in the `macrostrat` repository and applied with
Macrostrat's command-line tools, which compare the definitions to a running database
and plan the changes needed.

Before version 2, columns and the lexicon were held in MariaDB and maps in PostgreSQL,
with copies of some tables moving between the two. The conversion to one database began
in late 2024 and finished in March 2026 without interrupting any service. Query results
that once depended on periodic copies are live, and the public API's responses did not
change.

## Services

Several services sit between the database and its users:

- **API v2** (Node.js) is the stable, public data API at `macrostrat.org/api`, serving
  columns, units, maps and the lexicon ([[Data services]]).
- **API v3** (Python, FastAPI) is the newer API that supports Macrostrat v2's workflows:
  map ingestion, compilations, column ingestion, user accounts and tokens.
- **PostgREST** exposes curated database views directly as a REST interface, used by
  the website's data editors (for example, the map ingestion tables).
- The **tile server** (Python, FastAPI) renders vector tiles from SQL functions in the
  database, along with raster tiles from cloud-optimized GeoTIFFs. Rendered tiles are
  cached in the database and behind an HTTP cache, so most requests never reach the
  tile-rendering functions. A legacy tile server still produces pre-styled PNG tiles
  of the carto map.
- The **website** (TypeScript, React, server-rendered with Vike) provides the user
  interfaces described in [[Web interfaces]], including these documentation pages.
- **Background workers** run long tasks, such as deleting staged maps or ingesting
  columns, off the request path. These are being introduced.

An API gateway routes requests by path: `/api/v2` to API v2 (also the default under
`/api`), `/api/v3` to API v3, and PostgREST under API v3. Tiles are served from
`tiles.macrostrat.org`.

Rockd uses Macrostrat's APIs for geologic context and has its own services and
database for accounts and social features.

## Files and object storage

Original map packages, raster datasets and media are kept in an S3-compatible object
store at `storage.macrostrat.org`, rather than in the database. The database records
which files exist and what they belong to.

## Infrastructure

Macrostrat runs in containers on a Kubernetes cluster at UW–Madison's Center for High
Throughput Computing. Its deployment is described as code in a configuration repository
and applied continuously from version control (GitOps), with separate production and
development environments. The database runs under a PostgreSQL operator that manages
replication and backups.

Before version 2, the database, APIs and websites ran on a single server; the move to
the cluster was released in March 2026. Because the deployment is applied from version
control, the production environment and the one where changes are tested are built the
same way and a change to either is reviewed before it is applied, a failed component
recovers on its own, and services such as background workers for long-running jobs can
be added without touching the rest of the system.

## Command-line tools

The `macrostrat` command-line tool, written in Python, is the control surface for the
system: it manages database schemas, runs map and column ingestion, builds derived
tables, manages rasters, clears tile caches, and runs data-integration pipelines. A
single configuration file describes multiple environments (local, development,
production) and guards against accidental writes to the wrong one. See
[[Environment configuration and write safety]] and [[Macrostrat in a Box]] for
running Macrostrat locally.

## Shared libraries

Common code is published as libraries that Macrostrat's services, and other projects,
build on: Python libraries for database access, application configuration and raster
handling, and a monorepo of React web components for maps, columns, timescales and
data tables. See [[Codebase]].
