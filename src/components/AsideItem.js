import React from 'react';
import PropTypes from 'prop-types';

export default function AsideItem(props) {
  return (
    <div>
      {props.id} <p>{props.title}</p>
      <a href="/">Endre svar</a>
    </div>
  );
}

AsideItem.defaultProps = {
  title: 'TITLE MISSING',
};

AsideItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
};
