import React from 'react';
import PropTypes from 'prop-types';

import Figure from '../../primitives/Figure';

export default function Image({ image: { url, alt }, text }) {
  return (
    <Figure>
      <img src={url} alt={alt} />
      <figcaption>
        {text}
      </figcaption>
    </Figure>
  );
}

Image.propTypes = {
  image: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
};
