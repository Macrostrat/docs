---
title: Knowledge graph
---

> [!note] In active development
> The knowledge graph and its review tools are under development and not yet part of
> Macrostrat's public data services.

Much of what is known about rock units is written down in the scientific literature
rather than in any database. Macrostrat's **knowledge graph** draws on that
literature to enrich and check its records.

## From papers to entities

Macrostrat works with [xDD](https://xdd.wisc.edu), a digital library and text-mining
system for the scientific literature developed at UW–Madison. Extraction models run
over passages of geologic papers and identify **entities** (stratigraphic names,
lithologies, lithology attributes, minerals and other geologic terms) and the
**relationships** between them, such as a lithology attributed to a named formation.

Each extraction is recorded together with the passage of text it came from, the
publication, and the model and version that produced it. Extractions are linked to
Macrostrat's [[Geologic lexicon]], so that what the literature says about a
stratigraphic name can be gathered alongside the units that carry it.

## Human review

Automated extraction makes mistakes, so the knowledge graph is built for review.
Geologists can inspect what a model extracted from a passage, correct it, and save the
corrected version. Corrections are kept alongside the original extractions, which
both improves the data and provides examples for training better models.

## Where it is going

The aim is for literature-derived knowledge to fill gaps in Macrostrat's units,
for example by supplying descriptions, lithologies and ages for map units whose
legends are sparse, and to surface new geologic entities that are not yet in the
lexicon, with every statement traceable to the text it came from.
