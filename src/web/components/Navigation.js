import PropTypes from 'prop-types';
import React from 'react';

import { NavButton as Button } from '../primitives/Button';
import Nav from '../primitives/grid/Navigation';

export default function Navigation({ hasNext, hasPrevious, nextPage, previousPage }) {
  return (
    <Nav>
      {hasPrevious && <Button type="button" onClick={previousPage}>Forrige</Button>}
      {hasNext && <Button type="button" next onClick={nextPage}>Neste</Button>}
    </Nav>
  );
}

Navigation.defaultProps = {
  hasNext: false,
  hasPrevious: false,
  nextPage: () => {},
  previousPage: () => {},
};

Navigation.propTypes = {
  hasNext: PropTypes.bool,
  hasPrevious: PropTypes.bool,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
};
