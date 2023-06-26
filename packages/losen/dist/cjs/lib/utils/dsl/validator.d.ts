import { ComplexExpression, Expression, SimpleExpression } from ".";
/**
 * Validate a simple, leaf node expression. No nested expressions
 */
export declare function validateSimpleExpression(expression: SimpleExpression): boolean;
/**
 * Validate an expression with nested expressions, typically an or/and
 * expression with a list of clauses

 */
export declare function validateComplexExpression(expression: ComplexExpression): boolean;
export declare function validateExpression(expression: Expression): boolean;
