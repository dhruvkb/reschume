/**
 * Format template strings by performing the following operations:
 * - trims leading and trailing whitespace
 * - drops any newlines in the middle
 * - collapses multiple spaces into one
 *
 * @param {string} text - the string to clean up
 * @returns {string} the cleaned up string
 */
export const crunchText = (text) =>
  text.trim().replace("\n", " ").replace(/\s+/g, " ");
