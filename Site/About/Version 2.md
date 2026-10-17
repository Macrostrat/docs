---
title: Version 2
route: /about/version-2
summary: What the version 2 effort changed in Macrostrat, in one place, with where to read more.
---

Macrostrat **Version 2** is the culmination of a multi-year effort to improve the capacity and extensibility of Macrostrat. It was conceived in 2021, started in 2023 with
[new funding](/about/support), and has been deployed over 2026.
## Platform improvements

- **Hosting.** From one server to containers on a Kubernetes cluster at UW–Madison's
  Center for High Throughput Computing. *Released March 2026.*
  [[System architecture#Infrastructure]]
- **Database.** From MariaDB and PostgreSQL side by side to one PostgreSQL/PostGIS
  database. *Released March 2026.* [[System architecture#Database]]
- **Map ingestion.** A new staged map ingestion pipeline, topology model and compilations system. First compilations: the USGS National Geologic Synthesis, Japan, Arizona. *Released
  October 2026.* [[Map ingestion]], [[Map compilations]]
- **Website.** Separate map, column and "Sift" applications were integrated into one multi-page site, with better navigation and efficient server-side rendering. The website gained new more informative column views (which have been in development for years), unified lexicon pages, and a documentation section. *Released October 2026.*
  [[Web interfaces]], [changelog](/docs/website/changelog). The old version of the website can be found at [`v1.macrostrat.org`](https://v1.macrostrat.org).
- **API v3.** New APIs for authentication and data creation: *In development.* [[Data services]]
- **Accounts.** Sign-in with ORCID for everyone; tools that write data are being
  tested with collaborators, with a public beta to follow. *In development.*
  [Contributing](/docs/contributing)
- **Rockd.** Moving to the same infrastructure, in parallel. *In progress.*
  [rockd.org](https://rockd.org)

<!-- Link the map ingestion usage guide (/docs/website) when it exists, and Rockd's
release notes when they have a public home. -->

### Next steps

- **Contribution tools for the community**, as the data tools open in a public beta.
  [Contributing](/docs/contributing)
- **Domain data through a shared "facet" model**, attaching geochemical,
  geochronological and other datasets to units and ages. [[Linking data]]
- **Paleogeography**, placing maps and columns through time with
  [Corelle](https://github.com/UW-Macrostrat/corelle).
- **Three-dimensional and structural geology**, from the map surface into the
  subsurface, with field systems such as StraboSpot. [Integrations](/community/integrations)
