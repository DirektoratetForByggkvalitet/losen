import React from 'react';
import PropTypes from 'prop-types';
import Button from '../primitives/Button';
import Nav from '../primitives/grid/Navigation';

const FIRST_PAGE = 0;
export default function Navigation({ page, nextPage, previousPage }) {
  if (page === FIRST_PAGE) {
    return (
      <Nav>
        <Button next onClick={nextPage}>
          Neste
        </Button>
      </Nav>
    );
  }
  return (
    <Nav>
      <Button onClick={previousPage}>Forrige</Button>
      <Button next onClick={nextPage}>
        Neste
      </Button>
    </Nav>
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
