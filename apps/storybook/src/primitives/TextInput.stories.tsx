import type { Meta, StoryObj } from '@storybook/react';
import { TextInput } from 'losen/primitives/Input'; 

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;


export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    disabled: false
  },
  render: (args) => <TextInput {...args} />,
};
