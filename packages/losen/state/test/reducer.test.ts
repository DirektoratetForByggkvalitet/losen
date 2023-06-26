import { createStore, combineReducers } from "redux";

import reducer from "losen/state/reducer";
import { setData } from "losen/state/actions";
import { NAME } from "losen/state";
import { WizardDefinition } from "losen";

const schema: WizardDefinition = {
  meta: {
    name: "test",
    title: "Test",
  },
  computed: {
    dogOrCat: {
      type: "or",
      clauses: [
        {
          field: "dog",
          operator: "eq",
          value: true,
        },
        {
          field: "cat",
          operator: "eq",
          value: true,
        },
        {
          field: "funny.animals.cat",
          operator: "eq",
          value: true,
        },
      ],
    },
  },
  schema: [
    {
      id: "page1",
      type: "Page",
      heading: "Første side",
      children: [
        {
          id: "dog",
          property: "dog",
          type: "Radio",
          heading: "Hund?",
          options: [
            {
              id: "123",
              type: "Answer",
              heading: "Ja",
              value: true,
            },
            {
              id: "123",
              type: "Answer",
              heading: "Ja",
              value: false,
            },
          ],
        },
        {
          id: "funnyAnimals.cat",
          property: "cat",
          type: "Radio",
          heading: "Katt?",
          options: [
            {
              id: "1234",
              type: "Answer",
              heading: "Ja",
              value: true,
            },
            {
              id: "1234",
              type: "Answer",
              heading: "Ja",
              value: false,
            },
          ],
        },
        {
          id: "funny.animals.cat",
          property: "funny.animals.cat",
          type: "Radio",
          heading: "Katt?",
          options: [
            {
              id: "1234",
              type: "Answer",
              heading: "Ja",
              value: true,
            },
            {
              id: "1234",
              type: "Answer",
              heading: "Ja",
              value: false,
            },
          ],
        },
        {
          id: "snakez",
          property: "snakez",
          type: "Radio",
          heading: "Can has snakez?",
          hide: {
            field: "cat",
            operator: "neq",
            value: true,
          },
          options: [
            {
              id: "snakez.ja",
              type: "Answer",
              heading: "ja",
              value: true,
            },
            {
              id: "snakez.nei",
              type: "Answer",
              heading: "nei",
              value: false,
            },
          ],
        },
      ],
    },
  ],
};

describe("reducer", () => {
  describe("initializer", () => {
    it("sets up a working reducer", () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      expect(typeof store.getState()).toBeDefined();
    });

    it("computes properties initially", () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      const state = store.getState()[NAME];

      expect(state).toEqual({
        $computed: { dogOrCat: false },
      });
    });
  });

  describe("setDataUpdate", () => {
    it("purges properties that belongs to removed nodes", () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      // Set cat and assert that it's set in state
      store.dispatch(setData("cat", true));
      expect(store.getState()[NAME]).toEqual({
        $computed: { dogOrCat: true },
        cat: true,
      });

      // Set snake prop and assert that it's set in state
      store.dispatch(setData("snakez", true));
      expect(store.getState()[NAME]).toEqual({
        $computed: { dogOrCat: true },
        cat: true,
        snakez: true,
      });

      /**
       * Unset cat prop (which will cause the snake question to go away)
       * and assert that the snakez property is cleaned out as well
       */
      store.dispatch(setData("cat", false));
      expect(store.getState()[NAME]).toEqual({
        $computed: { dogOrCat: false },
        cat: false,
      });
    });

    it("leaves properties under $external without touching them ", () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      // Set external prop and assert that it's not removed
      store.dispatch(setData("$external.entryFromLink", true));
      expect(store.getState()[NAME]).toEqual({
        $computed: { dogOrCat: false },
        $external: { entryFromLink: true },
      });
    });
  });

  describe("computes properties on state change", () => {
    it("for shallow, top-level property", () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      store.dispatch(setData("cat", true));
      const state = store.getState()[NAME];

      expect(state).toEqual({
        $computed: { dogOrCat: true },
        cat: true,
      });
    });

    it("for nested property", () => {
      const store = createStore(combineReducers({ [NAME]: reducer(schema) }));

      store.dispatch(setData("funny.animals.cat", true));
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
