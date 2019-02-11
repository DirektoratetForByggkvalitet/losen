import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Evaulation - <em>deprecated</em></H1>
      <P>
        A block that shows different information given an expression. It can be used with one value
        and shows sad stat if that value is less than 0 or otherwise happy state. Can also compare
        two numbers
      </P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              an evaluation node, this property must be set to <code>Evaluation</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the evaluation node</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>testing</code></td>
            <td>
              The id of the element you want to evaluate or an array of the two
              elements you want to evaulate.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>sad</code></td>
            <td>The text string to be used when sad state</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>happy</code></td>
            <td>The text string to be used when happy state</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>showValue</code></td>
            <td>
              Boolean value for if the number should be shown. Only shows
              absoulte values.
            </td>
          </tr>
          <tr>
            <td><code>unit</code></td>
            <td>Text appended after the value</td>
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
  "id": "evalish",
  "type": "Evaluation",
  "testing": ["utnyttingsgrad", "planArea2"],
  "sad": "Du planlegger å bygge mer enn det som er tillatt på eiendommen din.",
  "happy": "Du er innenfor det som er tillatt å bygge på eiendommen din.",
  "optional": true
}`}</pre>
    </div>
  );
}
