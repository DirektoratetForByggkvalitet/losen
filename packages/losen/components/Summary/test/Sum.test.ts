import { hasAllValues } from "../value/Sum";

describe("Summary Sum", () => {
  it("should not require answers for numeric constants", () => {
    expect(hasAllValues(["a", 5], { a: 3 })).toBe(true);
    expect(hasAllValues([5, 10], {})).toBe(true);
  });

  it("should require answers for field references", () => {
    expect(hasAllValues(["a", "b", 5], { a: 3 })).toBe(false);
  });
});
