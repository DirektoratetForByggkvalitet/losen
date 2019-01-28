import PropTypes from 'prop-types';
import React from 'react';

import PageSummary from './Page';
import hasSoftError from '../../utils/has-soft-error';

export default function Summary({ errorPages, setPage, pages }) {
  return (
    <div>
      {pages
        .filter(({ type }) => type === 'Page')
        .map(page => (
          <PageSummary
            key={page.id}
            error={!!errorPages.find(({ id }) => page.id === id) || hasSoftError(page)}
            goToPage={() => setPage(page.id)}
            {...page}
          />
        ))}
    </div>
  );
}

Summary.propTypes = {
  errorPages: PropTypes.array.isRequired,
  pages: PropTypes.array,
  setPage: PropTypes.func.isRequired,
};

Summary.defaultProps = {
  pages: [],
};
