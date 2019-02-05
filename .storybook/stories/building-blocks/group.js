import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import { thead, show, hide } from './common';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Group</H1>
      <P>
        The group node gives you a way of grouping nodes on a page. It does "nothing" besides
        grouping other nodes.
      </P>

      <H2>Properties</H2>
      <Table>
        {thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a group, this property must be set to <code>Group</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the group</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>children</code></td>
            <td>Children to render inside this group</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>heading</code></td>
            <td>The heading for the group.</td>
            <td></td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>A description for the group to follow the <em>heading</em></td>
            <td></td>
          </tr>
          <tr>
            <td><code>simple</code></td>
            <td>Show as a simple group, with less separation between blocks.</td>
            <td></td>
          </tr>
          {show}
          {hide}
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "living.type.group",
  "property": "living.type.group",
  "type": "Group",
  "heading": "Boforhold",
  "text": "Din bosituasjon kan være avgjørende for hvilken katt du burde ha.",
  "children": [
    ...
  ]
}`}</pre>
    </div>
  );
}
