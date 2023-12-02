import { get } from "lodash";
import { validateExpression } from "./validator";
import { State } from "losen";

export type ComplexExpression = {
  errorMessage?: string[];
  type: "and" | "or";
  clauses: Expression[];
};

export type SimpleExpression = {
  field: string;
  operator:
    | "gt"
    | "lt"
    | "gte"
    | "lte"
    | "eq"
    | "neq"
    | "between"
    | "is"
    | "not"
    | "isnot"
    | "required";
  value?: any | [number, number];
  type?: undefined;
  errorMessage?: string[];
};

export type Expression = SimpleExpression | ComplexExpression;
export type GreaterThan = {};

export type ValidationError = Array<any>;

export type ValidationResult = {
  valid?: boolean;
  operator?: "and" | "or";
  errors: ValidationResult | Array<ValidationError | ValidationResult>;
};

type Validator = (state: State) => ValidationResult;

export function getValue(
  value:
    | { fields: string[]; field?: undefined }
    | { field: string; fields?: undefined }
    | number
    | string,
  state: State
) {
  if (typeof value === "object" && typeof value.fields !== "undefined") {
    return value.fields.reduce(
      (acc, currentValue) => acc + get(state, currentValue),
      0
    );
  }

  if (typeof value === "object" && value.field) {
    return get(state, value.field);
  }

  return value;
}

export function buildGt({
  field,
  value,
  errorMessage,
}: SimpleExpression): Validator {
  return (state) => {
    if (get(state, field) > getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "må være større enn", { field: value.field }]],
      };
    }

    return { valid: false, errors: [[{ field }, "må være større enn", value]] };
  };
}

export function buildLt({
  field,
  value,
  errorMessage,
}: SimpleExpression): Validator {
  return (state) => {
    if (get(state, field) < getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "må være mindre enn", { field: value.field }]],
      };
    }

    return { valid: false, errors: [[{ field }, "må være mindre enn", value]] };
  };
}

export function buildGte({
  field,
  value,
  errorMessage,
}: SimpleExpression): Validator {
  return (state) => {
    if (get(state, field) >= getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [
          [{ field }, "må være større enn eller lik", { field: value.field }],
        ],
      };
    }

    return {
      valid: false,
      errors: [[{ field }, "må være større enn eller lik", value]],
    };
  };
}

export function buildLte({
  field,
  value,
  errorMessage,
}: SimpleExpression): Validator {
  return (state) => {
    if (get(state, field) <= getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [
          [{ field }, "må være mindre enn eller lik", { field: value.field }],
        ],
      };
    }

    return {
      valid: false,
      errors: [[{ field }, "må være mindre enn eller lik", value]],
    };
  };
}

export function buildEq({
  field,
  value,
  errorMessage,
}: SimpleExpression): Validator {
  return (state) => {
    if (get(state, field) === getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "må være lik", { field: value.field }]],
      };
    }

    return { valid: false, errors: [[{ field }, "må være lik", value]] };
  };
}

export function buildNeq({
  field,
  value,
  errorMessage,
}: SimpleExpression): Validator {
  return (state) => {
    if (get(state, field) !== getValue(value, state)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    if (typeof value === "object" && value.field) {
      return {
        valid: false,
        errors: [[{ field }, "må være ulik", { field: value.field }]],
      };
    }

    return { valid: false, errors: [[{ field }, "må være ulik", value]] };
  };
}

export function buildBetween({
  field,
  value,
  errorMessage,
}: SimpleExpression): Validator {
  return (state) => {
    const fieldValue = get(state, field);
    const [lower, upper] = value;

    if (fieldValue >= lower && fieldValue <= upper) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    return {
      valid: false,
      errors: [[{ field }, "må være mellom", value[0], "og", value[1]]],
    };
  };
}

export function buildRequired({
  field,
  errorMessage,
}: {
  field: string;
  errorMessage?: string[];
}): Validator {
  return (state) => {
    if (get(state, field) !== undefined) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    return { valid: false, errors: [[{ field }, "er påkrevd"]] };
  };
}

export function buildNot({
  field,
  errorMessage,
}: {
  field: string;
  errorMessage?: string[];
}): Validator {
  return (state) => {
    if (!get(state, field)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    return { valid: false, errors: [[{ field }, "skal være usann"]] };
  };
}

export function buildIs({
  field,
  errorMessage,
}: {
  field: string;
  errorMessage?: string[];
}): Validator {
  return (state) => {
    if (get(state, field, false)) {
      return { valid: true, errors: [] };
    }

    if (errorMessage) {
      return { valid: false, errors: [errorMessage] };
    }

    return { valid: false, errors: [[{ field }, "skal være sann"]] };
  };
}

export function buildValidatorForSimpleExpression(
  expression: SimpleExpression
): Validator {
  return (state) => {
    switch (expression.operator) {
      case "gt":
        return buildGt(expression)(state);
      case "lt":
        return buildLt(expression)(state);
      case "gte":
        return buildGte(expression)(state);
      case "lte":
        return buildLte(expression)(state);
      case "eq":
        return buildEq(expression)(state);
      case "neq":
        return buildNeq(expression)(state);
      case "between":
        return buildBetween(expression)(state);
      case "required":
        return buildRequired(expression)(state);
      case "is":
        return buildIs(expression)(state);
      case "isnot":
      case "not":
        return buildNot(expression)(state);
      default:
        return { valid: false, errors: [] };
    }
  };
}

export function buildValidatorForComplexExpression(
  expression: ComplexExpression
): Validator {
  return (state) =>
    expression.clauses.reduce<ValidationResult>(
      (res, clause) => {
        const validationResult = buildValidatorFunction(clause)(state);
        let valid;
        let errors;

        // If we're dealing with an or expression and the result is true
        if (expression.type === "or" && (validationResult.valid || res.valid)) {
          return {
            valid: true,
            errors: {
              operator: expression.type,
              errors: [],
            },
          };
        }

        if (expression.type === "and") {
          valid = res.valid && validationResult.valid;
        } else if (expression.type === "or") {
          valid = res.valid || validationResult.valid;
        }

        if (expression.errorMessage) {
          errors = [expression.errorMessage];
        } else {
          errors = validationResult.valid
            ? res.errors
            : {
                ...res.errors,
                errors: [
                  ...get(res.errors, "errors", []),
                  ...(Array.isArray(validationResult.errors)
                    ? validationResult.errors
                    : [validationResult.errors]),
                ],
              };
        }

        return { valid: Boolean(valid), errors };
      },
      {
        /**
         * Start with valid being true for and expressions to avoid the
         * result always being false, and with false for or expressions
         * to avoid the result always being true 🤓
         */
        valid: expression.type === "and",
        errors: {
          operator: expression.type,
          errors: [],
        },
      }
    );
}

export function buildValidatorFunction(expression: Expression): Validator {
  return (state) => {
    if (expression.type) {
      return buildValidatorForComplexExpression(
        expression as ComplexExpression
      )(state);
    }

    return buildValidatorForSimpleExpression(expression as SimpleExpression)(
      state
    );
  };
}

/**
 * Parse a structured expression and return a function that expects
 * to be called with the current state data for validation
 *
 * @param {*} expression
 */
export function parseExpression(expression: Expression, topLevel = true) {
  if (topLevel) {
    // Validate expression first. Otherwise we would need loads of
    // redundant tests in the validation function builder..
    validateExpression(expression);
  }

  // A-OK, let's build the function! 🎸
  return buildValidatorFunction(expression);
}

export default parseExpression;
