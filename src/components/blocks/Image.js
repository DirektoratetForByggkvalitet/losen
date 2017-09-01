import React from 'react';
import PropTypes from 'prop-types';

const Image = props =>
  (<figure>
    <img src={props.image} alt={props.text} />
    <figcaption>
      {props.text}
    </figcaption>
  </figure>);

export default Image;

Image.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
