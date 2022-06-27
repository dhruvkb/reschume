import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";
import chalk from "chalk";

import baseSchema from "#schema/base.json" assert { type: "json" };
import rolesSchema from "#schema/roles.json" assert { type: "json" };
import projectsSchema from "#schema/projects.json" assert { type: "json" };
import educationSchema from "#schema/education.json" assert { type: "json" };

const ajv = new Ajv2020({
  allErrors: true,
  strictTuples: false,
});
addFormats(ajv);

ajv.addSchema(baseSchema);
ajv.addSchema(rolesSchema);
ajv.addSchema(projectsSchema);
ajv.addSchema(educationSchema);

const schemas = {
  base: baseSchema,
  roles: rolesSchema,
  projects: projectsSchema,
  education: educationSchema,
};

let successes = 0;
let failures = 0;

Object.entries(schemas).forEach(([schemaName, schemaDefinition]) => {
  console.log(`Validating schema ${chalk.italic.magentaBright(schemaName)}`);
  console.group();

  const defs = schemaDefinition.$defs;
  Object.entries(defs).forEach(([defName, defDefinition]) => {
    console.log(`Validating definition ${chalk.italic.cyan(defName)}`);
    console.group();

    const examples = defDefinition.examples;
    examples.forEach((example) => {
      let repr;
      if ("id" in example) repr = example.id;
      else repr = JSON.stringify(example);

      console.log(`Validating example ${chalk.italic.blue(repr)}`);

      const schemaRef = `https://dhruvkb.github.io/reschume/schema/${schemaName}#/$defs/${defName}`;
      const validate = ajv.getSchema(schemaRef);
      if (validate) {
        const isValid = validate(example);
        if (isValid) {
          console.log(`└─ ${chalk.green("passed")}!`);
          successes += 1;
        } else {
          console.error(`└─ ${chalk.red("failed")}; see errors.`);
          console.error(validate.errors);
          failures += 1;
        }
      } else {
        console.error(
          `└─ ${chalk.red("failed")}; schema ${chalk.bold(
            schemaRef
          )} not found.`
        );
        failures += 1;
      }
    });
    console.groupEnd();
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
