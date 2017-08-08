import React from 'react';
import PropTypes from 'prop-types';

export default function AsideItem(props) {
  let done = '❌';
  if (props.done) {
    done = '✅';
  }
  return (
    <div>
      {props.id} <p>{props.title}</p> {done}
      <a href="/">Endre svar</a>
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
};
