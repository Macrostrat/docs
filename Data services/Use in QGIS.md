---
title: Use in QGIS
---

Macrostrat's geologic map can be streamed directly into [QGIS](https://qgis.org) as
vector tiles, so you can style and filter it by its attributes without downloading
anything.

## Add the geologic map as vector tiles

1. In the QGIS **Browser** panel, right-click **Vector Tiles** and choose **New Generic
   Connection…**.
2. Give it a name, such as *Macrostrat carto*, and set the URL to

   ```
   https://tiles.macrostrat.org/carto/{z}/{x}/{y}
   ```

3. Set the minimum zoom to 0 and the maximum to the level of detail you need (the
   server accepts zoom levels up to 22), then click **OK**.
4. Double-click the new connection to add it to your map.

The tiles contain two layers: `units` (map polygons) and `lines` (contacts, faults and
other linear features). Each polygon carries its unit name, age as written on the source map, base and top
intervals, best ages (`best_age_top`, `best_age_bottom`, in Ma), lithology,
description, display color, and the source map and its reference. Use these with
QGIS's rule-based styling and filtering to make a thematic map, for example to show
only Paleozoic carbonates.

For a lighter layer with fewer attributes, use
`https://tiles.macrostrat.org/carto-slim/{z}/{x}/{y}`.

## Add a styled raster version

If you only need a background map, add an **XYZ Tiles** connection with the URL

```
https://tiles.macrostrat.org/carto/{z}/{x}/{y}.png
```

## Raster datasets

Macrostrat also serves gridded datasets, such as mineral maps from remote sensing,
over WMTS and XYZ. See [[Using raster layers in QGIS]].

## Limitations

Vector tiles stream the map at the level of detail suited to each zoom, which makes
them well suited to viewing and styling, but not to bulk analysis. For downloading
data, see [[Frequently asked questions]] and [[Data services]].
