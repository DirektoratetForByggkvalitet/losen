import type { Meta, StoryObj } from '@storybook/react';
import Signature from 'losen/primitives/Signature'; 

const meta: Meta<typeof Signature> = {
  component: Signature,
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Signature>;


export const Default: Story = {
  args: {
    children: "Date and signature",
  },
};
