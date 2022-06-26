---
title: Schemas
description: Learn more about the schema and subschemas that make up Réschumé.
---

# {{ $frontmatter.title }}

The Réschumé schema has been broken down into many different subschemas to make it easier to understand and update. These subschemas each deal with a singular aspect of a résumé.

- [`resume.json`](/reschume/schema/resume.json)

  This is the schema of the top-level résumé object and encapsulates all other subschemas. In the typical use case, you would be validating your résumés against this schema.

  <<< @/public/schema/resume.json

- [`base.json`](/reschume/schema/base.json)

  This schema contains shared data types used by the other subschemas. It only contains definitions under `$defs`.

  - `date`
  - `period`

- [`epic_projects.json`](/reschume/schema/epic_projects.json)

  This schema contains data types pertaining to projects and collections of them, called epics. This schema represents an `array` of `epic` objects and provides the following definitions under `$defs`.

  - `epic`
  - `project`
  - `technology`

- [`org_roles.json`](/reschume/schema/org_roles.json)

  This schema contains data types pertaining to roles held at various organisations. This schema represents an `array` of `org` objects and provides the following definitions under `$defs`.

  - `org`
  - `role`
