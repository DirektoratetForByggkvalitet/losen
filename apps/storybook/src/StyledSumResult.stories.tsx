import type { Meta, StoryObj } from '@storybook/react';
import StyledSumResult from 'losen/primitives/SumResult';

const meta: Meta<typeof StyledSumResult> = {
  component: StyledSumResult,
  argTypes: {
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof StyledSumResult>;

const template = (args: any) => <StyledSumResult {...args}>
    <p>Result</p>
    <p className="happy">Happy</p>
    <p className="sad">Happy</p>
  </StyledSumResult>

export const Default: Story = {
  render: template,
};