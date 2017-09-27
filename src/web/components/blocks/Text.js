import React from 'react';
import PropTypes from 'prop-types';

import { TextBlock } from '../../primitives/Block';
import { H3 } from '../../primitives/Heading';
import Html from '../helper/Html';

const Text = props => (
  <TextBlock>
    <H3>{props.heading}</H3>
    <Html text={props.text} />
  </TextBlock>
);

export default Text;

Text.propTypes = {
  heading: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
