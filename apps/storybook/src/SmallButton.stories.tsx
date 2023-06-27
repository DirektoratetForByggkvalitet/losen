// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { SmallButton } from 'losen/primitives/Button';

const meta: Meta<typeof SmallButton> = {
  component: SmallButton,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SmallButton>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true
  },
};