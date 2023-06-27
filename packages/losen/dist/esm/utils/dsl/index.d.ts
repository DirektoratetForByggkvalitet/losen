import { State } from "../..";
export type ComplexExpression = {
    errorMessage?: string[];
    type: "and" | "or";
    clauses: Expression[];
};
export type SimpleExpression = {
    field: string;
    operator: "gt" | "lt" | "gte" | "lte" | "eq" | "neq" | "between" | "is" | "not" | "isnot" | "required";
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
export declare function getValue(value: {
    fields: string[];
    field?: undefined;
} | {
    field: string;
    fields?: undefined;
} | number | string, state: State): any;
export declare function buildGt({ field, value, errorMessage, }: SimpleExpression): Validator;
export declare function buildLt({ field, value, errorMessage, }: SimpleExpression): Validator;
export declare function buildGte({ field, value, errorMessage, }: SimpleExpression): Validator;
export declare function buildLte({ field, value, errorMessage, }: SimpleExpression): Validator;
export declare function buildEq({ field, value, errorMessage, }: SimpleExpression): Validator;
export declare function buildNeq({ field, value, errorMessage, }: SimpleExpression): Validator;
export declare function buildBetween({ field, value, errorMessage, }: SimpleExpression): Validator;
export declare function buildRequired({ field, errorMessage, }: {
    field: string;
    errorMessage?: string[];
}): Validator;
export declare function buildNot({ field, errorMessage, }: {
    field: string;
    errorMessage?: string[];
}): Validator;
export declare function buildIs({ field, errorMessage, }: {
    field: string;
    errorMessage?: string[];
}): Validator;
export declare function buildValidatorForSimpleExpression(expression: SimpleExpression): Validator;
export declare function buildValidatorForComplexExpression(expression: ComplexExpression): Validator;
export declare function buildValidatorFunction(expression: Expression): Validator;
/**
 * Parse a structured expression and return a function that expects
 * to be called with the current state data for validation
 *
 * @param {*} expression
 */
export declare function parseExpression(expression: Expression, topLevel?: boolean): Validator;
export default parseExpression;
//# sourceMappingURL=index.d.ts.map