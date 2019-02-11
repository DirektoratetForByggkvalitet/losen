import React from 'react';

import { H1, H2, H3, H4 } from '../../../src/web/primitives/Heading';
import { P } from '../../../src/web/primitives/Paragraphs';
import { Table } from '../../../src/web/primitives/Table'
import * as common from './common';

export default function SchemaBuildingBlocks() {
  return (
    <div>
      <H1>Radio</H1>
      <P>A group of radio buttons. Like Checkbox, but only possible to select one.</P>
      
      <H2>Properties</H2>
      <Table>
        {common.thead}
        <tbody>
          <tr>
            <td><code>type</code></td>
            <td>
              The type is required in order to determine what type of node it is. For 
              a radio group, this property must be set to <code>Radio</code>.
            </td>
            <td>Yes</td>
          </tr>
          <tr>
            <td><code>id</code></td>
            <td>The id of the radio group</td>
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
          <tr>
            <td><code>grid</code></td>
            <td>Display options in a three column grid.</td>
            <td></td>
          </tr>
          <tr>
            <td><code>clear</code></td>
            <td>Array of properties to clear when the value for this radio input changes.</td>
            <td></td>
          </tr>
        </tbody>
      </Table>
      <br/>
      
      <H2>Example</H2>
      <pre>{`{
  "id": "example.cats",
  "property": "example.cats",
  "type": "Radio",
  "heading": "Hvilken av disse kattene foretrekker du?",
  "text": "<a href=\"//no.wikipedia.org/wiki/Kattefamilien\" target=\"_blank\">Les mer om katter</a>",
  "clear": ["example.costumes", "example.vehicle"],
  "options": [
    {
      "id": "katt1",
      "type": "Answer",
      "heading": "Kjempesøt 👶-katt",
      "text": "Denne katten er så liten at du kan ha den i lomma. Den er også kjempesøt og kjempeuskyldig. Det kan hende den bæsjer i senga di. Ingen vet hvor stor den blir, eller om den noensinne blir voksen.",
      "image": {
        "url": "//i.pinimg.com/736x/ba/03/23/ba03237a6d6499f0e2633314826e1526--cutest-animals-baby-animals.jpg",
        "alt": "alt for image"
      },
      "value": "katt1"
    },
    {
      "id": "katt2",
      "type": "Answer",
      "heading": "🌭-katt",
      "text": "Dette er en veldig sjelden katt. Bare 1 av 8000 katter er pølsekatter. De krever ekstra mye kos og omsorg fordi de blir tvunget til å ha på seg den teite drakta. Det er en stor forpliktelse å få en slik katt.",
      "image": {
        "url": "//i.pinimg.com/736x/ae/51/9e/ae519e2800991519b1041a539747e0d4--food-costumes-costume-ideas.jpg",
        "alt": "alt for image"
      },
      "value": "katt2"
    },
    {
      "id": "katt3",
      "type": "Answer",
      "heading": "Veldig 🤓 katt",
      "text": "Denne katten står bak hele denne veiviseren. Det er den smarteste katten i verden. Neida, vi bare tuller, katter kan jo ikke lage nettsider. Ennå, iallfall.",
      "image": {
        "url": "//lorempixel.com/156/156/cats",
        "alt": "alt for image"
      },
      "value": "katt3"
    }
  ]
}`}</pre>
    </div>
  );
}
