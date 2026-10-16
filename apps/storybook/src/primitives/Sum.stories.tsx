import type { Meta, StoryObj } from '@storybook/react';
import type { ComponentProps } from 'react';
import StyledSum from 'losen/primitives/Sum';

// `type` is a story-only arg, used as className on the value
type SumArgs = ComponentProps<typeof StyledSum> & { type?: 'happy' | 'sad' };

const meta: Meta<SumArgs> = {
  component: StyledSum,
  argTypes: {
    $groupedSimple: { control: 'boolean' },
    type: { control: 'select', options: ['happy', 'sad', undefined]},
  },
};

export default meta;
type Story = StoryObj<SumArgs>;

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