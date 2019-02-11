import React from 'react';

import { H1, H2 } from '../../../src/web/primitives/Heading';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

export default function SchemaBranching() {
  return (
    <div>
      <H1>Branch</H1>
      <p>
        In order to build a wizard you often need to be able to branch based on
        user input. The <code>Branch</code> node gives you this posibility, as
        described briefly in <em>Getting started</em> section, where the schema
        is shown in an example.
      </p>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a branch node, this property must be set to <code>Branch</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>branches</code></td>
            <td>
              An array of objects containing a test, and list of nodes to show if the
              test passes. Should follow this structure: <pre>{`[
  {
    test: { field: 'continue', operator: 'eq', value: true },
    children: [
      // nodes to show
    ]
  },
  ...
]`}</pre>
            </td>
            <td>Yes</td>
          </tr>
          {common.show}
          {common.hide}
        </tbody>
      </Table>
      <br/>

      <H2>Key concepts</H2>
      <ul>
        <li>The tests decide which branch will be shown</li>
        <li>The first branch test that returns a truthy value will be used</li>
        <li>One or no branches will be selected</li>
      </ul>

      <H2>Branching anatomy</H2>
      <p>
        A <em>Branch</em> node is not represented in the user interface, and the
        user will never have to deal with the branching itself. It's an
        implementation detail in the algorithm. As a consequence of this, the
        branch has no text, heading or any other properties than{' '}
        <code>branches</code>.
      </p>

      <H2>Example</H2>
      <pre>{`{
  type: 'Branch',
  branches: [
    {
      test: { field: 'continue', operator: 'eq', value: true },
      children: [
        // ...nodes for when the user continues
      ]
    },
    {
      test: { field: 'continue', operator: 'neq', value: true },
      children: [
        // ...nodes for when the user choose not to continue
      ]
    }
  ]
}`}</pre>

      <H2>The test</H2>
      <p>
        The test is described in a structured format that allows for describing
        most logical expressions and that features a way of referencing data
        from fields in the schema. This will be referred to as the <em>DSL</em>{' '}
        - short for Domain Specific Language.
      </p>
      <p>
        The DSL is described in greater detail in a separate section of the
        documentation.
      </p>
    </div>
  );
}
