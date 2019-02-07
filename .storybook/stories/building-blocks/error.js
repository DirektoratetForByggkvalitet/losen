import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Text</H1>
      <P>
        An error, consisting of one or more <code>Text</code> and{' '}
        <code>Image</code> nodes.
      </P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a text block, this property must be set to <code>Text</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the text block</td>
            <td>Yes</td>
          </tr>
          {common.heading}
          <tr>
            <td><code>text</code></td>
            <td>The text. If you need to, you can put HTML in here to make links etc., but make sure that whatever you insert is valid HTML.</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>warning</code></td>
            <td>Indicate that this is an warning/error message.</td>
            <td></td>
          </tr>
          {common.show}
          {common.hide}
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "applymunicipality",
  "property": "applymunicipality",
  "type": "Error",
  "simple": true,
  "children": [
    {
      "id": "insufficientCompentency",
      "type": "Text",
      "warning": true,
      "heading":
        "Firmaet ditt har ikke tilstrekkelig kompetanse til å gjøre jobben"
    },
    {
      "id": "failedButCanGoOn",
      "type": "Text",
      "text":
        "<p>Du kan fortsatt gå videre i veiviseren, men du vil ikke kunne erklære ansvar for arbeidet som skal gjøres. Vil du vite mer om kravene? <a href=\"https://dibk.no/byggeregler/sak/3/11/11-3/\">Les mer om krav til utdanning og praksis på DiBKs nettsider.</a></p>"
    }
  ]
}`}</pre>
    </div>
  );
}
