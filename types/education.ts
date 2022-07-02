import { Address, Period } from "./base";

/**
 * a document that proves successful completion of a course
 */
export type Certification = {
  /**
   * an identifier for the certification
   */
  id: string;
  /**
   * the name of the certification
   */
  name: string;
  /**
   * the subject of study
   */
  field: string;
} & Partial<{
  /**
   * the duration of study for the certification
   */
  period: Period;
  /**
   * the score achieved in the certification
   */
  score: string;
  /**
   * the maximum attainable score
   */
  maxScore: string;
  /**
   * a list of courses completed to obtain the certification
   */
  courses: string[];
}>;

/**
 * an educational institution such as a school or college offering various
 * certifications
 */
export type Institute = {
  /**
   * an identifier for the institute
   */
  id: string;
  /**
   * the full name of the institute
   */
  name: string;

  /**
   * an array of certifications obtained from the institute
   */
  children: Certification[];
} & Partial<{
  /**
   * an abbreviated name for the insitute, such as IIT for Indian Institute of Technology
   */
  shortName: string;

  /**
   * the public-facing URL to access the institute
   */
  url: string;
  /**
   * the physical location of the institute campus
   */
  address: Address;
}>;
