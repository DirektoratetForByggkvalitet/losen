import React from 'react';

import { H1, H2, H3 } from '../../../src/web/primitives/Heading';
import JSONPretty from '../../../node_modules/react-json-pretty';

const listStyle = {
  'list-style-type': 'decimal',
};

const imageStyle = {
  width: '100%',
  'max-width': '300px;',
};

export default function ExamplesError() {
  return (
    <div>
      <H1>Display an error after a question with same error on result page.</H1>

      <p>
        If the users question is disqualifying, you may warn them before navigating to the result
        page. Like this:
      </p>
      <img
        style={imageStyle}
        src="https://serving.photos.photobox.com/775358245bb8b571dc9ac64b8e6635f136f95063bf22a1cf57eab54cf81bf2240904f43c.jpg"
      />

      <p>And see the same error tied to the result page, like this:</p>
      <img
        style={imageStyle}
        src="https://serving.photos.photobox.com/25760412f71bc791d619b2cb7494631eaa35894372705dc4d01e6c043b13b8c52e47b726.jpg"
      />

      <H2>In total, you need:</H2>
      <ul style={listStyle}>
        <li>A question (i.e: Radio with Answer's)</li>
        <li>An error (with Text inside)</li>
        <li>A result page</li>
      </ul>
      <JSONPretty
        id="json-pretty"
        json={[
          {
            id: 'bebygd',
            property: 'bebygd',
            type: 'Radio',
            heading: 'Er eiendommen bebygd?',
            text:
              '<p>Eiendommen din er bebygd hvis det for eksempel er et bolighus eller en hytte på eiendommen fra før.</p>',
            hide: {
              field: 'hvaSkalDuBygge',
              operator: 'not',
            },
            options: [
              {
                id: 'bebygd.ja',
                type: 'Answer',
                heading: 'Ja, eiendommen er bebygd.',
                value: 'ja',
              },
              {
                id: 'bebygd.nei',
                type: 'Answer',
                heading: 'Nei, eiendommen er ikke bebygd.',
                value: 'nei',
              },
            ],
          },
          {
            id: 'error.bebygd.nei',
            type: 'Error',
            show: {
              field: 'bebygd',
              operator: 'eq',
              value: 'nei',
            },
            children: [
              {
                id: 'error.bebygd.nei',
                type: 'Text',
                heading:
                  'Når eiendommen din ikke er bebygd må du snakke med kommunen før du gjør noe.',
              },
            ],
          },
          {
            id: 'resultatTakk',
            type: 'Result',
            text: 'ResultatTakk',
            heading: 'Takk, men nei...',
            lead: '<p>Resultat takk </p>',
            show: {
              field: 'bebygd',
              operator: 'eq',
              value: 'nei',
            },
          },
        ]}
      />
    </div>
  );
}
