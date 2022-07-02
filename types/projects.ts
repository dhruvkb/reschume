import { Period } from "./base";

/**
 * a language, tool or framework used in the development of a project
 */
export interface Technology {
  /**
   * an identifier for the technology; A Simple Icons slug might be preferable.
   */
  id: string;
  /**
   * the proper name of the technology
   */
  name: string;
}

/**
 * an endeavour that forms a part of a larger epic
 */
export type Project = {
  /**
   * an identifier for the project
   */
  id: string;
  /**
   * the name of the project
   */
  name: string;
} & Partial<{
  /**
   * the public-facing URL to access the project
   */
  url: string;

  /**
   * a short description and introduction of the project
   */
  summary: string;
  /**
   * a collection of salient features of the projects, as bullet points
   */
  highlights: string[];

  /**
   * the part played by the person in the development of the project
   */
  role: string;

  /**
   * the languages, tools or frameworks used in the developement of the project
   */
  technologies: Technology[];

  /**
   * the time duration during which the project was created and maintained
   */
  period: Period;
}> & {
    /**
     * additional property with `unknown` type
     */
    [key: string | symbol | number]: unknown;
  };

/**
 * a large undertaking that encompasses multiple projects
 */
export interface Epic {
  /**
   * an identifier for the epic; A Simple Icons slug might be preferable.
   */
  id: string;
  /**
   * the name of the epic
   */
  name: string;

  /**
   * the public-facing URL to access the epic
   */
  url?: string;

  /**
   * an array of the epic's constitutent projects
   */
  children: Project[];
}
