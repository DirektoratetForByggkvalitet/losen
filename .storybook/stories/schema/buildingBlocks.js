import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>The schema building blocks</H1>
      <H2>Shared requirements</H2>
      <p>
        <em>Note:</em> these shared fields won't be repeated below.
      </p>

      <p>
        <code>type</code>: The only property that is shared across <strong>all</strong> nodes in the
        schema. The type is required in order to determine what type of node it is.
      </p>
      <p>
        <code>id</code>: Needed in order to map texts passed as the value for the translation prop
        to the Wizard component.
      </p>
      <p>
        Also, the <code>hidden</code> property is available for all input and output types, as well
        as Select/Checkbox/Radio options. The hidden property is a logical expression used to
        determine whether or not to hide the item in question.
      </p>

      <H2>Page</H2>
      <p>
        The <em>Page</em> is the largest building block. Sort of a container for everything else.
        Inside a page you can have pretty much anything, but not a Page. Nested pages is not
        supported.
      </p>
      <H3>Properties</H3>
      <ul>
        <li>
          <code>title</code>: The title of the page. <strong>Required</strong>
        </li>
        <li>
          <code>lead</code>: A subtitle or lead text for the page. <strong>Required</strong>
        </li>
        <li>
          <code>children</code>: An array of nodes to show for this page. The nodes can be of any
          type except
          <em>Page</em>. <strong>Required</strong>
        </li>
      </ul>

      <H2>Result</H2>
      <p>
        The result page represents the end of a wizard. Once the algorithm encounters a Result page,
        it will be appended after the page it's included as a child in, and no more pages will be
        shown. This is intentional as it gives an opening for short-circuiting the wizard once the
        user answer in such a way that no further input is necessary in order to give feedback,
        either positive or negative.
      </p>
      <H3>Properties</H3>
      <ul>
        <li>
          <code>title</code>: The title of the page. <strong>Required</strong>
        </li>
        <li>
          <code>lead</code>: A subtitle or lead text for the page.
        </li>
        <li>
          <code>exporter</code>: Which exporter to use. Refers to the exports object prop passed to
          the Wizard component.
        </li>
        <li>
          <code>children</code>: An array of nodes to show for this result page. The nodes can be of
          any type except
          <em>Page</em> and <em>Result</em>.
        </li>
        <li>
          <code>disableErrorPage</code>: Disable the error page that by default shows when the
          wizard has not been completed. Default: false
        </li>
      </ul>

      <H2>Group</H2>
      <p>
        The group node gives you a way of grouping nodes on a page. It does "nothing" besides
        grouping other nodes.
      </p>

      <H3>Properties</H3>
      <ul>
        <li>
          <code>heading</code>: The heading for the group.
        </li>
        <li>
          <code>text</code>: A description for the group to follow the <em>heading</em>
        </li>
        <li>
          <code>simple</code>: Show as a simple group, with less separation between blocks.
        </li>
        <li>
          <code>children</code>: An array of nodes. Any type except page. <strong>Required</strong>
        </li>
      </ul>

      <hr />

      <H2>Input types</H2>
      <p>
        In addition to the <em>Page</em> and <em>Result</em> nodes we have several input nodes that
        can be used to collect input from the user. The property called <code>property</code> on the
        node declares the path to the value for this node in the data.
      </p>

      <H3>Shared properties</H3>
      <p>
        <em>Note:</em> these properties apply for all input nodes, and won't be repeated below.
      </p>

      <ul>
        <li>
          <code>property</code>: The path to where the value for this node is stored in the data
          object. <strong>Required</strong>
        </li>
        <li>
          <code>heading</code>: The label for this input field. <strong>Required</strong>
        </li>
        <li>
          <code>test</code>: A logical test that must evaluate to a true in order for the field to
          be available. If the test evaluates to a falsy value, the field will still show, but it
          will be disabled and a message will explain what prerequisites has not been met.
        </li>
        <li>
          <code>optional</code>: Mark input as optional. By default all fields are required.
        </li>
      </ul>

      <H3>Answer</H3>
      <p>Answer used as an option in Radio, Checkbox or Select.</p>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>heading</code>: The title for the option. <strong>Required</strong>
        </li>
        <li>
          <code>text</code>: Additional description that follows the heading for the answer.
        </li>
        <li>
          <code>value</code>: Option value. What is set in the data object, not visible to the user.{' '}
          <strong>Required</strong>
        </li>
        <li>
          <code>image</code>: Image to show with description. If a values is passed, the following
          structure is expected:
          <pre>{`{
  url: 'https://url.to/image.jpg',
  alt: 'alternative text'
}`}</pre>
        </li>
        <li>
          <code>messages</code>: Array of <code>Message</code> nodes that can show on an Answer. The
          first message with either no test, or a test that yields a truthy value will be returned.
          No more than one message will be rendered.
        </li>
      </ul>

      <H3>Message</H3>
      <p>
        Message for <code>Answer</code> that is shown if test is truthy.
      </p>

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

      <H3>Checkbox</H3>
      <p>The checkbox is a group of checkboxes. One or more values can be selected.</p>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>text</code>: The text to follow the heading for this input field.
        </li>
        <li>
          <code>options</code>: An array of <em>Answer</em> nodes. Options that the user can select.{' '}
          <strong>Required</strong>
        </li>
      </ul>

      <H3>Radio</H3>
      <p>
        Radio button group. Just like Checkbox, but only possible to select one. Properties are the
        same.
      </p>

      <H3>Select</H3>
      <p>
        Dropdown list. Just like Radio, but with a select element and no support for
        image/descriptive text. <code>Answer</code> nodes for a select will not show the{' '}
        <code>text</code>, so
      </p>

      <H3>Input</H3>
      <p>Regular text input field.</p>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>text</code>: The text to follow the heading for this input field.
        </li>
        <li>
          <code>placeholder</code>: Placeholder shown before the user inputs a value.
        </li>
        <li>
          <code>validator</code>: Input validation. If a validator is provided, the following
          structure is expected:
          <pre>{`{
  pattern: '^\\d+(,\\d+)?$',
  error: 'Value should be on either one of these formats: 123 or 123,1239.'
}`}</pre>
        </li>
      </ul>

      <H3>Number</H3>
      <p>An input field which is a number.</p>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>minimum</code>: The minimum number in the feild. If you only want possitive values
          set minimum to <code>0</code>.
        </li>
        <li>
          <code>maximum</code>: The maximum number for the field.
        </li>
      </ul>

      <H3>TextArea</H3>
      <p>A multi-line input field.</p>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>information</code>: A notice that shows below the textarea.
        </li>
      </ul>

      <hr />

      <H2>Output types</H2>
      <p>Nodes that exist to present information and don't feature user input</p>

      <H3>Image</H3>
      <p>An image.</p>

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
      <p>A block of text</p>

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
      <p>
        Sometimes, the need for presenting complex information in the form of a matrix arise. The{' '}
        <em>Table</em> features a way of visualizing multiple dimensions with dynamic state that
        reacts to user wizard input through a dynamic structure and flexible tests to mark cells as
        active/inactive.
      </p>

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

      <H4>Summary</H4>
      <p>A summary of all input and errors in the wizard</p>
    </div>
  );
}
