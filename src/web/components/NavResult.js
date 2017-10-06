import React from 'react';
import PropTypes from 'prop-types';
import { MainButton as StyledNavResult } from '../primitives/Button';

export default function NavResult({ setPage, id, active }) {
  return (
    <StyledNavResult
      data-id={id}
      active={active}
      onClick={() => setPage(id)}
      tabIndex="0"
    >
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
