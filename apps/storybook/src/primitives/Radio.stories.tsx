import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from 'losen/primitives/Input'; 
import { Label } from 'losen/primitives/Label'; 

const meta: Meta<typeof Radio> = {
  component: Radio,
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;


export const Default: Story = {
  args: {
    checked: false,
    disabled: false
  },
  render: (args) => <div><Radio {...args} /><Label>Label</Label></div>,
};
