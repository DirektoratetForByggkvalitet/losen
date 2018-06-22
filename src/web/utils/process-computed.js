import parseExpression from '../../shared/utils/dsl';

export default function processComputed(schema, state) {
  return Object.keys(schema.computed || {}).reduce(
    (res, prop) => ({
      ...res,
      [prop]: parseExpression(schema.computed[prop])(state).valid,
    }),
    {},
  );
}
