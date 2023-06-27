import type { Meta, StoryObj } from '@storybook/react';
import { Wizard } from 'losen/primitives/Wizard'; 

const meta: Meta<typeof Wizard> = {
  component: Wizard,
};

export default meta;
type Story = StoryObj<typeof Wizard>;

export const Default: Story = {
  render: () => <Wizard>
  <p>This is the main wrapper of the Wizard that apply general styling like <strong>bold</strong> and <a href="#">link styling</a> and such.</p>
</Wizard>
};
