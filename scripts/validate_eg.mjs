import chalk from "chalk";

import { getAjv } from "./ajv.mjs";
import { crunchText } from "./utils.mjs";

import baseSchema from "#schema/base.json" assert { type: "json" };
import bioSchema from "#schema/bio.json" assert { type: "json" };
import educationSchema from "#schema/education.json" assert { type: "json" };
import creationsSchema from "#schema/creations.json" assert { type: "json" };
import workSchema from "#schema/work.json" assert { type: "json" };

/**
 * Validate the examples defined inside the given schema.
 *
 * @param {object} schema - the schema object in which to validate schema
 * @param {string} schemaRef - the `$id` URL of the schema to retrieve
 */
const validateExamples = (schema, schemaRef, color) => {
  const fragment = schemaRef.split("/").slice(-1);

  console.group();
  schema.examples?.forEach((example) => {
    let repr;
    if (typeof example === "object" && "id" in example) repr = example.id;
    else repr = JSON.stringify(example);

    console.log(
      crunchText(
        `Validating example ${chalk.italic.blue(repr)} against
        ${chalk.italic[color](fragment)}`
      )
    );

    const validate = ajv.getSchema(schemaRef);
    if (validate) {
      const isValid = validate(example);
      if (isValid) {
        console.log(`└─${chalk.green("passed")}!`);
        successes += 1;
      } else {
        console.error(`└─${chalk.red("failed")}; see errors:`);
        console.group();
        console.error(validate.errors);
        console.groupEnd();
        failures += 1;
      }
    } else {
      console.error(`└─${chalk.red("failed")}; see errors:`);
      console.error(`  Schema ${chalk.bold(schemaRef)} not found.`);
      failures += 1;
    }
  });
  console.groupEnd();
};

/* --- Main --- */

const schemas = {
  base: baseSchema,
  bio: bioSchema,
  work: workSchema,
  creations: creationsSchema,
  education: educationSchema,
};

let successes = 0;
let failures = 0;

const ajv = getAjv();

Object.entries(schemas).forEach(([schemaName, schemaDefinition]) => {
  const schemaColor = "magentaBright";
  const schemaPath = `https://dhruvkb.github.io/reschume/schema/${schemaName}.json`;

  console.log(`Validating schema ${chalk.italic[schemaColor](schemaName)}`);
  validateExamples(schemaDefinition, schemaPath, schemaColor);

  console.group();
  const defs = schemaDefinition.$defs;
  Object.entries(defs).forEach(([defName, defDefinition]) => {
    const defColor = "cyan";
    const defPath = `${schemaPath}#/$defs/${defName}`;

    console.log(`Validating definition ${chalk.italic[defColor](defName)}`);
    validateExamples(defDefinition, defPath, defColor);
  });
  console.groupEnd();
});

console.log("─".repeat(32));

const passed = chalk.green(`PASS: ${successes}`);
if (failures === 0) {
  console.log(`${chalk.bold("✓ All good!")} ${passed}`);
} else {
  const failed = chalk.red(`FAIL: ${failures}`);
  console.log(`${chalk.bold("× Not good!")} ${passed}, ${failed}`);
  process.exit(1);
}
