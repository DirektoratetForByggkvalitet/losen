/* globals window */

declare global {
  interface Window {
    devToolsExtension?: any;
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
  compose(window.devToolsExtension ? window.devToolsExtension() : (f: any) => f)
);

export const persistor = persistStore(store);

export default store;
