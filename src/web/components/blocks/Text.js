import React from 'react';
import PropTypes from 'prop-types';

import { TextBlock } from '../../primitives/Block';
import { H2 } from '../../primitives/Heading';
import Html from '../helper/Html';

const Text = ({ heading, text, warning = false }) => (
  <TextBlock warning={warning}>
    <H2>{heading}</H2>
    <Html text={text} />
  </TextBlock>
);

Text.propTypes = {
  heading: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
  warning: PropTypes.bool,
};

Text.defaultProps = {
  warning: false,
};

export default Text;
