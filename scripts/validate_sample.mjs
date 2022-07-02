import chalk from "chalk";

import { getAjv } from "./ajv.mjs";

import resumeSchema from "#schema/resume.json" assert { type: "json" };

import resume from "#sample_data/dhruvkb.json" assert { type: "json" };

/* --- Main --- */

let successes = 0;
let failures = 0;

const ajv = getAjv();
const validate = ajv.compile(resumeSchema);

console.log(`Validating sample résumé`);

const isValid = validate(resume);
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

const passed = chalk.green(`PASS: ${successes}`);
if (failures === 0) {
  console.log(`${chalk.bold("✓ All good!")} ${passed}`);
} else {
  const failed = chalk.red(`FAIL: ${failures}`);
  console.log(`${chalk.bold("× Not good!")} ${passed}, ${failed}`);
  process.exit(1);
}
