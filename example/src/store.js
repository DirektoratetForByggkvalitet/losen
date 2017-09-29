/* globals window */

import { createStore, combineReducers, compose } from 'redux';
import { state } from 'dibk-wizard-framework';
import { persistStore, autoRehydrate } from 'redux-persist';

/**
 * Create the store with middleware
 */
const store = createStore(
  combineReducers({ [state.NAME]: state.reducer }),
  undefined,
  compose(
    autoRehydrate(),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  ),
);

persistStore(store);

export default store;
