import React from 'react';
import PropTypes from 'prop-types';

export default function AsideItem({ setPage, id, done, title }) {
  let mark = '❌';
  if (done) {
    mark = '✅';
  }
  return (
    <div data-id={id}>
      <p>
        {title}
        <button onClick={() => setPage(id)}>Endre svar</button>
      </p>
      <span>{mark}</span>
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
