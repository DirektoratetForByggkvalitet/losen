import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Radio as Input } from '../../../primitives/Input';


const RadioInput = ({ text, id, value, checked, onChange }) =>
  (<Label htmlFor={id}>
    <Input type="radio" id={id} value={value} checked={checked === value} onChange={onChange} />
    {text}
  </Label>);

export default RadioInput;

RadioInput.defaultProps = {
  onChange: () => {},
};

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
};
