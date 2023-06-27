import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton } from 'losen/primitives/ToggleButton'; 

const meta: Meta<typeof ToggleButton> = {
  component: ToggleButton,
  argTypes: {
    visible: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof ToggleButton>;


export const Default: Story = {
  args: {
    children: "Caption",
    visible: true
  },
};
