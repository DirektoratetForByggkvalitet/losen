import type { Meta, StoryObj } from '@storybook/react';
import { SelectWrapper } from 'losen/primitives/Input'; 

const meta: Meta<typeof SelectWrapper> = {
  component: SelectWrapper,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof SelectWrapper>;


export const Default: Story = {
  args: {
    disabled: false
  },
  render: (args) => <SelectWrapper {...args}><select><option>Valg 1</option><option>Valg 2</option></select></SelectWrapper>,
};
