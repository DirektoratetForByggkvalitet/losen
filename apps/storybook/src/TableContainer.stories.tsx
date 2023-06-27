import type { Meta, StoryObj } from '@storybook/react';
import { Table, TD } from 'losen/primitives/Table';
import TableContainer from 'losen/primitives/TableContainer';

const meta: Meta<typeof Table> = {
  component: Table,
  argTypes: {
    simple: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Table>;

const template = (args: any) => <TableContainer {...args}><Table>
    <tr><TD>Table header</TD><TD>Table header</TD><TD>Table header</TD></tr>
    <tr><TD>Table data</TD><TD>Table data</TD><TD>Table data</TD></tr>
    <tr><TD>Table data</TD><TD>Table data</TD><TD>Table data</TD></tr>
  </Table></TableContainer>

export const Default: Story = {
  render: template,
};