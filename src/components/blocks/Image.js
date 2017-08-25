import React from 'react';
import PropTypes from 'prop-types';

const Image = props =>
  (<figure>
    <img src={props.url} alt={props.text} />
    <figcaption>
      {props.text}
    </figcaption>
  </figure>);

export default Image;

Image.propTypes = {
  url: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
