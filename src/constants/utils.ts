/**
 * Helper that joins strings together with a space
 * @param items - Array of strings to be joined.
 * @returns The joined string, with items separated by a space.
 * @example
 * join(["A", "B", "C"]);
 * // returns "A B C"
 */
export const join = (items: string[]) => items.join(" ");

/**
 * @returns a random id to a base-36 string
 */
export const generateRandomId = (): string => {
  return Math.random().toString(36).slice(2, 11);
};
