import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorResult({ errorPages, setPage }) {
  return (
    <div>
      <h2>Fett. Du kom til slutten <span role="img" aria-label="victory emoji">✌️</span></h2>
      <p>
        <em>...men du ække helt ferdig ennå.</em> Nedenfor er noen ting du må
        fikse før du kan få et ordentlig resultat i denne veiviseren.
      </p>

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
    </div>
  );
}

ErrorResult.propTypes = {
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
};
