import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Answer</H1>
      <P>Answer used as an option in Radio, Checkbox or Select</P>
      
      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For
              an answer, this property must be set to <code>Answer</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the answer input</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>heading</code></td>
            <td>The title for the option.</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>value</code></td>
            <td>Option value. What is set in the data object, not visible to the user.</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>Additional description that follows the heading for the answer.</td>
            <td></td>
          </tr>
          <tr>
            <td><code>image</code></td>
            <td>
              Image to show with description. If a values is passed, the following
              structure is expected:
              <pre>{`{
  url: 'https://url.to/image.jpg',
  alt: 'alternative text'
}`}</pre>
            </td>
            <td></td>
          </tr>
          <tr>
            <td><code>messages</code></td>
            <td>
              Array of <a href="/?selectedKind=The%20building%20blocks&selectedStory=Message"><code>Message</code></a> nodes 
              that can show on an Answer. The first message with either no test, or a test that yields a truthy value will 
              be returned. No more than one message will be rendered.
            </td>
            <td></td>
          </tr>
          {common.show}
          {common.hide}
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "living.floor.1",
  "type": "Answer",
  "heading": "78",
  "value": "78",
  "show": {
    "field": "hasClimbingHarness",
    "operator": "required",
  },
  "messages": [
    {
      "message": "Du bør ikke klatre opp til 78. etasje uten klatresele, altså.. 😱",
      "test": {
        "field": "hasClimbingHarness",
        "operator": "eq",
        "value": true
      }
    },
}`}</pre>
    </div>
  );
}
