import { createStore, combineReducers } from 'redux';

import reducer from '../reducer';
import { setData } from '../actions';
import { NAME } from '..';

const schema = {
  computed: {
    dogOrCat: {
      type: 'or',
      clauses: [
        {
          field: 'dog',
          operator: 'eq',
          value: true,
        },
        {
          field: 'cat',
          operator: 'eq',
          value: true,
        },
      ],
    },
  },
  schema: [],
};

describe('reducer', () => {
  describe('initializer', () => {
    it('sets up a working reducer', () => {
      const store = createStore(
        combineReducers({ [NAME]: reducer(schema) }),
      );

      expect(typeof store.getState().getState).toBeDefined();
    });
  });

  it('computes properties initially', () => {
    const store = createStore(
      combineReducers({ [NAME]: reducer(schema) }),
    );

    const state = store.getState()[NAME];

    expect(state).toEqual({
      $computed: { dogOrCat: false },
    });
  });

  it('computes properties on state change', () => {
    const store = createStore(
      combineReducers({ [NAME]: reducer(schema) }),
    );

    store.dispatch(setData('cat', true));

    const state = store.getState()[NAME];

    expect(state).toEqual({
      $computed: { dogOrCat: true },
      cat: true,
    });
  });
});
