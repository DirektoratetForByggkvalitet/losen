import React from 'react';
import PropTypes from 'prop-types';
import StyledAsideItem from '../primitives/AsideItem';

export default function AsideItem({ setPage, id, done, title, active }) {
  let mark = ' ';

  if (done) {
    mark = '✅';
  }

  return (
    <StyledAsideItem data-id={id} active={active} onClick={() => setPage(id)}>
      <p>
        {title}
        <span>Endre svar</span>
      </p>
      <span>{mark}</span>
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  done: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};
