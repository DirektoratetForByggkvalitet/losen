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

      <H2>Input types</H2>
      <P>
        In addition to the <em>Page</em> and <em>Result</em> nodes we have several input nodes that
        can be used to collect input from the user. The property called <code>property</code> on the
        node declares the path to the value for this node in the data.
      </P>

      <H3>Shared properties</H3>
      <P>
        <em>Note:</em> these properties apply for all input nodes, and won't be repeated below.
      </P>

      <ul>
        <li>
          <code>property</code>: The path to where the value for this node is stored in the data
          object. <strong>Required</strong>
        </li>
        <li>
          <code>heading</code>: The label for this input field. <strong>Required</strong>
        </li>
        <li>
          <code>validator</code>: An object containing two properties: <code>test</code>; a logical
          expression that must evaluate to a true in order for the field to be available. If the
          test evaluates to a falsy value, the field will still show, but it will be disabled and a
          message will explain what prerequisites has not been met. The message is defined with the
          <code>error</code> property in the validator object.
        </li>
        <li>
          <code>optional</code>: Mark input as optional. By default all fields are required.
        </li>
      </ul>

      <H3>Message</H3>
      <P>
        Message for <code>Answer</code> that is shown if test is truthy.
      </P>

      <H4>Property</H4>
      <ul>
        <li>
          <code>text</code>: Message to show on the Answer node. <strong>Required</strong>
        </li>
        <li>
          <code>warning</code>: Boolean indicating whether or not this is a warning. By default
          messages are not warnings
        </li>
        <li>
          <code>test</code>: A logical test used to determine whether or not to show this message
        </li>
      </ul>

      <H3>Sum</H3>
      <P>A block that shows the sum of an expression</P>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>values</code>: An array of the ids to the elements you want to sum. Default
          operation is +.
        </li>
        <li>
          <code>operations</code>: An array of operations to be used. First operation is between 0
          and the first element so usually true. Then the operation for the next elements.
        </li>
        <li>
          <code>unit</code>: Text appended after the value
        </li>
        <li>
          <code>minimum</code>: If you want it to have a minimum set this value.
        </li>
      </ul>

      <H3>Evaulation</H3>
      <P>
        A block that shows different information given an expression. It can be used with one value
        and shows sad stat if that value is less than 0 or otherwise happy state. Can also compare
        two numbers
      </P>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>testing</code>: The id of the element you want to evaluate or an array of the two
          elements you want to evaulate.
        </li>
        <li>
          <code>showValue</code>: Boolean value for if the number should be shown. Only shows
          absoulte values.
        </li>
        <li>
          <code>sad</code>: The text string to be used when sad state
        </li>
        <li>
          <code>happy</code>: The text string to be used when happy state
        </li>
        <li>
          <code>unit</code>: Text appended after the value
        </li>
      </ul>

      <hr />

      <H2>Output types</H2>
      <P>Nodes that exist to present information and don't feature user input</P>

      <H3>Image</H3>
      <P>An image.</P>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>text</code>: Additional description that follows the heading for the answer.
        </li>
        <li>
          <code>image</code>: Image to show with description. If a values is passed, the following
          structure is expected:
          <pre>{`{
  url: 'https://url.to/image.jpg',
  alt: 'alternative text'
}`}</pre>
          <strong>Required</strong>
        </li>
      </ul>

      <H3>Text</H3>
      <P>A block of text</P>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>text</code>: Additional description that follows the heading for the answer.{' '}
          <strong>Required</strong>
        </li>
        <li>
          <code>warning</code>: Mark the text block as a warning. Default: false
        </li>
      </ul>

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

      <H3>ErrorOk</H3>
      <P>
        Just like the error block but with a different look. We should look into refacotring but to
        do that we need to figure out how we want these to really work.
      </P>
    </div>
  );
}
