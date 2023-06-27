import type { Meta, StoryObj } from '@storybook/react';
import { NodeSummary } from 'losen/primitives/Summary';

const meta: Meta<typeof NodeSummary> = {
  component: NodeSummary,
  argTypes: {
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof NodeSummary>;

const template = (args: any) => <NodeSummary {...args}>
    <h3>Heading 3</h3>
    <p>This is a paragraph.</p>
  </NodeSummary>

export const Default: Story = {
  render: template,
};