/**
 * an array consisting of year, month and date respectively; Only the year is
 * required.
 */
export type Date = [number] | [number, number] | [number, number, number];

/**
 * a period of time between a start and end date; For active periods, the end
 * date can be omitted.
 */
export interface Period {
  /**
   * the start date of the period
   */
  start: Date;
  /**
   * the end date of a period; If omitted, the period is considered active in
   * the present.
   */
  end?: Date;
}

/**
 * a pair of two numbers that uniquely identify a point on the globe
 */
export interface Coordinates {
  /**
   * a measure of distance North (positive) or South (negative) of the Equator
   * (zero degrees)
   */
  latitude: number;
  /**
   * a measure of distance East (positive) or West (negative) of the Prime
   * Meridian (zero degrees)
   */
  longitude: number;
}

/**
 * a physical location for an entity such as an organisation or educational
 * institute
 */
export type Address =
  | string
  | Partial<
      (
        | {
            /**
             * the code assigned to the location by the postal system, like a ZIP or PIN code
             */
            postCode: number;
          }
        | {
            /**
             * the code assigned to the location by the postal system, like a ZIP or PIN code
             */
            postCode: string;
          }
      ) & {
        /**
         * the human-readable representation of the address in multiple lines of text
         */
        addressLines: string[];

        /**
         * the name of the city, town or village
         */
        city: string;
        /**
         * the name of state or province
         */
        state: string;
        /**
         * the two letter country code as per ISO 3166-1 alpha-2
         */
        countryCode: string;

        /**
         * the Post Office box number that can be used to deposit mail
         */
        postBox: number;

        /**
         * a pair of two numbers that uniquely identify a point on the globe
         */
        coordinates: Coordinates;
      }
    >;

/**
 * a collection of email addresses and phone numbers to contact an entity
 */
export interface Contact {
  /**
   * a list of email addresses
   */
  emails: string[];
  /**
   * a list of phone numbers
   */
  phones: string[];
}
