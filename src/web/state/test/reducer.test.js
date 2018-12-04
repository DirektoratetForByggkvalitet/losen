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
        {
          field: 'funny.animals.cat',
          operator: 'eq',
          value: true,
        },
      ],
    },
  },
  schema: [
    {
      id: 'page1',
      type: 'Page',
      heading: 'Første side',
      children: [
        {
          id: 'dog',
          property: 'dog',
          type: 'Radio',
          heading: 'Hund?',
          options: [
            {
              id: '123',
              type: 'Answer',
              heading: 'Ja',
              value: true,
            },
            {
              id: '123',
              type: 'Answer',
              heading: 'Ja',
              value: false,
            },
          ],
        },
        {
          id: 'funnyAnimals.cat',
          property: 'cat',
          type: 'Radio',
          heading: 'Katt?',
          options: [
            {
              id: '1234',
              type: 'Answer',
              heading: 'Ja',
              value: true,
            },
            {
              id: '1234',
              type: 'Answer',
              heading: 'Ja',
              value: false,
            },
          ],
        },
        {
          id: 'funny.animals.cat',
          property: 'funny.animals.cat',
          type: 'Radio',
          heading: 'Katt?',
          options: [
            {
              id: '1234',
              type: 'Answer',
              heading: 'Ja',
              value: true,
            },
            {
              id: '1234',
              type: 'Answer',
              heading: 'Ja',
              value: false,
            },
          ],
        },
      ],
    },
  ],
};

describe('reducer', () => {
  describe('initializer', () => {
    it('sets up a working reducer', () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      expect(typeof store.getState().getState).toBeDefined();
    });
  });

  it('computes properties initially', () => {
    const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

    const state = store.getState()[NAME];

    expect(state).toEqual({
      $computed: { dogOrCat: false },
    });
  });

  describe('computes properties on state change', () => {
    it('for shallow, top-level property', () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      store.dispatch(setData('cat', true));
      const state = store.getState()[NAME];

      expect(state).toEqual({
        $computed: { dogOrCat: true },
        cat: true,
      });
    });

    it('for nested property', () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      store.dispatch(setData('funny.animals.cat', true));
      const state = store.getState()[NAME];

      expect(state).toEqual({
        $computed: { dogOrCat: true },
        funny: {
          animals: {
            cat: true,
          },
        },
      });
    });
  });
});
