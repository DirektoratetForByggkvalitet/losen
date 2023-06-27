// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import { MainButton } from 'losen/primitives/Button';
import Spinner from 'losen/primitives/Spinner';

const meta: Meta<typeof MainButton> = {
  component: MainButton,
  argTypes: {
    copied: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof MainButton>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Copied: Story = {
  args: {
    children: 'Button',
    copied: true
  },
};

export const Disabled: Story = {
  args: {
    children: 'Button',
    disabled: true
  },
};


export const LoadingSpinner: Story = {
  args: {
    children: 'Button',
    disabled: true
  },
  render: (args) => <MainButton {...args}><span>{args.children}</span><Spinner /></MainButton>
};

