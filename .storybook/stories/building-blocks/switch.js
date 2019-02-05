import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Switch - <em>deprecated</em></H1>
      <P>
        The switch is a checkbox that can be used to change the value of other input types. It
        is used in the wizard "How big can you build?" ("Hvor stort kan du bygge") to reset the
        value for defined properties the selected options for this checkbox group changes.
      </P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a switch input, this property must be set to <code>Switch</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the switch input</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>options</code></td>
            <td>
              An array of <a href="/?selectedKind=The%20building%20blocks&selectedStory=Answer"><code>Answer</code></a> nodes. 
              Options that the user can select.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>update</code></td>
            <td>An array of the properties to unset when the selection is changed.</td>
            <td>Yes</td>
          </tr>
          {common.inputProperties}
          <tr>
            <td><code>text</code></td>
            <td>The text to follow the heading for this input field.</td>
            <td></td>
          </tr>
          {common.show}
          {common.hide}
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "noResidenceToggle",
  "property": "noResidenceToggle",
  "type": "Switch",
  "optional": true,
  "update": [
    "builtResidence",
    "builtGarage",
    "builtSmallBuilding",
    "builtOther"
  ],
  "options": [
    {
      "id": "noResidenceToggle.yes",
      "type": "Answer",
      "text": "Det er ingen bebyggelse på eiendommen",
      "value": "yes"
    }
  ]
}`}</pre>
    </div>
  );
}
