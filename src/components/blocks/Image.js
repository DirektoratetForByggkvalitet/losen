import React from 'react';
import PropTypes from 'prop-types';

const Image = props =>
  (<figure>
    <img src={props.image.url} alt={props.image.alt} />
    <figcaption>
      {props.text}
    </figcaption>
  </figure>);

export default Image;

Image.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
