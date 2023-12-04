import { WizardDefinition } from "losen";

const schema: WizardDefinition = {
  meta: {
    name: "Losens skjema",
    title: "Losens skjema",
  },
  schema: [
    {
      type: "Page",
      heading: "Side 1",
      id: "page1",
      children: [
        {
          id: "page1_input1",
          type: "Input",
          heading: "Input 1",
          property: "input1",
        },
      ],
    },
  ],
};

export default schema;
