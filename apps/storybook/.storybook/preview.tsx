import React from 'react'
import type { Preview } from "@storybook/react";
import { Wizard } from "losen/primitives/Wizard"

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) => (
      <Wizard $noBackground>
        <Story />
      </Wizard>
    ),
  ],
};

export default preview;
