import { RenderableNode, ValidatedNode } from "losen";
import getPages  from "utils/get-pages";

describe("getPages", () => {
  const reducedSchema: ValidatedNode<RenderableNode>[] = [
    {
      id: "firstPage",
      heading: "First page",
      type: "Page",
      children: [
        {
          type: "Input",
          errors: { required: true },
          id: "firstInput",
          property: "firstInput",
          heading: "First input",
        },
      ],
    },
    {
      id: "otherPage",
      heading: "The other page",
      type: "Page",
      children: [
        {
          type: "Input",
          errors: { required: true },
          id: "otherInput",
          property: "otherInput",
          heading: "Other input",
        },
        {
          type: "Input",
          errors: { validation: { error: true } },
          id: "otherInput2",
          property: "otherInput2",
          heading: "Other input 2",
        },
      ],
    },
  ];

  it("gets list of pages", () => {
    expect(
      getPages(reducedSchema, {
        firstPage: "Förste sidan",
        otherPage: "The other page",
      })
    ).toEqual([
      {
        id: "firstPage",
        type: "Page",
        heading: "Förste sidan",
        errors: 1,
        completed: false,
        children: [
          {
            errors: {
              required: true,
            },
            heading: "First input",
            id: "firstInput",
            property: "firstInput",
            type: "Input",
          },
        ],
      },
      {
        id: "otherPage",
        type: "Page",
        heading: "The other page",
        errors: 2,
        completed: false,
        children: [
          {
            errors: {
              required: true,
            },
            heading: "Other input",
            id: "otherInput",
            property: "otherInput",
            type: "Input",
          },
          {
            errors: {
              validation: {
                error: true,
              },
            },
            heading: "Other input 2",
            id: "otherInput2",
            property: "otherInput2",
            type: "Input",
          },
        ],
      },
    ]);
  });
});
