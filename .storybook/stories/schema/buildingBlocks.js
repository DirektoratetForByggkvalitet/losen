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

      <H2>Page</H2>
      <P>
        The <em>Page</em> is the largest building block. Sort of a container for everything else.
        Inside a page you can have pretty much anything, but not a Page. Nested pages is not
        supported.
      </P>
      <H3>Properties</H3>
      <ul>
        <li>
          <code>heading</code>: The heading of the page. <strong>Required</strong>
        </li>
        <li>
          <code>lead</code>: A subtitle or lead text for the page. <strong>Optional</strong>
        </li>
        <li>
          <code>children</code>: An array of nodes to show for this page. The nodes can be of any
          type except
          <em>Page</em>. <strong>Required</strong>
        </li>
      </ul>

      <H2>Result</H2>
      <P>
        The result page represents the end of a wizard. Once the algorithm encounters a Result page,
        it will be appended after the page it's included as a child in, and no more pages will be
        shown. This is intentional as it gives an opening for short-circuiting the wizard once the
        user answer in such a way that no further input is necessary in order to give feedback,
        either positive or negative.
      </P>
      <H3>Properties</H3>
      <ul>
        <li>
          <code>heading</code>: The heading of the page. <strong>Required</strong> Can either be a simple 
          string, or an object if you want different heading depending on whether or not the wizard
          is completed and if it has errors. If you an object, it must have the following structure:
          <pre>{`{
  "complete": "Done 🌈", 
  "completeWithError": "Done, but with errors",
  "incomplete": "Not done yet, but so far so good 🙏",
  "incompleteWithError": "Not done, no good"
}`}</pre>
        </li>
        <li>
          <code>lead</code>: A subtitle or lead text for the page. Can be either a string or an object,
          just like the heading. See description of heading for explanation, the lead property works
          the same way and expects the same object structure.
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
      <P>
        The group node gives you a way of grouping nodes on a page. It does "nothing" besides
        grouping other nodes.
      </P>

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

      <H3>Checkbox</H3>
      <P>A group of checkboxes. One or more values can be selected.</P>
      <H4>Properties</H4>
      <ul>
        <li>
          <code>text</code>: The text to follow the heading for this input field.
        </li>
        <li>
          <code>options</code>: An array of <em>Answer</em> nodes. Options that the user can select.
          <strong>Required</strong>
        </li>
        <li>
          <code>grid</code>: Display options in a three column grid.
        </li>
        <li>
          <code>allMandatory</code>: Whether or not the user is required to check all the options
          in the list, in order for it to be "valid". Boolean. Default: <code>false</code></li>
      </ul>

      <H3>Radio</H3>
      <P>
        A group of radio buttons. Just like Checkbox, but only possible to select one.
      </P>
      <H4>Properties</H4>
      <ul>
        <li>
          <code>text</code>: The text to follow the heading for this input field.
        </li>
        <li>
          <code>options</code>: An array of <em>Answer</em> nodes. Options that the user can select.
          <strong>Required</strong>
        </li>
        <li>
          <code>grid</code>: Display options in a three column grid.
        </li>
        <li>
          <code>clear</code>: Array of property names. Clears elements when you select a new value.
        </li>
      </ul>

      <H3>Select</H3>
      <P>
        Dropdown list. Just like Radio, but with a select element and no support for
        image/descriptive text. <code>Answer</code> nodes for a select will not show the{' '}
        <code>text</code>, so
      </P>

      <H3>Answer</H3>
      <P>Answer used as an option in Radio, Checkbox or Select.</P>

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

      <H3>Switch</H3>
      <P>
        The switch is a checkbox that can be used to change the value of other input types. It
        is used in the wizard "How big can you build?" ("Hvor stort kan du bygge") to set a default
        value to some input fields when this checkbox is switched on.
      </P>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>update</code>: An array of the id of the elements to update. Default value is 0.
        </li>
      </ul>

      <H3>Input</H3>
      <P>Regular text input field.</P>

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
      <P>An input field which is a number.</P>

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
      <P>A multi-line input field.</P>

      <H4>Properties</H4>
      <ul>
        <li>
          <code>information</code>: A notice that shows below the textarea.
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
