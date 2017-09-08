import React from 'react';
import PropTypes from 'prop-types';

import { TextBlock } from '../../primitives/Block';
import { H3 } from '../../primitives/Heading';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const Text = (props) => {
  const reactElement = htmlToReactParser.parse(props.text);
  return (
    <TextBlock>
      <H3>{props.heading}</H3>
      <div>{reactElement}</div>
    </TextBlock>
  );
};

export default Text;

Text.propTypes = {
  heading: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
