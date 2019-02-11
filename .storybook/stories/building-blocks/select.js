import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Select</H1>
      <P>
        Dropdown list. Just like Radio, but with a select element and no support for
        image/descriptive text. <code>Answer</code> nodes for a select will not show the{' '}
        <code>text</code>, so make sure to put the text you need in the Answer heading.
      </P>
      
      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a select, this property must be set to <code>Select</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the select input</td>
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
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "living.floor",
  "property": "living.floor",
  "type": "Select",
  "heading": "I hvilken etasje bor du?",
  "text": "Hvis du bor veldig høyt oppe kan katten falle ned og dø.",
  "hide": {
    "type": "or",
    "clauses": [
      {
        "field": "living.type",
        "operator": "not"
      },
      {
        "field": "living.type",
        "operator": "eq",
        "value": "enebolig"
      }
    ]
  },
  "options": [
    {
      "id": "living.floor.1",
      "type": "Answer",
      "heading": "1",
      "value": "1"
    },
    {
      "id": "living.floor.2",
      "type": "Answer",
      "heading": "2",
      "value": "2"
    },
    {
      "id": "living.floor.3",
      "type": "Answer",
      "heading": "3",
      "value": "3"
    }
  ]
}`}</pre>
    </div>
  );
}
