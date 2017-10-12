import React from 'react';
import PropTypes from 'prop-types';

import { TextBlock } from '../../primitives/Block';
import { H2 } from '../../primitives/Heading';
import Html from '../helper/Html';

const Text = ({ id, debug, heading, text, warning = false }) => (
  <TextBlock warning={warning} debug={debug} data-id={id}>
    <H2>{heading}</H2>
    <Html text={text} />
  </TextBlock>
);

Text.propTypes = {
  id: PropTypes.string,
  debug: PropTypes.bool,
  heading: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  warning: PropTypes.bool,
};

Text.defaultProps = {
  id: null,
  debug: false,
  warning: false,
};

export default Text;
