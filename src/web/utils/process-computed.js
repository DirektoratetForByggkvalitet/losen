import parseExpression from '../../shared/utils/dsl';

export default function processComputed(schema, state) {
  console.log('yo', schema, Object.keys(schema.computed || {}).reduce((res, prop) => ({
    ...res,
    [prop]: parseExpression(schema.computed[prop])(state).valid,
  }), {}));

  return Object.keys(schema.computed || {}).reduce((res, prop) => ({
    ...res,
    [prop]: parseExpression(schema.computed[prop])(state).valid,
  }), {});
}
