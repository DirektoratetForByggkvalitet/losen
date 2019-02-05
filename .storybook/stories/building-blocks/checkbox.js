import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Checkbox</H1>
      <P>A group of checkboxes. One or more values can be selected.</P>
      
      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a checkbox group, this property must be set to <code>Checkbox</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the checkbox group</td>
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
          {common.inputProperties}
          <tr>
            <td><code>text</code></td>
            <td>The text to follow the heading for this input field.</td>
            <td></td>
          </tr>
          {common.optionalInputProperties}
          <tr>
            <td><code>grid</code></td>
            <td>Display options in a three column grid.</td>
            <td></td>
          </tr>
          <tr>
            <td><code>allMandatory</code></td>
            <td>Required user to check all the options in the list, in order for it to be "valid".</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "preferences.predator",
  "property": "preferences.predator",
  "type": "Checkbox",
  "heading": "Trenger du en katt som kan fange ekle dyr i huset ditt?",
  "options": [
    {
      "id": "preferences.predator.edderkopp",
      "type": "Answer",
      "heading": "🕷",
      "value": "edderkopp"
    },
    {
      "id": "preferences.predator.mus",
      "type": "Answer",
      "heading": "🐁",
      "value": "mus",
      "disabled": {
        "field": "preferences.predator.edderkopp",
        "operator": "neq",
        "value": true
      }
    },
    {
      "id": "preferences.predator.fluer",
      "type": "Answer",
      "heading": "🦗",
      "value": "fluer"
    },
    {
      "id": "preferences.predator.rotter",
      "type": "Answer",
      "heading": "🐀",
      "value": "rotter"
    }
  ]
}`}</pre>
    </div>
  );
}
