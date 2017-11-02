import PropTypes from 'prop-types';
import React from 'react';

import { MainButton as StyledNavResult } from '../primitives/Button';

export default function NavResult({ setPage, id, active }) {
  return (
    <StyledNavResult type="button" data-id={id} active={active} onClick={() => setPage(id)}>
      Vis resultat
    </StyledNavResult>
  );
}

NavResult.defaultProps = {
  active: false,
};

NavResult.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};
