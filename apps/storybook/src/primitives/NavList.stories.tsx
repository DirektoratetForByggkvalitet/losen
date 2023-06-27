import type { Meta, StoryObj } from '@storybook/react';
import { NavList } from 'losen/primitives/Grid';
import NavItem from 'losen/components/NavItem';

const meta: Meta<typeof NavList> = {
  component: NavList,
};

export default meta;
type Story = StoryObj<typeof NavList>;

export const Default: Story = {
  render: () => <NavList>
    <li>
      <NavItem
        key={1}
        id="1"
        index={1}
        heading="Page"
        setPage={() => { }}
        done
      />
    </li>
    <li>
      <NavItem
        key={2}
        id="2"
        index={2}
        heading="Page"
        setPage={() => { }}
        active
      />
    </li>
    <li>
      <NavItem
        key={3}
        id="3"
        index={3}
        heading="Page"
        setPage={() => { }}
      />
    </li>
    <li>
      <NavItem
        key={4}
        id="4"
        index={4}
        heading="Page"
        setPage={() => { }}
      />
    </li>
  </NavList>
};
