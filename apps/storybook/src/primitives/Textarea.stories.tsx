import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from 'losen/primitives/Input'; 

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Textarea>;


export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    disabled: false
  },
  render: (args) => <Textarea {...args} />,
};
