import React from 'react';
import PropTypes from 'prop-types';

import { H3 } from '../../primitives/Heading';
import { P } from '../../primitives/Paragraphs';

const Text = props =>
  (<div>
    Make me pritty Elise{' '}
    <span role="img" aria-label="nice">
      💅
    </span>
    <H3>{props.heading}</H3>
    <P>{props.text}</P>
  </div>);

export default Text;

Text.propTypes = {
  heading: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
