import React from 'react';
import PropTypes from 'prop-types';

export default function ErrorResult({ errorPages }) {
  return (
    <div>
      {errorPages.map(page => (
        <div>
          {page.errorNodes.map(node => (
            <div>
              <p><strong>{page.title} - {node.heading}</strong></p>
              {node.errors.map(error => <div>{JSON.stringify(error)}</div>)}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

ErrorResult.propTypes = {
  errorPages: PropTypes.array.isRequired,
};
