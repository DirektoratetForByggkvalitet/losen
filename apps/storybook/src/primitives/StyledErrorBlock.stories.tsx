// Button.stories.ts|tsx

import type { Meta, StoryObj } from '@storybook/react';

import StyledErrorBlock from 'losen/primitives/ErrorBlock';
import InfoIcon from 'losen/components/graphics/InfoIcon';

const meta: Meta<typeof StyledErrorBlock> = {
  component: StyledErrorBlock,
  argTypes: {
    grouped: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof StyledErrorBlock>;

export const Default: Story = {
  args: {
    children: 'ErrorBlock',
  },
  render: ({ children }) => <StyledErrorBlock><div><InfoIcon />{children}</div></StyledErrorBlock>
};

export const Grouped: Story = {
  args: {
    children: 'ErrorBlock',
    grouped: true,
  },
};