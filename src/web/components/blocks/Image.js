import React from 'react';
import PropTypes from 'prop-types';

import Figure from '../../primitives/Figure';

export default function Image({ id, debug, image: { url, alt }, text }) {
  return (
    <Figure data-id={id} debug={debug}>
      <img src={url} alt={alt} />
      <figcaption>{text}</figcaption>
    </Figure>
  );
}

Image.propTypes = {
  id: PropTypes.string.isRequired,
  debug: PropTypes.bool.isRequired,
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};
