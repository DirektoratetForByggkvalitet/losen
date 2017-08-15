import React from 'react';
import PropTypes from 'prop-types';
import StyledAsideItem from '../primitives/AsideItem';

export default function AsideItem({ setPage, id, done, title, active, index }) {

  return (
    <StyledAsideItem active={active} done={done} onClick={() => setPage(id)}>
      <div>{index}</div>
      <p>
        {title}
        <span>Endre svar</span>
      </p>
    </StyledAsideItem>
  );
}

AsideItem.defaultProps = {
  title: 'TITLE MISSING',
  done: false,
  active: false,
};

AsideItem.propTypes = {
  active: PropTypes.bool,
  index: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  done: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};
