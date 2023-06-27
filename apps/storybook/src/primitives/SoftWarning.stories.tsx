import type { Meta, StoryObj } from '@storybook/react';
import SoftWarning from 'losen/primitives/SoftWarning'; 

const meta: Meta<typeof SoftWarning> = {
  component: SoftWarning,
  argTypes: {
    children: { control: 'text' },
    warning: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SoftWarning>;


export const Default: Story = {
  args: {
    children: "Paragraph",
  },
};

export const Warning: Story = {
  args: {
    children: "Paragraph",
    warning: true,
  },
};
