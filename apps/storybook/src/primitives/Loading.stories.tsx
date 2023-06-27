import type { Meta, StoryObj } from '@storybook/react';
import Loading from 'losen/primitives/Loading'; 

const meta: Meta<typeof Loading> = {
  component: Loading,
  argTypes: {
    children: { control: 'text' },
    warning: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Loading>;


export const Default: Story = {
  args: {
    children: "Label",
  },
};
