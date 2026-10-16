import type { Meta, StoryObj } from '@storybook/react';
import { SelectWrapper } from 'losen/primitives/Input'; 

const meta: Meta<typeof SelectWrapper> = {
  component: SelectWrapper,
};

export default meta;
type Story = StoryObj<typeof SelectWrapper>;


export const Default: Story = {
  render: (args) => <SelectWrapper {...args}><select><option>Valg 1</option><option>Valg 2</option></select></SelectWrapper>,
};

export const Disabled: Story = {
  render: (args) => <SelectWrapper {...args}><select disabled><option>Valg 1</option><option>Valg 2</option></select></SelectWrapper>,
};
