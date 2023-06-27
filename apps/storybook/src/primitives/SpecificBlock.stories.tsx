// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { SpecificBlock } from 'losen/primitives/Block';

const meta: Meta<typeof SpecificBlock> = {
  component: SpecificBlock,
  argTypes: {
    debug: { control: 'boolean' },
    grouped: { control: 'boolean' },
    smallMarginTop: { control: 'boolean' },
    error: { control: 'boolean' },
    groupedSimple: { control: 'boolean' },
    type: {control: 'select', options: ['table', undefined] },
  },
};

export default meta;
type Story = StoryObj<typeof SpecificBlock>;

export const Default: Story = {
  args: {
    children: 'Block',
  },
};

export const Grouped: Story = {
  args: {
    children: 'Block',
    grouped: true,
  },
};

export const GroupedSimple: Story = {
  args: {
    children: 'Block',
    grouped: true,
    groupedSimple: true,
  },
};

export const Table: Story = {
  args: {
    children: 'Block',
    type: 'table',
  },
};
