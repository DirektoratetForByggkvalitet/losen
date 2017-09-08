import React from 'react';
import PropTypes from 'prop-types';

export default function Image({ image }) {
  if (Object.prototype.hasOwnProperty.call(image, 'url') && image.url) {
    return <img src={image.url} alt={image.alt} />;
  }
  return null;
}

Image.defaultProps = {
  image: {},
};

Image.propTypes = {
  image: PropTypes.object,
};
