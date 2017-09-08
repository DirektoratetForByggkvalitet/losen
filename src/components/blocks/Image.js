import React from 'react';
import PropTypes from 'prop-types';

import Figure from '../../primitives/Figure';

const Image = props =>
  (<Figure>
    <img src={props.image.url} alt={props.image.alt} />
    <figcaption>
      {props.text}
    </figcaption>
  </Figure>);

export default Image;

Image.propTypes = {
  image: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
