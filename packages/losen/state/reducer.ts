import { setWith, isObject, find } from "lodash";

import { SET_DATA, RESET_DATA, SHOW_RESET_MODAL, Action } from "./actions";
import reduceWizard, { buildNodeMap } from "../utils/reduce-wizard";
import { hasProperty } from "../utils/is-of-type";
import processComputed from "../utils/process-computed";
import { State, WizardDefinition } from "..";
import { NAME } from "./constants";

const initialState = {};

const removeInactiveQuestions = (
  state: State,
  nodes: ReturnType<typeof buildNodeMap>,
  path: Array<string | number> = []
): State =>
  Object.keys(state).reduce((acc, property) => {
    // page, $computed and $external properties we want to keep
    if (
      ["page", "$computed", "$external", "$language"].indexOf(property) > -1
    ) {
      return { ...acc, [property]: state[property] };
    }

    // build the path to the property, can be a nested property
    const propertyPath = [...path, property];
    const fullPropertyPath = propertyPath.join(".");

    // check if a node with the property we got to exists in the list of nodes
    if (
      find(
        nodes,
        (node) =>
          hasProperty(node, "property") && node.property === fullPropertyPath
      )
    ) {
      return { ...acc, [property]: state[property] };
    }

    // recurse if the property is an object
    if (isObject(state[property])) {
      return {
        ...acc,

        // remove inactive properties on the property object
        [property]: removeInactiveQuestions(
          state[property], // pass the object we got to
          nodes,
          [...path, property] // add the property to the path and go on
        ),
      };
    }

    return { ...acc };
  }, {});

// compute the computed props and apply to state
export function applyComputed(wizard: WizardDefinition, state: State) {
  return {
    ...state,
    $computed: processComputed(wizard, state),
  };
}

// mutator that sets a value in data and returns the new state
export function setDataUpdate(
  wizard: WizardDefinition,
  state: State,
  { payload }: Extract<Action, { type: typeof SET_DATA }>
) {
  // If payload.key is "question.yes" the . should be considered a path to a new object
  const newState = setWith(
    { ...state },
    payload.key,
    payload.value,
    (nsValue) => nsValue || {}
  );
  const newSchema = reduceWizard(wizard.schema, { [NAME]: newState });
  const visibleNodes = buildNodeMap(newSchema);
  const purgedState = removeInactiveQuestions(newState, visibleNodes);

  return applyComputed(wizard, purgedState);
}

export default (wizard: WizardDefinition) =>
  (state = applyComputed(wizard, initialState), action: Action) => {
    const { type } = action;

    switch (type) {
      case SET_DATA:
        return setDataUpdate(wizard, state, action);

      case RESET_DATA:
        return applyComputed(wizard, initialState);

      case SHOW_RESET_MODAL:
        return { ...state, $showResetModal: action.payload.show };

      default:
        return state;
    }
  };
