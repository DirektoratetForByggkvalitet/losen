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
      <P>A block of text</P>

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
  "id": "cat.information",
  "property": "cat.information",
  "type": "Text",
  "heading": "Et lite notis med tekst",
  "text": "Cat ipsum dolor sit amet, always hungry man running from cops stops to <a href=\"somewhere\">pet cats</a>, goes to jail step on your keyboard while you're gaming and then turn in a circle . Pose purrfectly to show my beauty woops poop hanging from butt must get rid run run around house drag poop on floor maybe it comes off woops left brown marks on floor human slave clean. Lick butt, next to <a href=\"somewhere\">human slave food dispenser</a>."
}`}</pre>
    </div>
  );
}
