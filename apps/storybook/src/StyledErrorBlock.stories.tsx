// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import StyledErrorBlock from 'losen/primitives/ErrorBlock';

const meta: Meta<typeof StyledErrorBlock> = {
  component: StyledErrorBlock,
  argTypes: {
    grouped: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof StyledErrorBlock>;

export const Default: Story = {
  args: {
    children: 'ErrorBlock',
  },
};

export const Grouped: Story = {
  args: {
    children: 'ErrorBlock',
    grouped: true,
  },
};