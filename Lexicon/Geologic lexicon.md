---
title: Geologic lexicon
---

Macrostrat's **lexicon** is the shared vocabulary that lets columns, maps and outside
datasets describe rocks in comparable terms. Each part of it is a curated list with
its own structure. All of it can be browsed on Macrostrat's lexicon pages (`/lex`) and
queried through the API's definition routes (`/defs/...`).

## Stratigraphic names

Stratigraphic names (the Navajo Sandstone, the St. Peter Sandstone, the Morrison
Formation) are the most important link between datasets, and the hardest to get
right.

Macrostrat distinguishes a **name** from a **concept**:

- A **stratigraphic name** is a name as used in a particular place, with a **rank**:
  supergroup, group, subgroup, formation, member or bed. Names are **nested**
  explicitly: the Apex Basalt is a formation within the Salgash Subgroup, which is
  in turn within the Warrawoona Group.
- A **concept** is the stratigraphic unit a name refers to, as defined in an
  authoritative lexicon, such as the USGS's
  [Geolex](https://ngmdb.usgs.gov/Geolex/search) or the lexicons of other national
  surveys. Concepts carry the lexicon's definition, age, geologic province and usage
  notes, and a link back to the source.

The distinction matters because names are ambiguous in both directions. **Homonyms**
are common: both the United States and Australian lexicons recognize an "Admiral
Formation", referring to unrelated rocks. And one unit can carry several names, or
one name several meanings: Macrostrat tracks four distinct uses of "St. Peter" in the
North American midcontinent. Linking each name to a concept, and keeping track of
where each name is used, lets Macrostrat tell these apart. Names that are not yet
tied to a lexicon concept can still be used, but linked names are preferred.

## Lithologies

Lithologies are organized in a four-level hierarchy:

> **lithology** → **group** → **type** → **class**
>
> for example, *basalt* → *mafic* → *volcanic* → *igneous*

The classes are sedimentary, igneous and metamorphic; types include carbonate,
siliciclastic, evaporite, organic, chemical, volcanic, plutonic, metasedimentary and
others. A query at any level returns everything beneath it, so "all igneous rocks" or
"all carbonates" can be selected as easily as a single rock type. Lithologies also
carry nominal physical properties (for example, density and initial porosity) used in
quantitative analyses.

**Lithology attributes** qualify a lithology: sedimentary structures (*hummocky
cross-stratified*), bedforms, grain characteristics, colors and other descriptors.

## Environments and economic resources

**Depositional environments** are classed as marine or non-marine, with types such as
carbonate, siliciclastic, fluvial, lacustrine, glacial and eolian. **Economic**
attributes record resources hosted by units, classed as energy, material, precious
commodity or water, with types such as mineral, hydrocarbon, coal, nuclear,
construction material and aquifer.

## Time: intervals and timescales

Geologic time is represented by **intervals**: named spans with numeric top and
bottom ages and a type (eon, era, period, epoch, age, and finer chronostratigraphic
and biostratigraphic divisions such as zones). Intervals are grouped into
**timescales**, including the international chronostratigraphic timescale and
regional or specialized scales. Intervals anchor the [[Age model]] of every column,
and map units are described against them as well.

## How the lexicon is used

- Column units are described directly in lexicon terms when they are entered.
- Map legends, which arrive in each map author's own words, are **matched** to the
  lexicon during [[Map ingestion]], so that a polygon described as "Ordovician
  dolomite of the Knox Group" becomes queryable by age, lithology and name (see
  [[Linking data]]).
- Outside records, such as fossil collections, samples and literature extractions,
  are tied to units through shared names.

## Resources

- [USGS Geolex search](https://ngmdb.usgs.gov/Geolex/search) and the list of
  [national stratigraphic lexicons](https://ngmdb.usgs.gov/Geolex/stratres/lexicons)
