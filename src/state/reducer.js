import set from 'lodash.set';

import { SET_DATA, RESET_DATA } from './actions';

const initialState = {};

export default function stateReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_DATA:
      return set({ ...state }, payload.key, payload.value);

    case RESET_DATA:
      return initialState;

    default:
      return state;
  }
}
