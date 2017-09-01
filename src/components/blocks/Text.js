import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from '../../primitives/Heading';
import { P } from '../../primitives/Paragraphs';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

const Text = (props) => {
  const reactElement = htmlToReactParser.parse(props.text);
  return (
    <div>
      Make me pritty Elise{' '}
      <span role="img" aria-label="nice">
        💅
      </span>
      <H3>{props.heading}</H3>
      <P>{reactElement}</P>
    </div>
  );
};

export default Text;

Text.propTypes = {
  heading: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};
