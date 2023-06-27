// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { TextBlock } from 'losen/primitives/Block';

const meta: Meta<typeof TextBlock> = {
  component: TextBlock,
  argTypes: {
    small: { control: 'boolean' },
    groupedSimple: { control: 'boolean' },
    printonly: { control: 'boolean' },
    printhide: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextBlock>;

export const Default: Story = {
  args: {
    children: 'TextBlock',
  },
};

export const Small: Story = {
  args: {
    children: 'TextBlock',
    small: true,
  },
};

export const GroupedSimple: Story = {
  args: {
    children: 'TextBlock',
    groupedSimple: true,
  },
};

export const PrintOnly: Story = {
  args: {
    children: 'TextBlock',
    printonly: true,
  },
};

export const PrintHide: Story = {
  args: {
    children: 'TextBlock',
    printhide: true,
  },
};
