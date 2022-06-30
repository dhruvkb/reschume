import axios from "axios";
import chalk from "chalk";

import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

import baseSchema from "#schema/base.json" assert { type: "json" };
import bioSchema from "#schema/bio.json" assert { type: "json" };
import rolesSchema from "#schema/roles.json" assert { type: "json" };
import projectsSchema from "#schema/projects.json" assert { type: "json" };
import educationSchema from "#schema/education.json" assert { type: "json" };

/**
 * Download the JSON file from the given URI and return as a plain JS object.
 *
 * @param {string} uri - the URI from where to fetch the schema
 */
const loadSchema = async (uri) => {
  console.log(`Requesting schema from ${chalk.italic.blue(uri)}`);
  const res = await axios.get(uri);
  if (res.status == 200) {
    console.log(`└─${chalk.green("done")}!`);
    return res.data;
  }
  console.log(`└─${chalk.red("failed")}!`);
  process.exit(1);
};

/**
 * Get an Ajv instance configured with sensible options and preloaded with the
 * subschemas. This instance is configured to use the 2020-12 edition of the
 * JSON Schema specification.
 *
 * @param {boolean} useNetwork - whether to fetch schema remotely using `$id`
 * @returns {Ajv2020} a ready-to-use Ajv instance
 */
export const getAjv = (useNetwork = false) => {
  const ajv = new Ajv2020({
    allErrors: true,
    strictTuples: false,
    loadSchema,
  });
  addFormats(ajv);

  if (!useNetwork) {
    ajv.addSchema(baseSchema);
    ajv.addSchema(bioSchema);
    ajv.addSchema(rolesSchema);
    ajv.addSchema(projectsSchema);
    ajv.addSchema(educationSchema);
  }

  return ajv;
};
