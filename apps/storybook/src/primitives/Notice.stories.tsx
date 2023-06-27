import type { Meta, StoryObj } from '@storybook/react';
import Notice from 'losen/primitives/Notice'; 

const meta: Meta<typeof Notice> = {
  component: Notice,
};

export default meta;
type Story = StoryObj<typeof Notice>;

export const Default: Story = {
  args: {
    children: 'Notice',
  },
};
