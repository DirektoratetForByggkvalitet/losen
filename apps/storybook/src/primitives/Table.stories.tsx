import type { Meta, StoryObj } from '@storybook/react';
import { Table, TD } from 'losen/primitives/Table';

const meta: Meta<typeof Table> = {
  component: Table,
};

export default meta;
type Story = StoryObj<typeof Table>;

const template = (args: any) => <Table {...args}>
    <tr><TD>Table header</TD><TD>Table header</TD><TD>Table header</TD></tr>
    <tr><TD>Table data</TD><TD>Table data</TD><TD>Table data</TD></tr>
    <tr><TD>Table data</TD><TD>Table data</TD><TD>Table data</TD></tr>
  </Table>

export const Default: Story = {
  render: template,
};