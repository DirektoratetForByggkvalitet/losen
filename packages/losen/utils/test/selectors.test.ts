import {
  getTitle,
  getNodeTitles,
  getNodeErrors,
  getErrorPages,
} from "../selectors";

import { Translations } from "../reduce-wizard";
import { NAME } from "../../state";
import { Schema } from "../..";
import { getData } from "../get-data";
import { getCurrentLanguage } from "../get-current-language";
import { getTranslation } from "../get-translation";

describe("state selectors", () => {
  const schema: Schema = [
    {
      id: "first",
      type: "Page",
      heading: "First page",
      children: [
        {
          id: "first.input",
          type: "Input",
          heading: "The first input",
          property: "first",
        },
        {
          id: "next.input",
          type: "Input",
          heading: "The next input",
          property: "next",
        },
        {
          id: "the-branch",
          type: "Branch",
          branches: [
            {
              test: {
                field: "first",
                operator: "not",
              },
              children: [
                {
                  id: "branch.input",
                  type: "Input",
                  heading: "Input in branch",
                  property: "in-branch",
                },
              ],
            },
          ],
        },
      ],
    },
    { id: "foobar", type: "Result", heading: "Foobar" },
  ];

  describe("getData", () => {
    it("returns the wizard state", () => {
      expect(getData({ [NAME]: { catIsCute: true } })).toEqual({
        catIsCute: true,
      });
    });

    it("returns an empty object if state object is undefined", () => {
      expect(getData({})).toEqual({});
    });
  });

  describe("getNodeTitles", () => {
    it("gets headings for nodes in schema", () => {
      const translations = {};
      const state = { [NAME]: {} };

      expect(getNodeTitles(schema, translations, state)).toEqual({
        "branch.input": "Input in branch",
        "first.input": "The first input",
        "next.input": "The next input",
        first: "First page",
        foobar: "Foobar",
        "the-branch": "the-branch",
      });
    });

    it("gets headings for translated nodes in schema", () => {
      const translations = {
        se: {
          key: "se",
          name: "Svenska",
          tags: {
            "next.input": { heading: "Nästa inmatningsfält" },
            first: { heading: "Första sidan" },
          },
        },
      };
      const state = { [NAME]: { $language: "se" } };

      expect(getNodeTitles(schema, translations, state)).toEqual({
        "branch.input": "Input in branch",
        "first.input": "The first input",
        "next.input": "Nästa inmatningsfält",
        first: "Första sidan",
        foobar: "Foobar",
        "the-branch": "the-branch",
      });
    });
  });

  describe("getNodeErrors", () => {
    describe("increase error count if", () => {
      it("disabled is a non zero length array", () => {
        expect(
          getNodeErrors({
            errors: {
              disabled: [
                {
                  valid: false,
                  operator: "and",
                  errors: [],
                },
                {},
              ],
            },
          } as any)
        ).toBe(2);
      });

      it("node has an error regarding a required field", () => {
        expect(
          getNodeErrors({
            id: "first.input",
            type: "Input",
            heading: "The first input",
            property: "first",
            errors: {
              required: true,
            },
          })
        ).toBe(1);
      });

      it("there is a validation error", () => {
        expect(
          getNodeErrors({
            id: "first.input",
            type: "Input",
            heading: "The first input",
            property: "first",
            errors: {
              validation: {
                error: true,
              },
            },
          })
        ).toBe(1);
      });

      it("children of the node has errors", () => {
        expect(
          getNodeErrors({
            children: [
              {
                id: "first.input",
                type: "Input",
                heading: "The first input",
                property: "first",
                errors: { disabled: [{}, {}] },
              }, // 2 errors
              {
                id: "next.input",
                type: "Input",
                heading: "The next input",
                property: "next",
                errors: { required: true },
              }, // 1 error
              {
                id: "third.input",
                type: "Input",
                heading: "The third input",
                property: "third",
                errors: { validation: { error: true } },
              }, // 1 error
            ],
          } as any)
        ).toBe(4);
      });
    });
  });

  describe("getErrorPages", () => {
    it("returns pages with errors", () => {
      expect(
        getErrorPages(
          [
            {
              id: "first",
              heading: "The first page",
              type: "Page",
              children: [],
            },
            {
              id: "second",
              type: "Page",
              heading: "The other page",
              children: [
                {
                  id: "firstName",
                  type: "Input",
                  heading: "First name",
                  property: "firstName",
                },
              ],
            },
          ],
          {}
        )
      ).toEqual([
        {
          errorNodes: [
            {
              errors: {
                disabled: [],
                required: true,
                validation: {},
              },
              heading: "First name",
              property: "firstName",
            },
          ],
          heading: "The other page",
          id: "second",
          type: "Page",
        },
      ]);
    });
  });

  describe("getCurrentLanguage", () => {
    it("handles empty state", () => {
      expect(getCurrentLanguage({})).toBe("no");
    });

    it("allows specifying a default value (if no language is set)", () => {
      expect(getCurrentLanguage({}, "leetspeak")).toBe("leetspeak");
    });

    it("returns the selected language", () => {
      expect(getCurrentLanguage({ [NAME]: { $language: "se" } })).toBe("se");
    });
  });

  describe("getTitle", () => {
    it("returns title of wizard", () => {
      expect(
        getTitle(
          {
            [NAME]: {},
          },
          {
            schema: [],
            meta: {
              title: "My wizard",
              name: "my-wizard",
            },
          },
          {}
        )
      ).toBe("My wizard");
    });

    it("use the title from translation if one is specified, and selected", () => {
      expect(
        getTitle(
          { [NAME]: { $language: "se" } },
          {
            schema: [],
            meta: {
              title: "My wizard",
              name: "my-wizard",
            },
          },
          {
            se: {
              meta: { title: "Min vägvisare" },
              key: "se",
              name: "Svenska",
              tags: [] as any,
            },
          }
        )
      ).toBe("Min vägvisare");
    });
  });

  describe("getTranslation", () => {
    it("handles if no language is selected", () => {
      expect(getTranslation({}, {})).toEqual({});
    });

    it("returns the tags for the correct language", () => {
      const translations: Translations = {
        se: {
          key: "se",
          name: "Svenska",
          meta: { title: "Min vägvisare" },
          tags: { varemerker: { heading: "Varumärken" } },
        },
      };

      expect(
        getTranslation({ [NAME]: { $language: "se" } }, translations)
      ).toEqual(translations.se.tags);
    });
  });
});
