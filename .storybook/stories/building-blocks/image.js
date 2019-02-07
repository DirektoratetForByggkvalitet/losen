import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

import radioProperties from './radio';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Image</H1>
      <P>An image.</P>

      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              an image, this property must be set to <code>Image</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the image</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>image</code></td>
            <td>
              Image to show with description, represented as an object with two 
              properties: <code>url</code> and <code>alt</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>text</code></td>
            <td>Additional description that follows the image.</td>
            <td></td>
          </tr>
          {common.show}
          {common.hide}
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "cat.image",
  "type": "Image",
  "text": "Dette er en bildeblokk",
  "image": {
    "url": "//media.giphy.com/media/vFKqnCdLPNOKc/giphy.gif",
    "alt": "alt for image"
  }
}`}</pre>
    </div>
  );
}
