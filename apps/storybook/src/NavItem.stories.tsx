import type { Meta, StoryObj } from '@storybook/react';
import { NavItem } from 'losen/primitives/NavItem'; 
import CheckIcon from 'losen/components/graphics/CheckIcon';
import EditIcon from 'losen/components/graphics/EditIcon';

const meta: Meta<typeof NavItem> = {
  component: NavItem,
  argTypes: {
    active: { control: 'boolean' },
    errors: { control: 'boolean' },
    done: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof NavItem>;

const template = (args: any) => <NavItem
      {...args}
    >
      <span>14</span>
      <p>Label</p>
      {args?.done ? <CheckIcon /> : <EditIcon />}
    </NavItem>

export const Default: Story = {
  render: template,
};

export const Active: Story = {
  args: {
    active: true,
  },
  render: template,
};

export const Done: Story = {
  args: {
    done: true,
  },
  render: template,
};

export const Errors: Story = {
  args: {
    errors: true,
  },
  render: template,
};