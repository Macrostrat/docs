---
title: Contributing
route: /community/contributing
---

Macrostrat is improved by the geologists and developers who use it. Contributions of
every size are welcome, from reporting a misplaced contact to adding a regional
compilation or a new software feature.

## Ways to contribute

1. **Collect and document your geologic world.** Rockd checkins, photos and
   strike-and-dip measurements. [Get Rockd](https://rockd.org).
2. **Report what is wrong.** A misplaced unit, a bad legend, a missing name. Use the
   feedback link on any page, or [write to us](/community#contact).
3. **Digitize existing geologic data.** Maps, stratigraphic columns and measured
   sections, following the guides in the documentation: [[Contributing maps]],
   [[Accessing column data]].
4. **Build on Macrostrat.** The API, tiles and web components. Add your app to
   [apps built with Macrostrat](/about/apps).
5. **Connect a system.** Data exchange and shared identifiers: see
   [collaborators](/community/collaborators).
6. **Contribute code and documentation.** See [open source](/community/open-source).
7. **Fund the work.** See the [support page](/about/support).

## Accounts

Before version 2, Macrostrat had no user accounts and all data were entered by the
core team. Anyone with an [ORCID](https://orcid.org) iD can sign in to the website.
Signing in opens the first contributor tools, such as a dry run of column ingestion
that checks a column dataset against Macrostrat's format without saving it. The tools
that write data, map harmonization first and column editing next, are in development:
they are being tested with collaborators, and a public beta will follow.

## Data

- **Geologic maps.** If you have published or unpublished geologic mapping you would
  like to see in Macrostrat, get in touch. Maps arrive in many formats; the fields
  Macrostrat needs for each map unit are described in
  [[Contributing maps|Contributing maps to Macrostrat]], and how a map moves into the system is
  described in [[Map ingestion]].
- **Stratigraphic columns.** New columns are prepared in Macrostrat's column ingestion
  format ([[Full specification]]), a set of spreadsheet templates. A web-based column
  editor is in development; in the meantime, contact us to contribute columns or a
  dataset of them.
- **Corrections.** If something on the map or in a column is wrong, tell us, ideally
  with the location, what is wrong, and a reference. Corrections are among the most
  valuable contributions, because every application built on Macrostrat benefits.
- **Field observations.** Checkins recorded in the [Rockd](https://rockd.org) app add
  observations, photos and local knowledge to the geologic record.

## Software

Macrostrat's software is open source and developed on GitHub, mainly in the
[UW-Macrostrat](https://github.com/UW-Macrostrat) organization. Issues, bug reports and
pull requests are welcome. [[Codebase]] describes the repositories and what each
holds; [the website's code style guide](https://github.com/UW-Macrostrat/web/blob/main/CONTRIBUTING.md) covers code style for the website; and
[[System architecture]] explains how the pieces fit together.

Many of Macrostrat's components are reusable in other projects, notably its
[web components](https://github.com/UW-Macrostrat/web-components) for maps, columns and
data tables, and its [Python libraries](https://github.com/UW-Macrostrat/python-libraries).

## Documentation

These pages are open to contribution too. They live in the
[Macrostrat/docs](https://github.com/Macrostrat/docs) repository as a vault of Markdown
files that can be edited in [Obsidian](https://obsidian.md) or any text editor; no
build tools are needed. Open a pull request with your changes; the writing rules are
in [[Writing documentation]]. Documentation that is
tied to a particular piece of code, such as a format specification or developer
guide, lives in that code's repository and is pulled into these pages automatically.

## Get in touch

See the [community page](/community) for ways to reach the Macrostrat team.
