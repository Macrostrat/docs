---
title: Age model
---

Every [[Stratigraphic columns|column]] in Macrostrat carries an **age model**: an
explicit account of how its units are placed in geologic time. The age model is what
turns a description of stacked rocks into a record that can be compared, summed and
analyzed through Earth history.

## Surfaces and boundaries

Macrostrat models a column as a sequence of **surfaces**: the contacts between
units. Each surface is stored as a boundary that records:

- the units above and below it;
- its **age**, in millions of years;
- a **calibration interval** from the [[Geologic lexicon|timescale]] and a
  **relative position** within that interval (0 at its base, 1 at its top);
- the **type of contact**: conformity, unconformity, disconformity, angular
  unconformity, non-conformity or fault;
- the **status** of its age, which says how the age is known.

A unit's top and bottom ages follow from the surfaces that bound it.

## Tie points and interpolation

The status of a surface's age is the heart of the model:

| Status | Meaning |
| --- | --- |
| **absolute** | The source gave a numeric age (for example, a radiometric date), and that number is authoritative |
| **relative** | The source placed the surface at a position within a named interval, such as the base of a stage |
| **spike** | The surface is a Global Boundary Stratotype Section and Point (GSSP, a "golden spike") |
| **imposed** | The source gave no chronostratigraphic anchor; the position was derived by interpolating through stratigraphic thickness |
| **modeled** | Not constrained by the source; interpolated by the age model between the constrained surfaces around it |

Surfaces with any status other than *modeled* are **tie points**: places where the
age model is anchored. Between tie points, Macrostrat interpolates the ages of the
intervening surfaces, following superposition (Steno's law: younger rocks lie above
older ones) within each unconformity-bounded package.

Except for *absolute* ages, every surface is stored as an interval of the timescale
plus a proportion through it, and its numeric age is computed from those. This gives
the model a useful property: it is **dynamic**. The numeric ages of timescale
intervals are revised as the geologic timescale is refined; when an interval
boundary changes, every age that depends on it is recalculated, and the change
propagates through all the columns that use it. Absolute ages are the exception:
there the number is kept, and its position within the timescale is recomputed
instead.

## Ages beyond columns

Because map units, fossil collections and samples can be linked to column units (see
[[Linking data]]), the age model also sharpens their ages. A map polygon labelled
only "Ordovician" can inherit the much tighter ages of the column units it
corresponds to.

## Limits and ongoing work

The age model is deliberately simple: one model per column, piecewise interpolation
between constraints. Work is ongoing to show more clearly which ages are directly
constrained and which are interpolated, to let contributors edit tie points directly
in the column editor, and eventually to track more than one age model per column.
