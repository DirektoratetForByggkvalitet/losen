// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { SecondaryButton } from 'losen/primitives/Button';

const meta: Meta<typeof SecondaryButton> = {
  component: SecondaryButton,
};

export default meta;
type Story = StoryObj<typeof SecondaryButton>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};