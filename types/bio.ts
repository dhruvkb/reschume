import { Address, Contact } from "./base";

/**
 * an account on a social media platform or professional network
 */
export type Profile = (
  | {
      /**
       * the entity's username or handle
       */
      username?: string;
      /**
       * the public-facing URL to access the profile
       */
      url: string;
    }
  | {
      /**
       * the entity's username or handle
       */
      username: string;
      /**
       * the public-facing URL to access the profile
       */
      url?: string;
    }
) & {
  /**
   * a slug identifier for the profile; A Simple Icons slug might be preferable.
   */
  id: string;
  /**
   * the name of the network or site containing the profile
   */
  name: string;
};

export type Bio = {
  /**
   * the name of the person
   */
  name: string;
} & Partial<{
  /**
   * a link to a profile picture; A Gravatar might be best suited for this purpose.
   */
  image: string;

  /**
   * a few words describing the person
   */
  label: string;
  /**
   * a short summary about the person
   */
  summary: string;
  /**
   * a longer introduction to the person
   */
  introduction: string;

  /**
   * a collection of email addresses and phone numbers to contact an entity
   */
  contact: Contact;
  /**
   * a collection of accounts on social media platforms or professional networks
   */
  social: Profile[];

  /**
   * a physical location for an entity such as an organisation or educational
   * institute
   */
  address: Address;
}>;
