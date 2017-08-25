import React from 'react';
import PropTypes from 'prop-types';

const Input = props => <input type="text" placeholder={props.placeholder} />;

export default Input;

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
};
