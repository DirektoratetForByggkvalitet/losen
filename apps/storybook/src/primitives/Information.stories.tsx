import type { Meta, StoryObj } from '@storybook/react';
import Information from 'losen/primitives/Information'; 
import InfoIcon from 'losen/components/graphics/InfoIcon'; 

const meta: Meta<typeof Information> = {
  component: Information,
};

export default meta;
type Story = StoryObj<typeof Information>;

export const Default: Story = {
  args: {
    children: 'Information',
  },
  render: ({ children }) => <Information><InfoIcon />{children}</Information>
};
