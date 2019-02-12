import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Number</H1>
      <P>An input field for numbers.</P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a number input, this property must be set to <code>Number</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the number input</td>
            <td>Yes</td>
          </tr>
          {common.inputProperties}
          <tr>
            <td><code>text</code></td>
            <td>The text to follow the heading for this input field.</td>
            <td></td>
          </tr>
          <tr>
            <td><code>minimum</code></td>
            <td>
              The minimum number in the feild. If you only want possitive values
              set minimum to <code>0</code>.
            </td>
            <td></td>
          </tr>
          <tr>
            <td><code>maximum</code></td>
            <td>The maximum number for the field.</td>
            <td></td>
          </tr>
          <tr>
            <td><code>step</code></td>
            <td>The increment in which the value can be adjusted</td>
            <td></td>
          </tr>
          {common.optional}
          {common.show}
          {common.hide}
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "living.gone",
  "property": "living.gone",
  "type": "Number",
  "heading": "Hvor mange timer er du borte fra hjemmet hver dag?",
  "placeholder": "Timer",
  "minimum": 0,
  "maximum": 24,
  "step": 1
}`}</pre>
    </div>
  );
}
