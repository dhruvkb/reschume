import { Address, Period } from "./base";

const roleTypes = [
  "foss-contributor",
  "part-timer",
  "full-timer",
  "intern",
  "contractor",
] as const;

export type RoleType = typeof roleTypes[number];

const roleLocations = ["in-office", "hybrid", "remote"] as const;

export type RoleLocation = typeof roleLocations[number];

/**
 * a job performed at an organisation
 */
export type Role = {
  /**
   * an identifier for the role
   */
  id: string;
  /**
   * the job title of the role
   */
  name: string;
} & Partial<{
  /**
   * a short description and introduction of the role
   */
  summary: string;
  /**
   * a collection of responsibilities of and accomplishments under the role, as bullet points
   */
  highlights: string[];

  /**
   * the nature of the role in terms of legal obligations
   */
  type: RoleType;
  /**
   * the nature of the role in terms of workplace
   */
  location: RoleLocation;

  /**
   * the time duration for which the role was held
   */
  period: Period;
}> & {
    /**
     * additional property with `unknown` type
     */
    [key: string | symbol | number]: unknown;
  };

/**
 * an organisation that employs people in multiple roles
 */
export type Org = {
  /**
   * an identifier for the organisation; A Simple Icons slug might be preferable.
   */
  id: string;
  /**
   * the full name of the organisation
   */
  name: string;

  /**
   * an array of roles held at the organisation
   */
  roles: Role[];
} & Partial<{
  /**
   * an abbreviated name for the organisation, such as UN for United Nations
   */
  shortName: string;

  /**
   * the public-facing URL to access the organisation
   */
  url: string;
  /**
   * the physical location of the organisation workplace
   */
  address: Address;
  /**
   * a short description and introduction of the organisation
   */
  summary: string;
}>;
