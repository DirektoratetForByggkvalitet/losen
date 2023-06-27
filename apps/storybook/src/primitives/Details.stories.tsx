import type { Meta, StoryObj } from '@storybook/react';
import { Details, Summary } from 'losen/primitives/Details'; 

const meta: Meta<typeof Details> = {
  component: Details,
};

export default meta;
type Story = StoryObj<typeof Details>;


export const Default: Story = {
  render: () => <Details>
    <Summary>See examples</Summary>
    <div>
    <h3>An example</h3>
    <p>Omnium prompta placerat in sed. Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
    <h3>Another example</h3>
    <p>Omnium prompta placerat in sed. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
    <h3>A different example</h3>
    <p>Cum no congue tamquam iracundia. Oporteat periculis instructior est in, vis habeo reprimique ei.</p>
    </div>
  </Details>,
};
