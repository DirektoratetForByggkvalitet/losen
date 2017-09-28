import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

export default function VariableText({ text, data }) {
  if (!text) {
    return null;
  }
  const match = text.match(/\{[\S]+\}/g);
  const result = text.replace(match[0], get(data, match[0].slice(1, -1)));
  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: result }} />;
}

VariableText.defaultProps = {
  text: '',
  data: {},
};

VariableText.propTypes = {
  text: PropTypes.string,
  data: PropTypes.any,
};
