/* eslint-disable no-use-before-define */

import get from 'lodash.get';
import { validateExpression } from './validator';

export function getValue(value, state) {
  if (typeof value === 'object' && value.field) {
    return get(state, value.field);
  }

  return value;
}

export function buildGt({ field, value }) {
  return (state) => {
    if (get(state, field) > getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [[{ field }, 'må være større enn', { field: value.field }]] });
    }

    return ({ valid: false, errors: [[{ field }, 'må være større enn', value]] });
  };
}

export function buildLt({ field, value }) {
  return (state) => {
    if (get(state, field) < getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [[{ field }, 'må være mindre enn', { field: value.field }]] });
    }

    return ({ valid: false, errors: [[{ field }, 'må være mindre enn', value]] });
  };
}

export function buildGte({ field, value }) {
  return (state) => {
    if (get(state, field) >= getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [[{ field }, 'må være større enn eller lik', { field: value.field }]] });
    }

    return ({ valid: false, errors: [[{ field }, 'må være større enn eller lik', value]] });
  };
}

export function buildLte({ field, value }) {
  return (state) => {
    if (get(state, field) <= getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [[{ field }, 'må være mindre enn eller lik', { field: value.field }]] });
    }

    return ({ valid: false, errors: [[{ field }, 'må være mindre enn eller lik', value]] });
  };
}

export function buildEq({ field, value }) {
  return (state) => {
    if (get(state, field) === getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [[{ field }, 'må være lik', { field: value.field }]] });
    }

    return ({ valid: false, errors: [[{ field }, 'må være lik', value]] });
  };
}

export function buildNeq({ field, value }) {
  return (state) => {
    if (get(state, field) !== getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [[{ field }, 'må være ulik', { field: value.field }]] });
    }

    return ({ valid: false, errors: [[{ field }, 'må være ulik', value]] });
  };
}

export function buildBetween({ field, value }) {
  return (state) => {
    const fieldValue = get(state, field);
    const [lower, upper] = value;

    if (fieldValue >= lower && fieldValue <= upper) {
      return ({ valid: true, errors: [] });
    }

    return ({ valid: false, errors: [[{ field }, 'må være mellom', value[0], 'og', value[1]]] });
  };
}

export function buildRequired({ field }) {
  return (state) => {
    if (get(state, field) !== undefined) {
      return ({ valid: true, errors: [] });
    }

    return ({ valid: false, errors: [[{ field }, 'er påkrevd']] });
  };
}

export function buildValidatorForSimpleExpression(expression) {
  return (state) => {
    switch (expression.operator) {
      case 'gt':
        return buildGt(expression)(state);
      case 'lt':
        return buildLt(expression)(state);
      case 'gte':
        return buildGte(expression)(state);
      case 'lte':
        return buildLte(expression)(state);
      case 'eq':
        return buildEq(expression)(state);
      case 'neq':
        return buildNeq(expression)(state);
      case 'between':
        return buildBetween(expression)(state);
      case 'required':
        return buildRequired(expression)(state);
      default:
        return { valid: false, errors: [] };
    }
  };
}

export function buildValidatorForComplexExpression(expression) {
  return state => expression.clauses.reduce((res, clause) => {
    const validationResult = buildValidatorFunction(clause)(state);
    let valid;

    // If we're dealing with an or expression and the result is true
    if (expression.type === 'or' && (validationResult.valid || res.valid)) {
      return {
        valid: true,
        errors: {
          operator: expression.type,
          errors: [],
        },
      };
    }

    if (expression.type === 'and') {
      valid = res.valid && validationResult.valid;
    } else if (expression.type === 'or') {
      valid = res.valid || validationResult.valid;
    }

    return {
      valid,
      errors: (
        validationResult.valid
        ? res.errors
        : {
          ...res.errors,
          errors: [
            ...res.errors.errors,
            ...(
              Array.isArray(validationResult.errors)
              ? validationResult.errors
              : [validationResult.errors]
            ),
          ],
        }
      ),
    };
  }, {
    /**
     * Start with valid being true for and expressions to avoid the
     * result always being false, and with false for or expressions
     * to avoid the result always being true 🤓
     */
    valid: expression.type === 'and',
    errors: {
      operator: expression.type,
      errors: [],
    },
  });
}

export function buildValidatorFunction(expression) {
  return (state) => {
    if (expression.type) {
      return buildValidatorForComplexExpression(expression)(state);
    }

    return buildValidatorForSimpleExpression(expression)(state);
  };
}

/**
 * Parse a structured expression and return a function that expects
 * to be called with the current state data for validation
 *
 * @param {*} expression
 */
export default function parse(expression, topLevel = true) {
  if (topLevel) {
    // Validate expression first. Otherwise we would need loads of
    // redundant tests in the validation function builder..
    validateExpression(expression);
  }

  // A-OK, let's build the function! 🎸
  return buildValidatorFunction(expression);
}