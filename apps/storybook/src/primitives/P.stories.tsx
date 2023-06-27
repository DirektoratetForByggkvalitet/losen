import type { Meta, StoryObj } from '@storybook/react';
import { P } from 'losen/primitives/Paragraphs'; 

const meta: Meta<typeof P> = {
  component: P,
  argTypes: {
    children: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof P>;


export const Default: Story = {
  args: {
    children: "Paragraph",
  },
};
