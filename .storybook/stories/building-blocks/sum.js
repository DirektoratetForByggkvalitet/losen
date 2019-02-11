import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Sum</H1>
      <P>A block that shows the sum of an expression. Make sure to have the same number of operations and values.</P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a sum, this property must be set to <code>Sum</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the sum</td>
            <td>Yes</td>
          </tr>
          {common.heading}
          <tr>
            <td><code>values</code></td>
            <td>
              An array of the ids to the elements you want to sum. Default
              operation is +.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>operations</code></td>
            <td>
              An array of operations to be used. First operation is between 0
              and the first element so usually +. If no operations is specified,
              all the values will be added together.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>unit</code></td>
            <td>Text appended after the value</td>
            <td></td>
          </tr>
          <tr>
            <td><code>minimum</code></td>
            <td>If you want it to have a minimum set this value.</td>
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
  "id": "parkeringssum",
  "property": "parkeringssum",
  "type": "Sum",
  "values": [
    "requiredParkingSpots",
    "numberOfParkinglotsInCarport",
    "parkingPlaceArea"
  ],
  "operations": ["+", "-", "*"],
  "minimum": 0,
  "optional": true,
  "heading": "Nødvendig parkeringsareal på terreng:",
  "unit": "m<sup>2</sup>"
}`}</pre>
    </div>
  );
}
