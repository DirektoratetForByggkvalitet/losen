import type { Meta, StoryObj } from '@storybook/react';
import OptionWrapper from 'losen/primitives/OptionWrapper'; 
import { Label } from 'losen/primitives/Label'; 
import { Radio } from 'losen/primitives/Input'; 

const meta: Meta<typeof OptionWrapper> = {
  component: OptionWrapper,
  argTypes: {
    grid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof OptionWrapper>;

const template = (args: any) => <OptionWrapper {...args}>
    <div><Radio checked/><Label>Label</Label></div>
    <div><Radio /><Label>Label</Label></div>
    <div><Radio/><Label>Label</Label></div>
  </OptionWrapper>

export const Default: Story = {
  render: template,
};

export const Grid: Story = {
  args: {
    grid: true,
  },
  render: template,
};