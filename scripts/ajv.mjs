import Ajv2020 from "ajv/dist/2020.js";
import addFormats from "ajv-formats";

import baseSchema from "#schema/base.json" assert { type: "json" };
import bioSchema from "#schema/bio.json" assert { type: "json" };
import rolesSchema from "#schema/roles.json" assert { type: "json" };
import projectsSchema from "#schema/projects.json" assert { type: "json" };
import educationSchema from "#schema/education.json" assert { type: "json" };

/**
 * Get an Ajv instance configured with sensible options and preloaded with the
 * subschemas. This instance is configured to use the 2020-12 edition of the
 * JSON Schema specification.
 *
 * @returns {Ajv2020} a ready-to-use Ajv instance
 */
export const getAjv = () => {
  const ajv = new Ajv2020({
    allErrors: true,
    strictTuples: false,
  });
  addFormats(ajv);

  ajv.addSchema(baseSchema);
  ajv.addSchema(bioSchema);
  ajv.addSchema(rolesSchema);
  ajv.addSchema(projectsSchema);
  ajv.addSchema(educationSchema);

  return ajv;
};
