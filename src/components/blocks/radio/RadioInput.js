import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Radio as Input } from '../../../primitives/Input';

const RadioInput = ({ id, text, name, value, checked, onChange }) =>
  (<div>
    <Input type="radio" name={name} value={value} checked={checked} />

    <Label htmlFor={id} onClick={onChange}>
      {text}
    </Label>
  </div>);

export default RadioInput;

RadioInput.defaultProps = {
  onChange: () => {},
};

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
