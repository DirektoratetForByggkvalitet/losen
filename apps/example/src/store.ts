/* globals window */

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION__?: typeof compose;
  }
}

import { createStore, combineReducers, compose } from "redux";
import { state } from "losen";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import schema from "./schema";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(
  persistConfig,
  combineReducers({ [state.NAME]: state.reducer(schema) })
);

/**
 * Create the store with middleware
 */
const store = createStore(
  persistedReducer,
  undefined,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export const persistor = persistStore(store);

export default store;
