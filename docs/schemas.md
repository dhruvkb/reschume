---
title: Schemas
description: Learn more about the schema and subschemas that make up Réschumé.
---

# {{ $frontmatter.title }}

The Réschumé schema has been broken down into many different subschemas to make it easier to understand and update. These subschemas each deal with a singular aspect of a résumé.

- [`resume.json`](/reschume/schema/resume.json)

  This is the schema of the top-level résumé object and encapsulates all other subschemas. In the typical use case, you would be validating your résumés against this schema.

- [`base.json`](/reschume/schema/base.json)

  This schema contains shared data types used by the other subschemas. It only contains definitions under `$defs`.
