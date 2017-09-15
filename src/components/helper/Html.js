import React from 'react';
import PropTypes from 'prop-types';

const HtmlToReactParser = require('html-to-react').Parser;

const htmlToReactParser = new HtmlToReactParser();

export default function Html({ text }) {
  if (text) {
    const parsedHtml = htmlToReactParser.parse(text);
    return <p>{parsedHtml}</p>;
  }
  return null;
}

Html.defaultProps = {
  text: '',
};

Html.propTypes = {
  text: PropTypes.string,
};
