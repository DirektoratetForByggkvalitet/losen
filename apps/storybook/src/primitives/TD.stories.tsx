import type { Meta, StoryObj } from '@storybook/react';
import { Table, TD } from 'losen/primitives/Table';

const meta: Meta<typeof TD> = {
  component: TD,
  argTypes: {
    $simple: { control: 'boolean' },
    "data-inactive": { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TD>;

const template = (args: any) => <Table>
    <tr><TD {...args}>Table data</TD></tr>
  </Table>

export const Default: Story = {
  render: template,
};
