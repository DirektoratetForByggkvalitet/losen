import React from 'react';
import PropTypes from 'prop-types';
import StyledAsideItem from '../primitives/AsideItem';

export default function AsideResult({ setPage, id, active }) {
  return (
    <StyledAsideItem data-id={id} active={active} onClick={() => setPage(id)} tabIndex="0">
      <div>&nbsp;</div>
      <p>Vis resultat</p>
    </StyledAsideItem>
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
