---
title: Changelog
---
Here, we describe notable changes to the Macrostrat platform as a whole.
## October 2026

The initial public release of Macrostrat [[Version 2]]!

- **Website 5.3.0.** The map, columns, lexicon and documentation are one site, with
  site search, sign-in with ORCID, and pages about Macrostrat and its community.
  Earlier addresses, Sift's included, redirect to their new pages.
  [Website changelog](/docs/website/changelog#530)
- **Map ingestion and compilations.** Maps are ingested through a staged pipeline and
  combined into compilations; the first are the USGS National Geologic Synthesis,
  Japan and Arizona. [[Map ingestion]], [[Map compilations]]
- **Map tiles.** <!-- TODO: tileserver version --> Tiles for any compilation by name,
  and a WMTS service for raster layers, so GIS clients such as QGIS can load them.
  [Tileserver changelog](https://github.com/UW-Macrostrat/macrostrat/blob/main/services/tileserver/CHANGELOG.md)
- **API v2 2.4.0.** Faster map queries based on our new unified map system, and a `/version` route that reports deployment details. The routes are otherwise unchanged.
  [API v2 changelog](https://github.com/UW-Macrostrat/macrostrat-api/blob/main/CHANGELOG.md)
- **API v3** remains *in development*; its routes may change. [[Data services]]

Macrostrat's old website and the Sift application are still available [here](https://web-legacy.production.svc.macrostrat.org/).

## March 2026

- **Cloud-native platform:** Macrostrat moved from a single server to containers on a Kubernetes cluster at UW–Madison's Center for High Throughput Computing.
- **Unified database:** data were consolidated into one PostgreSQL/PostGIS database; before that, columns and the lexicon were in MariaDB.