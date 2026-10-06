# Column locations

Every Macrostrat column has a footprint, in two independent parts.

- The **location** is where the data were gathered: a single point, with a
  radius saying how far off it might be, or the line a section was measured
  along. It is meaningful for measured sections and drill cores. A composite
  column has no single place.
- The **region** is the area the column stands for, as a polygon. It is what
  a composite column _is_, and what a measured section may also claim to
  represent. A measured section can have both.

The column editor's **Location** page edits both. Macrostrat stores a point
and a polygon for each column; a line and a radius are kept with the column's
data until the database has somewhere to put them.

## Entering coordinates

A location point can be typed in any of the formats below. Pick the format,
type the coordinates as you have them, and press Enter: the editor reads them
back as decimal degrees so you can see what it understood, and places the
point. All formats are read against the WGS84 datum, which is what GPS units
and web maps use. Coordinates are kept to five decimal places, about a metre.

| Format | Shape | Example |
| --- | --- | --- |
| Decimal degrees | Latitude, then longitude; south and west negative | `43.0731, -89.4012` |
| Degrees, minutes, seconds | Latitude then longitude, each ending in N, S, E or W; minutes and seconds optional | `43°04′23″N, 89°24′04″W` |
| UTM | Zone, band letter or hemisphere (N/S), easting, northing, in metres | `16T 305000 4771000` |
| MGRS / USNG | Grid zone, 100 km square, easting and northing to equal digits | `16T BN 05000 71000` |
| WKT point | `POINT(longitude latitude)`, as GIS software writes it | `POINT(-89.4012 43.0731)` |

Notes on each:

- **Decimal degrees** are latitude first, as most sources write them. The
  separator can be a comma, a semicolon or a space.
- **Degrees, minutes, seconds** accept the usual symbols (`°`, `′`, `″`, or
  `d`, `m`, `s`, or none) and any separator between the parts. `43 04 23 N`
  and `43°04.383′N` are both read. The hemisphere letters are required, since
  they are what tells the two values apart.
- **UTM** needs the zone number and either a latitude band letter (C to X,
  omitting I and O) or a hemisphere letter. A band letter is converted to the
  hemisphere. Eastings and northings are in metres.
- **MGRS** is the military grid, also used as the US National Grid. The
  spaces are optional. Precision follows the number of digits: ten digits is
  a metre, eight is ten metres.
- **WKT** is longitude first, the reverse of the others, because that is how
  the standard writes it.

The parsers come from the [geodesy](https://www.movable-type.co.uk/scripts/geodesy-library.html)
library, whose documentation describes the formats in detail.

Other formats, such as state plane coordinates or a projected grid other
than UTM, are not read. Convert them first in GIS software, or enter the
decimal degrees.

## Finding a place

The search field above the location form finds places by name, using the
same place index as Macrostrat's main map. Choosing one frames the map there
so the point can be placed by hand; it does not set the location itself.

## Exporting

The Location page writes the footprint out as GeoJSON, with the location and
the region as separate features, and copies either part as WKT. A located
point is also shown in degrees-minutes-seconds, UTM and MGRS.
