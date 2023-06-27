import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from 'losen/primitives/Input'; 
import { Label } from 'losen/primitives/Label'; 

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Checkbox>;


export const Default: Story = {
  args: {
    checked: false,
    disabled: false
  },
  render: (args) => <div><Checkbox {...args} /><Label>Label</Label></div>,
};
