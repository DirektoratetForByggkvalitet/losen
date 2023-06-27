import { State, WizardDefinition } from "losen";
import parseExpression from "losen/utils/dsl";

export default function processComputed(
  schema: WizardDefinition,
  state: State
) {
  return Object.keys(schema.computed || {}).reduce((res, prop) => {
    if (typeof schema?.computed?.[prop] === "undefined") {
      return res;
    }

    return {
      ...res,
      [prop]: parseExpression(schema.computed[prop])(state).valid,
    };
  }, {});
}
