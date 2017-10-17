import React from 'react';
import PropTypes from 'prop-types';

import Summary from '../Summary';

export default function SummaryBlock({ errorPages, setPage, pages }) {
  return (
    <Summary
      errorPages={errorPages}
      setPage={setPage}
      pages={pages}
    />
  );
}

SummaryBlock.propTypes = {
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  pages: PropTypes.array.isRequired,
};
