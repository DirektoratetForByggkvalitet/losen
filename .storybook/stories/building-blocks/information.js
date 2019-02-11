import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Information text</H1>
      <P>Kinda like a text block but with an icon before the text and shown on the result page.</P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              an information text block, this property must be set 
              to <code>Information</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the information block</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>The information text to show.</td>
            <td></td>
          </tr>
          {common.show}
          {common.hide}
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "information",
  "type": "Information",
  "text": "Husk å fylle ut alle feltene!"
}`}</pre>
    </div>
  );
}
