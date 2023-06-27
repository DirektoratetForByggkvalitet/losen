import type { Meta, StoryObj } from '@storybook/react';
import Figure from 'losen/primitives/Figure'; 

const meta: Meta<typeof Figure> = {
  component: Figure,
};

export default meta;
type Story = StoryObj<typeof Figure>;

export const Default: Story = {
  render: () => <Figure><img src="mikrohus.png" alt="Textalternative"/><figcaption>Figure caption</figcaption></Figure>,
};
