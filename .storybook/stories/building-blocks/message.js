import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Message</H1>
      <P>
        Message for <code>Answer</code> node that is shown if 
        test is truthy or not specified.
      </P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>message</code></td>
            <td>Message to show on the Answer node.</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>test</code></td>
            <td>A logical test used to determine whether or not to show this message</td>
            <td></td>
          </tr>
          <tr>
            <td><code>warning</code></td>
            <td>
              Boolean indicating whether or not this is a warning. By default
              messages are not warnings
            </td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "type": "Radio",
  ...
  "options": [
    {
      "type": "Answer",
      ...
      "messages": [
        {
          "message": "Firmaet ditt har tilstrekkelig kompetanse",
          "test": {
            "type": "and",
            "clauses": [
              {
                "field": "competence.education",
                "operator": "gte",
                "value": 1
              },
              {
                "field": "competence.experience",
                "operator": "gte",
                "value": 2
              }
            ]
          }
        },
        {
          "message": "Krever fag-/svenneprøve og minst to års erfaring",
          "warning": true,
          "test": {
            "type": "or",
            "clauses": [
              {
                "field": "competence.education",
                "operator": "gte",
                "value": 1
              },
              {
                "field": "competence.experience",
                "operator": "required"
              }
            ]
          }
        }
      ]
    },
    ...
  ]
}`}</pre>
    </div>
  );
}
