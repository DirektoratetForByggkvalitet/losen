import React from 'react';
import PropTypes from 'prop-types';
import { AsideResult as StyledAsideResult } from '../primitives/AsideButton';

export default function AsideResult({ setPage, id, active }) {
  return (
    <StyledAsideResult data-id={id} active={active} onClick={() => setPage(id)} tabIndex="0">
      Vis resultat
    </StyledAsideResult>
  );
}

AsideResult.defaultProps = {
  active: false,
};

AsideResult.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.string.isRequired,
  setPage: PropTypes.func.isRequired,
};
