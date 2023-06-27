import type { Meta, StoryObj } from '@storybook/react';
import { NumberInput } from 'losen/primitives/Input'; 
import StyledHtml from 'losen/primitives/Html'; 

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof NumberInput>;


export const Default: Story = {
  args: {
    placeholder: "0",
    disabled: false
  },
  render: (args) => <><NumberInput {...args} /><StyledHtml inline>m²</StyledHtml></>,
};
