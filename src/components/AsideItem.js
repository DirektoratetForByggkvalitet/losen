import React from 'react';
import PropTypes from 'prop-types';

export default function AsideItem({ setPage, id, done, title }) {
  let mark = '❌';
  if (done) {
    mark = '✅';
  }
  return (
    <div>
      {id} <p>{title}</p> {mark}
      <button onClick={() => setPage(id)}>Endre svar</button>
    </div>
  );
}

AsideItem.defaultProps = {
  title: 'TITLE MISSING',
  done: false,
};

AsideItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  done: PropTypes.bool,
  setPage: PropTypes.func.isRequired,
};
