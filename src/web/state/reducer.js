import { NAME } from './index';
import { SET_DATA, RESET_DATA, SHOW_RESET_MODAL } from './actions';
import processComputed from '../utils/process-computed';
import reduceWizard from '../utils/reduce-wizard';
import getSchemaQuestions from '../utils/get-schema-questions';

const initialState = {};

const removeInactiveQuestions = (state, questions) =>
  Object.keys(state).reduce((acc, id) => {
    if (questions[id] || id === 'page') {
      return { ...acc, [id]: state[id] };
    }
    return { ...acc };
  }, {});

// compute the computed props and apply to state
export function applyComputed(wizard, state) {
  return {
    ...state,
    $computed: processComputed(wizard, state),
  };
}

// mutator that sets a value in data and returns the new state
export function setDataUpdate(wizard, state, { payload }) {
  const newState = { ...state, [payload.key]: payload.value };
  const newSchema = reduceWizard(wizard.schema, { [NAME]: newState });
  const visibleQuestions = getSchemaQuestions(newSchema);
  const purgedState = removeInactiveQuestions(newState, visibleQuestions);
  return applyComputed(wizard, purgedState);
}

export default wizard => (state = applyComputed(wizard, initialState), action) => {
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
