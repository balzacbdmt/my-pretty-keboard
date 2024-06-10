import { describe, expect, test } from "vitest";
import { generateRandomId, hexToRgb, join } from "./utils";

describe("Utils: join()", () => {
  test("Basic behavior, join array of string with space", () => {
    expect(join(["hello", "world"])).toBe("hello world");
  });

  test("Doesn't break for an empty array", () => {
    expect(join([])).toBe("");
  });

  test("Only one element", () => {
    expect(join(["hello"])).toBe("hello");
  });

  test("Empty string", () => {
    expect(join(["hello", "", "world"])).toBe("hello  world");
  });

  test("elements contains spaces", () => {
    expect(join(["hello world", "great world"])).toBe(
      "hello world great world"
    );
  });
});

describe("Utils: generateRandomId()", () => {
  test("Basic behavior, generate an id of length 9", () => {
    expect(generateRandomId()).toHaveLength(9);
  });

  test("generates different ids on multiple calls", () => {
    const ids = new Set();
    for (let i = 0; i < 50; i++) {
      ids.add(generateRandomId());
    }
    // Ensure all generated IDs are unique
    expect(ids.size).toBe(50);
  });
});

// Add tests for copyToClipboard()

describe("Utils ➡️ hexToRgb(hex)", () => {
  test("Basic behavior, return an hex to an RGB", () => {
    const color = "#ff00ff";
    expect(hexToRgb(color)).toBe("rgb(255, 0, 255)");
  });
});
