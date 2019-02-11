import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Table</H1>
      <P>
        Sometimes, the need for presenting complex information in the form of a matrix arise. 
        The <em>Table</em> features a way of visualizing multiple dimensions with dynamic state 
        that reacts to user wizard input through a dynamic structure and flexible tests to 
        mark cells as active/inactive.
      </P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a table, this property must be set to <code>Table</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the table</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>cells</code></td>
            <td>
              A two-dimensional array of rows/cols. The cols are table cells with
              properties for a cell. The structure looks like this 👇: 
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
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>
              A lead text for the table. If you need to, you can put HTML in here to 
              make links etc., but make sure that whatever you insert is valid HTML.
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
  "id": "possibleRoles",
  "text": "<p>Firmaet ditt kan ha følgende funksjoner i prosjektet:</p>",
  "type": "Table",
  "cells": [
    [
      {
        "id": "possibleRoles.function",
        "type": "Heading",
        "rowSpan": 2,
        "text": "FUNKSJON"
      },
      {
        "id": "possibleRoles.class",
        "type": "Heading",
        "colSpan": 3,
        "text": "TILTAKSKLASSE"
      }
    ],
    [
      {
        "id": "possibleRoles.class.1",
        "type": "Heading",
        "text": "Tiltaksklasse 1"
      },
      {
        "id": "possibleRoles.class.2",
        "type": "Heading",
        "text": "Tiltaksklasse 2"
      },
      {
        "id": "possibleRoles.class.3",
        "type": "Heading",
        "text": "Tiltaksklasse 3"
      }
    ],
    [
      {
        "id": "possibleRoles.applicant",
        "type": "Heading",
        "text": "Ansvarlig søker"
      },
      {
        "id": "possibleRoles.table.1+applicant",
        "type": "Cell",
        "rowSpan": 2,
        "text": "Mesterbrev/fagskole<br/>+ 4 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 2
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 4
            }
          ]
        }
      },
      {
        "id": "possibleRoles.table.2+applicant",
        "type": "Cell",
        "text": "Mesterbrev/fagskole<br/>+ 6 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 2
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 6
            }
          ]
        }
      },
      {
        "id": "possibleRoles.table.3+applicant",
        "type": "Cell",
        "rowSpan": 2,
        "text": "Universitetsnivå<br/>+ 8 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "eq",
              "value": 4
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 8
            }
          ]
        }
      }
    ],
    [
      {
        "id": "possibleRoles.table.projecting",
        "type": "Heading",
        "text": "Prosjekterende"
      },
      {
        "id": "possibleRoles.table.1+projecting",
        "type": "Cell",
        "text": "Høgskolenivå<br/>+ 6 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 3
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 6
            }
          ]
        }
      }
    ],
    [
      {
        "id": "possibleRoles.table.performing",
        "type": "Heading",
        "text": "Utførende"
      },
      {
        "id": "possibleRoles.table.1+performing",
        "type": "Cell",
        "text": "Fag-/svenneprøve<br/>+ 2 års erfaring",
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
        "id": "possibleRoles.table.2+performing",
        "type": "Cell",
        "text": "Mestebrev-/fagskole<br/>+ 3 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 2
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 3
            }
          ]
        }
      },
      {
        "id": "possibleRoles.table.3+performing",
        "type": "Cell",
        "text": "Høgskolenivå<br/>+ 5 års erfaring",
        "test": {
          "type": "and",
          "clauses": [
            {
              "field": "competence.education",
              "operator": "gte",
              "value": 3
            },
            {
              "field": "competence.experience",
              "operator": "gte",
              "value": 5
            }
          ]
        }
      }
    ]
  ]
}`}</pre>
    </div>
  );
}
