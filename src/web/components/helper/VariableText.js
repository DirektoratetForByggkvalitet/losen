import React from 'react';
import PropTypes from 'prop-types';
import template from 'lodash.template';

export default function VariableText({ text, data }) {
  if (!text) {
    return null;
  }
  const compiled = template(text);

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: compiled(data) }} />;
}

VariableText.defaultProps = {
  text: '',
  data: {},
};

VariableText.propTypes = {
  text: PropTypes.string,
  data: PropTypes.any,
};
