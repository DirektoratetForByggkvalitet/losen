import PropTypes from 'prop-types';
import React from 'react';

import { TextBlock } from '../../primitives/Block';
import { H2 } from '../../primitives/Heading';
import Html from '../helper/Html';

const Text = ({ debug, heading, id, text, warning = false }) => (
  <TextBlock warning={warning} debug={debug} data-id={id}>
    <H2>{heading}</H2>
    <Html text={text} />
  </TextBlock>
);

Text.propTypes = {
  debug: PropTypes.bool,
  heading: PropTypes.object.isRequired,
  id: PropTypes.string,
  text: PropTypes.string.isRequired,
  warning: PropTypes.bool,
};

Text.defaultProps = {
  debug: false,
  id: null,
  warning: false,
};

export default Text;
