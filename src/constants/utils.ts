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

/**
 * Put specific text in the clipboard
 * @param text string to be putted in the clipboard
 * @returns boolean as true if successfully putted in the clipboard, false otherwise
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error("Failed to copy text: ", err);
    return false;
  }
};
