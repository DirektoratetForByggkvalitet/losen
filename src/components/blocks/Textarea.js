import React from 'react';
import PropTypes from 'prop-types';

const Textarea = props => <textarea placeholder={props.placeholder} />;

export default Textarea;

Textarea.defaultProps = {
  placeholder: '',
};

Textarea.propTypes = {
  placeholder: PropTypes.string,
};
