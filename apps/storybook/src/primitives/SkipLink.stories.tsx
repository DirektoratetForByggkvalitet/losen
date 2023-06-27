import type { Meta, StoryObj } from '@storybook/react';
import SkipLink from 'losen/primitives/SkipLink'; 

const meta: Meta<typeof SkipLink> = {
  component: SkipLink,
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SkipLink>;


export const Default: Story = {
  args: {
    children: "Jump to content",
  },
};
