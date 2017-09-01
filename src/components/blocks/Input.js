import React from 'react';
import PropTypes from 'prop-types';

import { TextInput as StyledInput } from '../../primitives/Input';

const Input = props => <StyledInput type="text" placeholder={props.placeholder} />;

export default Input;

Input.defaultProps = {
  placeholder: '',
};

Input.propTypes = {
  placeholder: PropTypes.string,
};
