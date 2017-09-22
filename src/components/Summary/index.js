import React from 'react';
import PropTypes from 'prop-types';

import PageSummary from './Page';

export default function Summary({ setPage, pages }) {
  return (
    <div>
      {pages.filter(({ type }) => type === 'Page').map(page => (
        <PageSummary
          goToPage={() => setPage(page.id)}
          {...page}
        />
      ))}
    </div>
  );
}

Summary.propTypes = {
  setPage: PropTypes.func.isRequired,
  pages: PropTypes.array,
};

Summary.defaultProps = {
  pages: [],
};
