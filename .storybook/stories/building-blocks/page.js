import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P, Lead } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Page</H1>
      <P>
        The <em>Page</em> is the largest building block. Sort of a container for everything else.
        Inside a page you can have pretty much anything, but not a Page. Nested pages is not
        supported.
      </P>
      
      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tr>
          <td><code>type</code></td>
          <td>
            The type is required in order to determine what type of node it is. For 
            a page, this property must be set to <code>Page</code>.
          </td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><code>id</code></td>
          <td>The id of the page.</td>
          <td>Yes</td>
        </tr>
        {common.heading}
        <tr>
          <td><code>children</code></td>
          <td>
            An array of nodes to show for this page. The nodes can be of any
            type except <em>Page</em>.
          </td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><code>lead</code></td>
          <td>A subtitle or lead text for the page.</td>
          <td></td>
        </tr>
        {common.show}
        {common.hide}
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "relation",
  "type": "Page",
  "heading": "Forhold til katter",
  "lead": "Før vi bestemmer type katt må vi sjekke at du ikke er en slem kattehater.",
  "children": [
    ...
  ]
}`}</pre>
    </div>
  );
}
