---
title: Schemas
description: Learn more about the schema and subschemas that make up Réschumé.
---

# {{ $frontmatter.title }}

The Réschumé schema has been broken down into many different subschemas to make it easier to understand and update. These subschemas each deal with a singular aspect of a résumé.

## Schema information

Réschumé schemas are provided as per the [2020-12 edition](https://json-schema.org/specification.html) of the [JSON Schema specification](https://json-schema.org). Efforts will be made to upgrade to newer versions of the specification as they are released.

You can find tools for validating your résumés against these schemas in the JSON Schema documentation.

## List of schemas

- [`resume.json`](/reschume/schema/resume.json)

  This is the schema of the top-level résumé object and encapsulates all other subschemas. In the typical use case, you would be validating your résumés against this schema.

  <<< @/public/schema/resume.json

- [`base.json`](/reschume/schema/base.json)

  This schema contains shared data types used by the other subschemas. It only contains definitions under `$defs`.

  - `date`
  - `period`
  - `address`

- [`projects.json`](/reschume/schema/projects.json)

  This schema contains data types pertaining to projects and collections of them, called epics. This schema represents an `array` of `epic` objects and provides the following definitions under `$defs`.

  - `epic`
  - `project`
  - `technology`

- [`roles.json`](/reschume/schema/roles.json)

  This schema contains data types pertaining to roles held at various organisations. This schema represents an `array` of `org` objects and provides the following definitions under `$defs`.

  - `org`
  - `role`

- [`education.json`](/reschume/schema/education.json)

  This schema contains data types pertaining to certifications obtained from educational institutions. This schema represents an `array` of `institute` objects and provides the following definitions under `$defs`.

  - `institute`
  - `certification`
