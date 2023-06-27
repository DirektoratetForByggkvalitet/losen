import type { Meta, StoryObj } from '@storybook/react';
import { Lead } from 'losen/primitives/Paragraphs'; 

const meta: Meta<typeof Lead> = {
  component: Lead,
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof Lead>;


export const Default: Story = {
  args: {
    children: "Paragraph",
  },
};
