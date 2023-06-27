import { calculateSum } from "../Sum";

describe("Sum", () => {
  it("should not have default minimum value", () => {
    // 0+3+0+-9 = -6 (but capped to 0 by default)
    expect(calculateSum({ a: 3, b: 0, c: -9 }, ["a", "b", "c"])).toEqual(-6);
  });

  it("should allow setting a minimum value different from 0", () => {
    // 0+3+0+-9 = -4
    expect(
      calculateSum({ a: 3, b: 0, c: -9 }, ["a", "b", "c"], undefined, 0)
    ).toEqual(0);
  });

  it("should calculate sum of numbers", () => {
    // 0+3+0+9 = 12
    expect(calculateSum({ a: 3, b: 0, c: 9 }, ["a", "b", "c"])).toEqual(12);
  });

  it("should support subtraction", () => {
    expect(
      // 0-109-0-0 = -109
      calculateSum(
        { a: 100, b: 0, c: 9 },
        ["a", "b", "c"],
        ["-", "-", "-"],
        -1000
      )
    ).toEqual(-109);
  });

  it("combination of subtraction and addition", () => {
    expect(
      // 0+1000-109+10 = 1001
      calculateSum(
        { a: 1000, b: 109, c: 10 },
        ["a", "b", "c"],
        ["+", "-", "+"],
        -1000
      )
    ).toEqual(901);
  });

  it("should support multiplication", () => {
    expect(
      // 1*2*3*4 = 24
      calculateSum(
        { a: 1, b: 2, c: 3, d: 4 },
        ["a", "b", "c", "d"],
        ["*", "*", "*", "*"]
      )
    ).toEqual(24);
  });

  it("+ and - should be done with 0 as the starting value", () => {
    expect(calculateSum({ a: 1 }, ["a"], ["+"], -5)).toEqual(1);
    expect(calculateSum({ a: 2 }, ["a"], ["-"], -5)).toEqual(-2);
  });

  it("%, *, / and -1 should be done with 1 as the starting value", () => {
    expect(calculateSum({ a: 1 }, ["a"], ["*"], -5)).toEqual(1);
    expect(calculateSum({ a: 2 }, ["a"], ["/"], -5)).toEqual(0.5);
    expect(calculateSum({ a: 2 }, ["a"], ["-/"], -5)).toEqual(2);
  });

  it("should support division", () => {
    expect(
      // 1/2/4 = 0.125
      calculateSum({ a: 2, b: 4 }, ["a", "b"], ["/", "/"])
    ).toEqual(0.125);
  });

  it("should support combinations of * and /", () => {
    expect(
      // 1/2/4 = 0.125
      calculateSum({ a: 2, b: 4 }, ["a", "b"], ["/", "*"])
    ).toEqual(2);
  });

  it("should allow both numbers and references to state values", () => {
    expect(
      // 1/2/4*100 = 12.5
      calculateSum({ a: 2, b: 4 }, ["a", "b", 100], ["/", "/", "*"])
    ).toEqual(12.5);
  });

  it("should support return percentage as a fixed precision string", () => {
    expect(
      // 1/2/4 = 0.125
      calculateSum({ a: 2, b: 4 }, ["a", "b", 100], ["/", "/", "%"])
    ).toBe("12.50");
  });
});
