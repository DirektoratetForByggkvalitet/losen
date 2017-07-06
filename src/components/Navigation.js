import React from 'react';
import PropTypes from 'prop-types';
import Button from '../primitives/Button';

const FIRST_PAGE = 0;
export default function Navigation({ page, nextPage, previousPage }) {
  if (page === FIRST_PAGE) {
    return (
      <div>
        <Button onClick={nextPage}>Neste</Button>
      </div>
    );
  }
  return (
    <div>
      <Button onClick={previousPage}>Forrige</Button>
      <Button onClick={nextPage}>Neste</Button>
    </div>
  );
}

Navigation.defaultProps = {
  nextPage: () => {},
  previousPage: () => {},
};

Navigation.propTypes = {
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  page: PropTypes.number.isRequired,
};
