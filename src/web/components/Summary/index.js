import PropTypes from 'prop-types';
import React from 'react';

import PageSummary from './Page';

export default function Summary({ errorPages, setPage, pages }) {
  return (
    <div>
      {pages.filter(({ type }) => type === 'Page').map(page => (
        <PageSummary
          error={!!errorPages.find(({ id }) => page.id === id)}
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
