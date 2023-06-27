import type { Meta, StoryObj } from '@storybook/react';
import { Label } from 'losen/primitives/Label'; 

const meta: Meta<typeof Label> = {
  component: Label,
  argTypes: {
    children: { control: 'text' },
    warning: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;


export const Default: Story = {
  args: {
    children: "Label",
  },
};
