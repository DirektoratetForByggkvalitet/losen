import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P, Lead } from '../../../src/web/primitives/Paragraphs';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>The schema building blocks</H1>
      <H2>Shared requirements</H2>
      <P>
        <em>Note:</em> these shared fields won't be repeated below.
      </P>
      <ul>
        <li>
          <code>type</code>: The only property that is shared across <strong>all</strong> nodes in the
          schema. The type is required in order to determine what type of node it is.
        </li>
        <li>
          <code>id</code>: Needed in order to map texts passed as the value for the translation prop
          to the Wizard component.
        </li>
        <li>
          <code>summary</code>: Optional part of every block and is a set with the details attribute.
          If you want a expand collapse element that can provide more information use these two
          properties.
        </li>
        <li>
          <code>details</code>: Accepts html code. Se comment for <code>summary</code>.
        </li>
        <li>
          Also, the <code>hide</code> and <code>show</code> properties is available for all input and
          output types, as well as Select/Checkbox/Radio options. The properties are logical
          expressions used to determine if the item in question should be shown or not.
        </li>
      </ul>

      <H2>Output types</H2>
      <P>Nodes that exist to present information and don't feature user input</P>

      <H3>Table</H3>
      <P>
        Sometimes, the need for presenting complex information in the form of a matrix arise. The{' '}
        <em>Table</em> features a way of visualizing multiple dimensions with dynamic state that
        reacts to user wizard input through a dynamic structure and flexible tests to mark cells as
        active/inactive.
      </P>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>cells</code>: A two-dimensional array of rows/cols. The cols are table cells with
          properties for a cell. The structure looks like this 👇. <strong>Required</strong>
          <pre>{`[
  [
    {
      // Possible types: Heading (th) and Cell (td) - REQUIRED
      type: 'Heading',

      // How many columns this cell spans
      colspan: 2,

      // How many rows this cell spans
      rowspan: 2,

      // The text in the cell. HTML is ok - REQUIRED
      text: 'Something interesting<br/>in this cell',

      // DSL expression used to determine if this cell is active
      test: { field: 'property.to.test', operator: 'gt', value: 2 }
    },
    {...}
  ],
  [...]
]`}</pre>
        </li>
      </ul>

      <H3>Summary</H3>
      <P>A summary of all input and errors in the wizard</P>

      <H3>Information</H3>
      <P>
        Kinda like a text block but it has a nice icon before the text and it is dispalyed on the
        result page.
      </P>

      <H3>Signature</H3>
      <P>A nice signature line for documents that should be signed.</P>

      <H3>Error</H3>
      <P>A textblock that looks like a error message</P>
      <H4>Properties</H4>
      <ul>
        <li>
          <code>warning</code>: Mark the text block as a warning and will display it on the result
          page. Default: false
        </li>
      </ul>
    </div>
  );
}
