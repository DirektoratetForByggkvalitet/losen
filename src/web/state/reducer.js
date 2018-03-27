import setWith from 'lodash.setwith';

import { SET_DATA, RESET_DATA } from './actions';
import processComputed from '../utils/process-computed';

const initialState = {};

// compute the computed props and apply to state
export function applyComputed(schema, state) {
  return {
    ...state,
    $computed: processComputed(schema, state),
  };
}

// mutator that sets a value on the state
export function setDataUpdate(schema, state, { payload }) {
  return applyComputed(schema, setWith(
    { ...state },
    payload.key,
    payload.value,
    nsValue => nsValue || {},
  ));
}

export default schema => (state = applyComputed(schema, initialState), action) => {
  const { type } = action;

  switch (type) {
    case SET_DATA:
      return setDataUpdate(schema, state, action);

    case RESET_DATA:
      return applyComputed(schema, initialState);

    default:
      return state;
  }
};
