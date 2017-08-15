import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Main from '../primitives/grid/Main';

export default function ErrorResult({ errorPages, setPage }) {
  return (
    <Main>
      <H2>Fett. Du kom til slutten <span role="img" aria-label="victory emoji">✌️</span></H2>
      <Lead>
        <em>...men du ække helt ferdig ennå.</em> Nedenfor er noen ting du må
        fikse før du kan få et ordentlig resultat i denne veiviseren.
      </Lead>

      {errorPages.map(page => (
        <div>
          {page.errorNodes.map(node => (
            <button onClick={() => setPage(page.id, node.property)}>
              <p><strong>{page.title} - {node.heading}</strong></p>
              {node.errors.map(error => <div>{JSON.stringify(error)}</div>)}
            </button>
          ))}
        </div>
      ))}
    </Main>
  );
}

ErrorResult.propTypes = {
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
};
