---
title: History and Version 2
---

## Origins

Macrostrat began as a research database at the University of Wisconsin–Madison, built
to support macrostratigraphy (see [[Scientific approach]]). Its development was
supported from 2012 to 2019 by an NSF CAREER award to Shanan Peters, and the system was
designed largely in-house by a small team. Over the following decade it grew from a
compilation of North American columns into a platform that also integrates geologic
maps from around the world, serves them through public APIs, and underlies the
[Rockd](https://rockd.org) mobile app. The platform is described in
[Peters et al. (2018)](https://doi.org/10.1029/2018GC007467).

## Macrostrat v1: harnessing data

The first generation of Macrostrat showed what an integrated record of the crust could
do. Its data entered wide use in research, teaching and applications far beyond the
lab. But almost all data entry and curation was done by the core team, so coverage
grew only as fast as that team could work. Large parts of the world, and finer scales
of data everywhere, remained out of reach.

## Macrostrat v2: harnessing the community

**Macrostrat v2** is a plan to overcome that limit by opening the system to
contribution. It was first described in a 2021 Geological Society of America talk and
in the platform paper in the *Geoscience Data Journal*
([doi:10.1002/gdj3.189](https://doi.org/10.1002/gdj3.189)). Its central idea is a
virtuous cycle between software and engagement, of the kind that built Wikipedia,
OpenStreetMap and community databases like the Paleobiology Database: better tools
make contribution easier, contributions make the data more useful, and more useful
data draws in more contributors.

In practice, v2 means:

- **Contribution workflows** for maps and columns that geologists outside the core
  team can use, with review and change tracking;
- **Multiscale data**, from global compilations down to measured sections and
  individual maps;
- **Open, modular software** that other projects can reuse and extend;
- **Linking** with other geoscience data systems.

## Building v2

Work on v2 began in earnest in 2023, when the first funding for the effort was
secured. Two NSF projects support it: one for column editing and geochemical data
integration (OAC-2311091) and one for map system development and integration with
StraboSpot (RISE-1928273). In parallel, a DARPA project on critical minerals assessment
(CriticalMAAS) funded a move to a containerized, Kubernetes-based infrastructure at
UW–Madison's Center for High Throughput Computing, with substantial ongoing support
from the Center and the university.

As of 2026, Macrostrat runs fully on its new infrastructure. Current work includes
bringing in major new map compilations from the United States, Europe and Japan,
rebuilding the map compilation system, web-based column editing, and contributor
accounts. The website at the new address is in beta, and these documentation pages
are part of that effort.
