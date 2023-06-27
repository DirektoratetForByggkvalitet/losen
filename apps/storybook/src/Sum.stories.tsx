import type { Meta, StoryObj } from '@storybook/react';
import StyledSum from 'losen/primitives/Sum';

const meta: Meta<typeof StyledSum> = {
  component: StyledSum,
  argTypes: {
    groupedSimple: { control: 'boolean' },
    type: { control: 'select', options: ['happy', 'sad', undefined]},
  },
};

export default meta;
type Story = StoryObj<typeof StyledSum>;

const template = (args: any) => <StyledSum {...args}>
    <div>
      Caption
      <span className={args.type}>
        42
      </span>
    </div>
  </StyledSum>

export const Default: Story = {
  render: template,
};