import React from 'react';
import PropTypes from 'prop-types';
import StyledAsideItem from '../primitives/AsideItem';

export default function AsideResult({ setPage, id, active }) {
  return (
    <StyledAsideItem data-id={id} active={active} onClick={() => setPage(id)}>
      <p>RESULTAT <span style={{ display: 'inline' }} role="img" aria-label="100 points emoji">💯</span></p>
    </StyledAsideItem>
  );
}

AsideResult.defaultProps = {
  active: false,
};

AsideResult.propTypes = {
  active: PropTypes.bool,
  id: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};
