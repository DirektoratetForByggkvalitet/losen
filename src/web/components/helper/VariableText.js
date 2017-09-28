import React from 'react';
import PropTypes from 'prop-types';

export default function VariableText({ text }) {
  if (!text) {
    return null;
  }

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

VariableText.defaultProps = {
  text: '',
};

VariableText.propTypes = {
  text: PropTypes.string,
};
