import type { Meta, StoryObj } from '@storybook/react';
import Fieldset from 'losen/primitives/Fieldset'; 

const meta: Meta<typeof Fieldset> = {
  component: Fieldset,
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Default: Story = {
  args: {
    children: 'Fieldset',
  },
};
