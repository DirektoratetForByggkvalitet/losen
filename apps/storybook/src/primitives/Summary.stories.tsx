import type { Meta, StoryObj } from '@storybook/react';
import { PageSummary } from 'losen/primitives/Summary';

const meta: Meta<typeof PageSummary> = {
  component: PageSummary,
  argTypes: {
    error: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof PageSummary>;

const template = (args: any) => <PageSummary {...args}>
    <h2>Heading 2</h2>
    <p>This is a paragraph.</p>
    <button>Button</button>
  </PageSummary>

export const Default: Story = {
  render: template,
};