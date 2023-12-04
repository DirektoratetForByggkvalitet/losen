import { omit } from "lodash";
import { NAME } from "../../state";

import reduceWizard, {
  filterSchemaNodes,
  liftChildrenBranchPages,
  mapWizardChildren,
  reduceBranches,
  translateNode,
  buildNodeMap,
} from "../reduce-wizard";
import { Branch, Page, RenderableNode, Result, Schema } from "../..";

describe("reduce-wizard", () => {
  it("replaces references", () => {
    const wizard = [
      {
        type: "Page",
        id: "page",
        heading: "Page",
        children: [
          {
            id: "branch",
            type: "Branch",
            branches: [
              {
                test: {
                  field: "apekatt",
                  operator: "neq",
                  value: "hipp hopp ostepop",
                },
                children: [
                  {
                    type: "Input",
                    id: "input",
                    property: "input",
                    heading: "Input",
                  },
                  {
                    type: "Reference",
                    nodeId: "resultPage",
                  },
                  {
                    id: "radio",
                    heading: "Radio",
                    type: "Radio",
                    property: "radio",
                    options: [
                      {
                        heading: "Ostepop",
                        id: "ostepop",
                        type: "Answer",
                        value: "ostepop",
                      },
                      {
                        id: "diggsnop",
                        type: "Answer",
                        heading: "Godt & Blanda",
                        value: "godtogblanda",
                      },
                    ],
                  },
                ],
              },
            ],
          },
          {
            id: "apekatt",
            type: "Input",
            property: "apekatt",
            heading: "Apekatt",
          },
        ],
      },
      {
        type: "Result",
        id: "resultPage",
        heading: "Foobar",
        children: [
          {
            type: "Reference",
            nodeId: "apekatt",
            hide: { field: "foo", operator: "eq", value: "bar" },
          },
          {
            type: "Radio",
            id: "radio",
            property: "radio",
            heading: "Radio",
            options: [
              {
                type: "Reference",
                nodeId: "diggsnop",
                show: { field: "foo", operator: "eq", value: "bar" },
              },
              {
                type: "Reference",
                nodeId: "ostepop",
              },
            ],
          },
        ],
      },
    ] satisfies Schema;

    expect(reduceWizard(wizard, { [NAME]: { foo: "bar" } })).toEqual([
      {
        id: "page",
        type: "Page",
        heading: "Page",
        children: [
          {
            id: "input",
            type: "Input",
            heading: "Input",
            property: "input",
            errors: {
              disabled: [],
              validation: {},
              required: true,
            },
            errorDescription: "",
          },
        ],
      },
      {
        type: "Result",
        id: "resultPage",
        heading: "Foobar",
        children: [
          {
            id: "radio",
            type: "Radio",
            property: "radio",
            heading: "Radio",
            options: [
              {
                id: "diggsnop",
                type: "Answer",
                heading: "Godt & Blanda",
                value: "godtogblanda",
                messages: [],
                show: {
                  field: "foo",
                  operator: "eq",
                  value: "bar",
                },
              },
              {
                id: "ostepop",
                type: "Answer",
                heading: "Ostepop",
                value: "ostepop",
                messages: [],
              },
            ],
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
    ]);
  });

  it("removes empty pages", () => {
    const wizard = [
      {
        id: "page",
        type: "Page",
        heading: "page",
        children: [
          {
            id: "branch",
            type: "Branch",
            branches: [
              {
                test: {
                  field: "fjasebengel",
                  operator: "required",
                },
                children: [
                  {
                    id: "input",
                    type: "Input",
                    property: "input",
                    heading: "Input",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "result",
        type: "Result",
        heading: "Foobar",
      },
    ] satisfies Schema;

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      { id: "result", type: "Result", heading: "Foobar" },
    ]);
  });

  it("leaves groups in place", () => {
    const wizard = [
      {
        id: "page",
        type: "Page",
        heading: "page",
        children: [
          {
            id: "radio",
            type: "Radio",
            property: "radio",
            heading: "Radio",
            options: [],
          },
          {
            id: "group",
            type: "Group",
            children: [
              {
                id: "input",
                type: "Input",
                heading: "Input",
                property: "input",
              },
              {
                id: "input2",
                type: "Input",
                property: "input2",
                heading: "Input2",
                hide: { field: "foo", operator: "eq", value: "bar" },
              },
              {
                id: "branch",
                type: "Branch",
                branches: [
                  {
                    test: { field: "foo", operator: "eq", value: "bar" },
                    children: [
                      {
                        id: "input3",
                        type: "Input",
                        property: "input3",
                        heading: "Input3",
                        hide: { field: "foo", operator: "neq", value: "bar" },
                      },
                      {
                        id: "result",
                        type: "Result",
                        show: { field: "foo", operator: "eq", value: "bar" },
                        heading: "The other end",
                      },
                    ],
                  },
                  {
                    test: { field: "foo", operator: "neq", value: "bar" },
                    children: [
                      {
                        id: "result2",
                        type: "Result",
                        heading: "The end",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "result3",
        type: "Result",
        heading: "Foobar",
      },
    ] satisfies Schema;

    expect(reduceWizard(wizard, { [NAME]: { foo: "bar" } })).toEqual([
      {
        id: "page",
        heading: "page",
        type: "Page",
        children: [
          {
            id: "radio",
            type: "Radio",
            heading: "Radio",
            property: "radio",
            options: [],
            errors: { disabled: [], validation: {}, required: true },
            errorDescription: "",
          },
          {
            id: "group",
            type: "Group",
            children: [
              {
                id: "input",
                type: "Input",
                heading: "Input",
                property: "input",
                errors: { disabled: [], validation: {}, required: true },
                errorDescription: "",
              },
              {
                id: "input3",
                type: "Input",
                heading: "Input3",
                property: "input3",
                errors: { disabled: [], validation: {}, required: true },
                errorDescription: "",
              },
            ],
          },
        ],
      },
      {
        id: "result",
        type: "Result",
        heading: "The other end",
      },
    ]);
  });

  it("reduces wizard correctly based on state data", () => {
    const wizard = [
      {
        id: "page",
        type: "Page",
        heading: "The page",
        children: [
          {
            id: "input",
            type: "Input",
            property: "input",
            heading: "Input",
          },
          {
            id: "input2",
            type: "Input",
            property: "input2",
            heading: "Input2",
            hide: { field: "foo", operator: "eq", value: "bar" },
          },
          {
            id: "branch",
            type: "Branch",
            branches: [
              {
                test: { field: "foo", operator: "eq", value: "baz" },
                children: [
                  {
                    id: "input3",
                    type: "Input",
                    property: "input3",
                    heading: "Input3",
                  },
                ],
              },
              {
                test: { field: "foo", operator: "neq", value: "baz" },
                children: [
                  {
                    id: "result",
                    type: "Result",
                    heading: "The end",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "result2",
        type: "Result",
        heading: "Foobar",
      },
    ] satisfies Schema;

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      {
        id: "page",
        heading: "The page",
        type: "Page",
        children: [
          {
            id: "input",
            type: "Input",
            heading: "Input",
            property: "input",
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...omit(
              // we expect the show, hide and hidden props to be gone
              wizard?.[0]?.children?.[1],
              ["show", "hide", "hidden"]
            ),
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      {
        id: "result",
        heading: "The end",
        type: "Result",
      },
    ]);

    expect(
      reduceWizard(wizard, {
        [NAME]: {
          foo: "bar",
          bar: "baz",
        },
      })
    ).toEqual([
      {
        id: "page",
        type: "Page",
        heading: "The page",
        children: [
          {
            id: "input",
            type: "Input",
            property: "input",
            heading: "Input",
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      {
        id: "result",
        type: "Result",
        heading: "The end",
      },
    ]);
  });

  it("doesn't add error stuff to result page", () => {
    const wizard = [
      {
        id: "page",
        type: "Page",
        heading: "The page",
        children: [],
      },
      {
        id: "result",
        type: "Result",
        heading: "Foobar",
      },
    ] satisfies Schema;

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      {
        id: "result",
        heading: "Foobar",
        type: "Result",
      },
    ]);
  });

  it("filters out children nodes correctly", () => {
    const wizard = [
      {
        id: "page",
        type: "Page",
        heading: "The page",
        children: [
          {
            id: "branch",
            type: "Branch",
            branches: [
              {
                test: { field: "foo", operator: "required" },
                children: [
                  {
                    id: "input",
                    type: "Input",
                    property: "input",
                    heading: "Input",
                  },
                  {
                    id: "input2",
                    type: "Radio",
                    property: "radio",
                    heading: "Radio",
                    hide: {
                      field: "foo",
                      operator: "not",
                    },
                    options: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        id: "result",
        type: "Result",
        heading: "Foobar",
      },
    ] satisfies Schema;

    expect(reduceWizard(wizard, { [NAME]: { foo: "test" } })).toEqual([
      {
        id: "page",
        type: "Page",
        heading: "The page",
        children: [
          {
            id: "input",
            type: "Input",
            heading: "Input",
            property: "input",
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...omit(
              // we expect the show, hide and hidden props to be gone
              wizard?.[0]?.children?.[0]?.branches?.[0]?.children?.[1],
              ["show", "hide", "hidden"]
            ),
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      {
        id: "result",
        type: "Result",
        heading: "Foobar",
      },
    ]);

    expect(
      reduceWizard(wizard, {
        [NAME]: {
          foo: "bar",
        },
      })
    ).toEqual([
      {
        id: "page",
        type: "Page",
        heading: "The page",
        children: [
          {
            id: "input",
            type: "Input",
            heading: "Input",
            property: "input",
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...omit(
              // we expect the show, hide and hidden props to be gone
              wizard?.[0]?.children?.[0]?.branches?.[0]?.children?.[1],
              ["show", "hide", "hidden"]
            ),
            errorDescription: "",
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      {
        id: "result",
        type: "Result",
        heading: "Foobar",
      },
    ]);
  });

  describe("#filterSchemaNodes", () => {
    it("does not filter out nodes missing the hidden property", () => {
      const raw = [
        {
          id: "input1",
          type: "Input",
          property: "input1",
          heading: "Input1",
          hide: { field: "foo", operator: "eq", value: "test" },
        },
        {
          id: "input2",
          type: "Input",
          property: "input2",
          heading: "Input2",
        },
      ] satisfies RenderableNode[];

      const filtered = raw.filter(
        filterSchemaNodes({ [NAME]: { foo: "test" } })
      );
      expect(filtered).toEqual([raw[1]]);
    });

    it("does not filter out Branch nodes", () => {
      const raw = [
        {
          id: "branch",
          type: "Branch",
          hide: { field: "foo", operator: "eq", value: "test" },
          branches: [],
        },
        {
          id: "input",
          type: "Input",
          property: "input",
          heading: "Input",
        },
      ] satisfies RenderableNode[];

      const filtered = raw.filter(
        filterSchemaNodes({ [NAME]: { foo: "test" } })
      );
      expect(filtered).toEqual(raw);
    });

    it("filters out nodes", () => {
      const state = { [NAME]: { foo: "bar" } };

      const raw = [
        {
          id: "input1",
          type: "Input",
          property: "input1",
          heading: "Fjasebengel",
          hide: { field: "foo", operator: "eq", value: "bar" },
        },
        {
          id: "input2",
          type: "Input",
          property: "input2",
          heading: "Floppo",
          hide: { field: "foo", operator: "neq", value: "bar" },
        },
      ] satisfies RenderableNode[];

      const filtered = raw.filter(filterSchemaNodes(state));
      expect(filtered).toEqual([raw[1]]);
    });
  });

  describe("#reduceBranches", () => {
    it("does nothing with non-branches", () => {
      const raw = [
        {
          id: "input",
          type: "Input",
          property: "input",
          heading: "Input",
        },
        {
          id: "radio",
          type: "Radio",
          property: "radio",
          heading: "Radio",
          options: [],
        },
      ] satisfies RenderableNode[];

      const filtered = raw.reduce(reduceBranches({}, {}), [] as typeof raw);
      expect(filtered).toEqual(raw);
    });

    it("replaces the branch node with the children of the correct branch", () => {
      const raw = [
        {
          id: "input",
          type: "Input",
          property: "input",
          heading: "Input",
        },
        {
          id: "branch",
          type: "Branch",
          branches: [
            {
              test: { field: "foo", operator: "eq", value: "bar" },
              children: [
                {
                  id: "radio",
                  type: "Radio",
                  property: "radio",
                  heading: "Radio",
                  options: [],
                },
              ],
            },
            {
              test: { field: "foo", operator: "eq", value: "baz" },
              children: [
                {
                  id: "input2",
                  type: "Input",
                  property: "input2",
                  heading: "Input2",
                },
              ],
            },
          ],
        },
      ] satisfies RenderableNode[];

      expect(
        raw.reduce(
          reduceBranches({ [NAME]: { foo: "bar" } }, {}),
          [] as typeof raw
        )
      ).toEqual([
        raw[0],
        {
          ...raw?.[1]?.branches?.[0]?.children?.[0],
          errorDescription: "",
          errors: {
            disabled: [],
            required: true,
            validation: {},
          },
        },
      ]);

      expect(
        raw.reduce(
          reduceBranches({ [NAME]: { foo: "baz" } }, {}),
          [] as typeof raw
        )
      ).toEqual([
        raw[0],
        {
          ...raw?.[1]?.branches?.[1]?.children[0],
          errorDescription: "",
          errors: {
            disabled: [],
            required: true,
            validation: {},
          },
        },
      ]);

      expect(
        raw.reduce(
          reduceBranches({ [NAME]: { foo: "ban" } }, {}),
          [] as typeof raw
        )
      ).toEqual([raw[0]]);
    });
  });

  describe("#mapWizardChildren", () => {
    describe("sets error.required for", () => {
      const node = {
        id: "snakez",
        property: "snakez",
        type: "Checkbox",
        heading: "Dat is snakes?",
        options: [
          {
            id: "creeps",
            type: "Answer",
            heading: "Gimme creeps",
            value: "creaps",
          },
          {
            id: "sneak",
            type: "Answer",
            heading: "Many sneak",
            value: "sneak",
          },
          {
            id: "evil",
            type: "Answer",
            heading: "Very evil",
            value: "evil",
          },
        ],
      } satisfies RenderableNode;

      const allMandatoryNode = { ...node, allMandatory: true };

      it("non-optional checkbox with nothing selected", () => {
        expect(
          mapWizardChildren({ [NAME]: { foo: "bar" } }, {}, {}, {})(node)
        ).toHaveProperty("errors.required", true);
      });

      it("allMandatory checkbox with something, but not all selected", () => {
        expect(
          mapWizardChildren(
            {
              [NAME]: {
                snakez: {
                  creaps: true,
                },
              },
            },
            {},
            {},
            {}
          )(allMandatoryNode)
        ).toHaveProperty("errors.required", true);
      });
    });

    describe("does not set error.required for", () => {
      const node = {
        id: "snakez",
        property: "snakez",
        type: "Checkbox",
        heading: "Dat is snakes?",
        options: [
          {
            id: "creeps",
            type: "Answer",
            heading: "Gimme creeps",
            value: "creaps",
          },
          {
            id: "sneak",
            type: "Answer",
            heading: "Many sneak",
            value: "sneak",
          },
          {
            id: "evil",
            type: "Answer",
            heading: "Very evil",
            value: "evil",
          },
        ],
      } satisfies RenderableNode;

      const optionalNode = { ...node, optional: true };

      it("optional checkbox with nothing selected", () => {
        expect(
          mapWizardChildren({ [NAME]: {} }, {}, {}, {})(optionalNode).errors
        ).toEqual({
          disabled: [],
          validation: {},
        });
      });

      it("non-allMandatory checkbox with one option selected", () => {
        expect(
          mapWizardChildren(
            {
              [NAME]: {
                snakez: {
                  creaps: true,
                },
              },
            },
            {},
            {},
            {}
          )(node)
        ).toHaveProperty("errors.required", false);
      });
    });
  });

  describe("#liftChildrenBranchPages", () => {
    it("hoists page if the last node is a result page", () => {
      const raw = [
        {
          type: "Page",
          children: [{ type: "Input" }, { type: "Result", heading: "Hey yo" }],
        },
      ] as any;

      expect(
        raw.reduce(
          liftChildrenBranchPages,
          [] as (Error | Result | Page | Branch)[]
        )
      ).toEqual([
        {
          type: "Page",
          children: [{ type: "Input" }],
        },
        { type: "Result", heading: "Hey yo" },
      ]);
    });
  });

  describe("#buildNodeMap", () => {
    it("ignores refs with no nodeId property", () => {
      const raw = [
        {
          type: "Page",
        },
        {
          type: "Page",
          id: "apekatt",
        },
      ] as any;

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: "Page", id: "apekatt" },
      });
    });

    it("includes child node of node ignored because of missing id", () => {
      const raw = [
        {
          type: "Page",
          children: [{ type: "Input", id: "apekatt" }],
        },
      ] as any;

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: "Input", id: "apekatt" },
      });
    });

    it("includes pages and result pages", () => {
      const raw = [
        { type: "Page" },
        { type: "Page", id: "apekatt" },
        { type: "Result" },
        { type: "Result", id: "fjasebengel" },
      ] as any;

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: "Page", id: "apekatt" },
        fjasebengel: { type: "Result", id: "fjasebengel" },
      });
    });

    it("includes branch children", () => {
      const raw = [
        {
          type: "Page",
          children: [
            {
              type: "Branch",
              branches: [
                {
                  test: {
                    field: "houseType",
                    operator: "eq",
                    value: "enebolig",
                  },
                  children: [{ type: "Input", id: "apekatt" }],
                },
                {
                  test: {
                    field: "houseType",
                    operator: "eq",
                    value: "rekkehus",
                  },
                  children: [{ type: "Input", id: "fjasebengel" }],
                },
              ],
            },
          ],
        },
      ] as any;

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: "Input", id: "apekatt" },
        fjasebengel: { type: "Input", id: "fjasebengel" },
      });
    });

    it("includes options", () => {
      const raw = [
        {
          type: "Page",
          children: [
            {
              type: "Radio",
              options: [
                {
                  test: {
                    field: "houseType",
                    operator: "eq",
                    value: "enebolig",
                  },
                  children: [{ type: "Input", id: "apekatt" }],
                },
                {
                  test: {
                    field: "houseType",
                    operator: "eq",
                    value: "rekkehus",
                  },
                  children: [{ type: "Input", id: "fjasebengel" }],
                },
              ],
            },
          ],
        },
      ] as any;

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: "Input", id: "apekatt" },
        fjasebengel: { type: "Input", id: "fjasebengel" },
      });
    });
  });

  describe("#translateNode", () => {
    const translations = {
      se: {
        key: "se",
        name: "Svenska",
        tags: {
          varemerker: {
            heading: "Varumärken",
          },
          risikovurdering: {
            heading: "Riskbedömning",
            description: "Vi behöver veta hur mycket risk",
          },
          fasade: {
            heading: "Fasade",
            image: {
              large: "http://example.com/large.jpeg",
            },
          },
        },
      },
    };

    it("returns node if no translation is found", () => {
      const node = {
        id: "varemerker",
        type: "Input",
        property: "varemerker",
        heading: "Varemerker",
      } satisfies RenderableNode;

      expect(translateNode(node, {}, translations)).toEqual(node);
    });

    it("returns translated heading", () => {
      const node = {
        id: "varemerker",
        type: "Input",
        property: "varemerker",
        heading: "Varemerker",
      } satisfies RenderableNode;

      expect(
        translateNode(node, { [NAME]: { $language: "se" } }, translations)
      ).toEqual({
        ...node,
        heading: translations.se.tags.varemerker.heading,
      });
    });

    it("returns translated lead/text", () => {
      ["Page", "Result", "Input"].forEach((type) => {
        const descriptionNodeProperty = type === "Input" ? "text" : "lead";

        const node = {
          type,
          id: "risikovurdering",
          [descriptionNodeProperty]: "Risikovurdering",
        } as RenderableNode;

        const translatedNode = translateNode(
          node,
          { [NAME]: { $language: "se" } },
          translations
        );

        expect(translatedNode).toEqual({
          ...node,
          heading: translations.se.tags.risikovurdering.heading,
          [descriptionNodeProperty]:
            translations.se.tags.risikovurdering.description,
        });
      });
    });

    it("sets image from translation", () => {
      const node = {
        type: "Image",
        id: "fasade",
      } as RenderableNode;

      const translatedNode = translateNode(
        node,
        { [NAME]: { $language: "se" } },
        translations
      );

      expect(translatedNode).toEqual({
        ...node,
        heading: translations.se.tags.fasade.heading,
        image: {
          url: translations.se.tags.fasade.image.large,
          alt: `Illustrasjon for ${translations.se.tags.fasade.heading}`,
        },
      });
    });
  });
});
