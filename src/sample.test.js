import { describe, it, expect } from "vitest";
import sum from "./sample";

describe("Simple working test", () => {
  it("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
