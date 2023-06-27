import type { Meta, StoryObj } from '@storybook/react';
import Html from 'losen/primitives/Html'; 

const meta: Meta<typeof Html> = {
  component: Html,
  argTypes: {
    inline: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Html>;

const template = () => <Html>
    <h3>Heading 3</h3>
    <p>This is a paragraph.</p>
    <h3>Heading 4</h3>
    <p>This is a paragraph.</p>
    <ul>
      <li>Unordered list item</li>
      <li>Unordered list item</li>
      <li>Unordered list item</li>
    </ul>
    <p>This is a paragraph.</p>
    <ol>
      <li>Ordered list item</li>
      <li>Ordered list item</li>
      <li>Ordered list item</li>
    </ol>
    <table>
      <tr><th>Table header</th><th>Table header</th><th>Table header</th></tr>
      <tr><td>Table data</td><td>Table data</td><td>Table data</td></tr>
      <tr><td>Table data</td><td>Table data</td><td>Table data</td></tr>
    </table>
  </Html>

export const Default: Story = {
  render: template,
};

export const Inline: Story = {
  args: {
    inline: true,
  },
  render: template,
};
