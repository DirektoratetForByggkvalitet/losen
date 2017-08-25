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
      return ({ valid: false, errors: [`${field} må være større enn ${value.field}`] });
    }

    return ({ valid: false, errors: [`${field} må være større enn ${value}`] });
  };
}

export function buildLt({ field, value }) {
  return (state) => {
    if (get(state, field) < getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [`${field} må være mindre enn ${value.field}`] });
    }

    return ({ valid: false, errors: [`${field} må være mindre enn ${value}`] });
  };
}

export function buildGte({ field, value }) {
  return (state) => {
    if (get(state, field) >= getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [`${field} må være større enn eller lik ${value.field}`] });
    }

    return ({ valid: false, errors: [`${field} må være større enn eller lik ${value}`] });
  };
}

export function buildLte({ field, value }) {
  return (state) => {
    if (get(state, field) <= getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [`${field} må være mindre enn eller lik ${value.field}`] });
    }

    return ({ valid: false, errors: [`${field} må være mindre enn eller lik ${value}`] });
  };
}

export function buildEq({ field, value }) {
  return (state) => {
    if (get(state, field) === getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [`${field} må være lik ${value.field}`] });
    }

    return ({ valid: false, errors: [`${field} må være lik ${value}`] });
  };
}

export function buildNeq({ field, value }) {
  return (state) => {
    if (get(state, field) !== getValue(value, state)) {
      return ({ valid: true, errors: [] });
    }

    if (typeof value === 'object' && value.field) {
      return ({ valid: false, errors: [`${field} må være ulik ${value.field}`] });
    }

    return ({ valid: false, errors: [`${field} må være ulik ${value}`] });
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
      default:
        return { valid: false, errors: [] };
    }
  };
}

export function buildValidatorForComplexExpression(expression) {
  return state => expression.clauses.reduce((res, clause) => {
    const validationResult = buildValidatorFunction(clause)(state);
    let valid;

    if (expression.type === 'and') {
      valid = res.valid && validationResult.valid;
    } else if (expression.type === 'or') {
      valid = res.valid || validationResult.valid;
    }

    return {
      valid,
      errors: [
        ...res.errors,
        validationResult.errors,
      ],
    };
  }, { valid: true, errors: [] });
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
