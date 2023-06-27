// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { NavButton } from 'losen/primitives/Button';

const meta: Meta<typeof NavButton> = {
  component: NavButton,
  argTypes: {
    next: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof NavButton>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Next: Story = {
  args: {
    children: 'Button',
    next: true,
  },
};