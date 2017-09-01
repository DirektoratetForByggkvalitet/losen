/* eslint-disable no-use-before-define */

/**
 * Validate a simple, leaf node expression. No nested expressions
 *
 * @param object expression
 * @return boolean
 */
export function validateSimpleExpression(expression) {
  if (expression.type) {
    throw new Error(`Expected simple expression. Got ${expression.type} expression: ${expression}`);
  }

  if (!expression.operator) {
    throw new Error(`Expression has no operator property: ${expression}`);
  }

  if (!expression.field) {
    throw new Error(`Expression is missing field property: ${expression}`);
  }

  switch (expression.operator) {
    case 'gt':
    case 'lt':
    case 'gte':
    case 'lte':
    case 'eq':
    case 'neq':
      if (!expression.value) {
        throw new Error(`Operator ${expression.operator} expects a value property: ${expression}`);
      }

      if (typeof expression.value === 'object' && !expression.value.field) {
        throw new Error(`Expression with value of type object is supposed to be a reference to a field to compare to. No field property found: : ${expression}`);
      }

      break;

    // Validate range expression
    case 'between':
      if (!expression.value) {
        throw new Error(`Expression with operator ${expression.operator} must have a value property: ${expression}`);
      }

      if (!Array.isArray(expression.value)) {
        throw new Error(`Expression with operator ${expression.operator} must have an array as the value property: ${expression}`);
      }

      if (expression.value.length !== 2) {
        throw new Error(`Expression with operator ${expression.operator} expects an array containing two values. Got ${expression.value.length}: ${expression}`);
      }

      expression.value.forEach((number) => {
        if (isNaN(parseFloat(number))) {
          throw new Error(`Expression with operator ${expression.operator} expected a range of two numbers. ${number} is not a valid number: ${expression}`);
        }
      });

      break;

    case 'not':
    case 'required':
      return true;

    default:
      throw new Error(`Unknown operator ${expression.operator}: ${expression}`);
  }

  return true;
}

/**
 * Validate an expression with nested expressions, typically an or/and
 * expression with a list of clauses
 *
 * @param {*} expression
 * @return boolean
 */
export function validateComplexExpression(expression) {
  if (expression.type && ['and', 'or'].indexOf(expression.type) === -1) {
    throw new Error(`Unknown expression type: ${expression.type}`);
  }

  if (expression.type && !expression.clauses) {
    throw new Error(`Missing clauses for ${expression.type} expression`);
  }

  // Validate children
  return expression.clauses.reduce(
    (valid, childExpression) => {
      switch (expression.type) {
        case 'and':
          return valid && validateExpression(childExpression);

        case 'or':
          return valid || validateExpression(childExpression);

        default:
          return false;
      }
    }, true,
  );
}

export function validateExpression(expression) {
  // Complex expression
  if (expression.type) {
    return validateComplexExpression(expression);
  }

  // Ok, so this is a simple expression
  return validateSimpleExpression(expression);
}
