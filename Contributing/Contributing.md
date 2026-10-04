---
title: Contributing
permalink: index
---

Macrostrat is improved by the geologists and developers who use it. Contributions of
every size are welcome, from reporting a misplaced contact to adding a regional
compilation or a new software feature.

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
  [[Maps|Contributing maps to Macrostrat]], and how a map moves into the system is
  described in [[Map ingestion]].
- **Stratigraphic columns.** New columns are prepared in Macrostrat's column ingestion
  format ([[Format documentation]]), a set of spreadsheet templates. A web-based column
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
holds; [[Contributor guide]] covers code style for the website; and
[[System architecture]] explains how the pieces fit together.

Many of Macrostrat's components are reusable in other projects, notably its
[web components](https://github.com/UW-Macrostrat/web-components) for maps, columns and
data tables, and its [Python libraries](https://github.com/UW-Macrostrat/python-libraries).

## Documentation

These pages are open to contribution too. They live in the
[Macrostrat/docs](https://github.com/Macrostrat/docs) repository as a vault of Markdown
files that can be edited in [Obsidian](https://obsidian.md) or any text editor; no
build tools are needed. Open a pull request with your changes. Documentation that is
tied to a particular piece of code, such as a format specification or developer
guide, lives in that code's repository and is pulled into these pages automatically.

## Get in touch

See the [community page](/community) for ways to reach the Macrostrat team.
