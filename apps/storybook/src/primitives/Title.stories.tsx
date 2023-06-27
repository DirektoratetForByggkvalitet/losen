import type { Meta, StoryObj } from '@storybook/react';
import { Title } from 'losen/primitives/Title'; 

const meta: Meta<typeof Title> = {
  component: Title,
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Title>;


export const Default: Story = {
  args: {
    children: "Title",
  },
};
