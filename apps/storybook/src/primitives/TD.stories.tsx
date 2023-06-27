import type { Meta, StoryObj } from '@storybook/react';
import { Table, TD } from 'losen/primitives/Table';

const meta: Meta<typeof Table> = {
  component: Table,
  argTypes: {
    simple: { control: 'boolean' },
    "data-inactive": { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const template = (args: any) => <Table {...args}>
    <tr><TD {...args}>Table data</TD></tr>
  </Table>

export const Default: Story = {
  render: template,
};