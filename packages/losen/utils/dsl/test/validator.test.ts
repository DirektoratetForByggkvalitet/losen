import { describe, expect, it } from "@jest/globals";

import {
  validateComplexExpression,
  validateSimpleExpression,
} from "../validator";
import { SimpleExpression } from "..";

describe("DSL validator", () => {
  describe("validateSimpleExpression", () => {
    it("throws error on complex expression", () => {
      expect(() =>
        validateSimpleExpression({
          type: "and",
        } as any)
      ).toThrowError(/Expected simple expression/);
    });

    it("throws error when operator is missing", () => {
      expect(() =>
        validateSimpleExpression({
          field: "love.cats",
        } as any)
      ).toThrowError(/has no operator/);
    });

    it("throws error on unknown operator", () => {
      expect(() =>
        validateSimpleExpression({
          field: "love.cats",
          operator: "foobar",
        } as unknown as SimpleExpression)
      ).toThrowError(/Unknown operator foobar/);
    });

    it("throws error on malformed field reference value", () => {
      expect(() =>
        validateSimpleExpression({
          field: "love.cats",
          operator: "gt",
          value: { fjasebengel: true },
        })
      ).toThrowError(/supposed to be a reference to a field/);
    });

    it("validates valid expression", () => {
      expect(
        validateSimpleExpression({
          field: "love.cats",
          operator: "gt",
          value: 4,
        })
      ).toBeTruthy();
    });

    it("validates valid expression with field reference", () => {
      expect(
        validateSimpleExpression({
          field: "love.cats",
          operator: "gt",
          value: { field: "love.dogs" },
        })
      ).toBeTruthy();
    });

    it("throws error when value is missing for between operator", () => {
      expect(() =>
        validateSimpleExpression({
          field: "love.cats",
          operator: "between",
        })
      ).toThrowError(/must have a value property/);
    });

    it("throws error when value is missing for between operator", () => {
      expect(() =>
        validateSimpleExpression({
          field: "love.cats",
          operator: "between",
          value: 4,
        })
      ).toThrowError(/must have an array/);
    });

    it("throws error when too many values is provided in the range array for between operator", () => {
      expect(() =>
        validateSimpleExpression({
          field: "love.cats",
          operator: "between",
          value: [1, 2, 3],
        })
      ).toThrowError(/array containing two values/);
    });

    it("throws error when non numbers is provided in the range array for between operator", () => {
      expect(() =>
        validateSimpleExpression({
          field: "love.cats",
          operator: "between",
          value: [1, "apekatt"],
        })
      ).toThrowError(/apekatt is not a valid number/);
    });

    it("validates expression with between operator", () => {
      expect(
        validateSimpleExpression({
          field: "love.cats",
          operator: "between",
          value: [1, 2],
        })
      ).toBeTruthy();
    });
  });

  describe("validateComplexExpression", () => {
    it("throws error on invalid type", () => {
      expect(() =>
        validateComplexExpression({
          type: "apekatt",
        } as any)
      ).toThrowError(/Unknown expression type/);
    });

    it("throws error on valid type missing clauses", () => {
      expect(() =>
        validateComplexExpression({
          type: "and",
        } as any)
      ).toThrowError(/Missing clauses/);
    });

    it("validates a valid expression", () => {
      expect(
        validateComplexExpression({
          type: "and",
          clauses: [],
        })
      ).toBeTruthy();
    });
  });
});
