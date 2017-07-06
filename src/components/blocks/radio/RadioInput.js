import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';

const RadioInput = ({ key, text, value, checked, onChange }) =>
  (<Label htmlFor={key}>
    <input type="radio" id={key} value={value} checked={checked === value} onChange={onChange} />
    {text}
  </Label>);

export default RadioInput;

RadioInput.defaultProps = {
  onChange: () => {},
};

RadioInput.propTypes = {
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
};
