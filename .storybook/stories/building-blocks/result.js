import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P, Lead } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table';
import { thead, show, hide } from './common'

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Result</H1>
      <P>
        The result page represents the end of a wizard. Once the algorithm encounters a Result page,
        it will be appended after the page it's included as a child in, and no more pages will be
        shown. This is intentional as it gives an opening for short-circuiting the wizard once the
        user answer in such a way that no further input is necessary in order to give feedback,
        either positive or negative.
      </P>
      
      <H2>Properties</H2>
      <Table>
        {thead}
        <tr>
          <td><code>type</code></td>
          <td>
            The type is required in order to determine what type of node it is. For 
            a result page, this property must be set to <code>Result</code>.
          </td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><code>id</code></td>
          <td>The id of the result page.</td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><code>heading</code></td>
          <td>
            The heading of the page. <strong>Required</strong> Can either be a simple 
            string, or an object if you want different heading depending on whether or not the wizard
            is completed and if it has errors. If you an object, it must have the following structure:
            <pre>{`{
  "complete": "Done 🌈", 
  "completeWithError": "Done, but with errors",
  "incomplete": "Not done yet, but so far so good 🙏",
  "incompleteWithError": "Not done, no good"
}`}</pre>
          </td>
          <td>Yes</td>
        </tr>
        <tr>
          <td><code>lead</code></td>
          <td>
            A subtitle or lead text for the page. Can be either a string or an object,
            just like the heading. See description of heading for explanation, the lead property works
            the same way and expects the same object structure.
          </td>
          <td></td>
        </tr>
        <tr>
          <td><code>exporter</code></td>
          <td>
            Which exporter to use. Refers to the exports object prop passed to
            the Wizard component.
          </td>
          <td></td>
        </tr>
        <tr>
          <td><code>children</code></td>
          <td>
            An array of nodes to show for this result page. The nodes can be of
            any type except <code>Page</code> and <code>Result</code>.
          </td>
          <td></td>
        </tr>
        {show}
        {hide}
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "hooray",
  "type": "Result",
  "exporter": "dataExport",
  "heading": {
    "complete": "Hurra - du kan ha katt 🌈",
    "completeWithError": "Feil - rett opp svarene dine",
    "incomplete": "Feil - du har ikke svart på alt",
    "incompleteWithError": "Feil - rett opp svarene dine og svar på alt"
  },
  "lead": {
    "complete": "Les nøye gjennom svarene dine, og sjekk at alt stemmer før du tar med deg resultatene til ditt nærmeste adopsjonssenter for katter. Husk at du vil bli stilt til ansvar for at katten får det bra hos deg!",
    "completeWithError": "Du kan ikke ha katt :( Se feilene dine under.",
    "incomplete": "Vi kan ikke gi deg et råd med mindre du svarer på alle spørsmålene.",
    "incompleteWithError": "Du kan ikke ha katt :( Se feil og manglende svar under."
  }
}`}</pre>
    </div>
  );
}
