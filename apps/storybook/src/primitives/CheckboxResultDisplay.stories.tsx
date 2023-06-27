import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxResultDisplay } from 'losen/primitives/Input'; 
import { Label } from 'losen/primitives/Label'; 

const meta: Meta<typeof CheckboxResultDisplay> = {
  component: CheckboxResultDisplay,
  argTypes: {
    checked: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxResultDisplay>;


export const Default: Story = {
  args: {
    checked: true,
  },
  render: (args) => <div><CheckboxResultDisplay {...args} /><Label>Label</Label></div>,
};
