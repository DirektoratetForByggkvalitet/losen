import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Radio as Input } from '../../../primitives/Input';

const BoolInput = ({ text, id, value, checked, onChange }) =>
  (<div>
    <Input type="radio" id={id} value={value} checked={checked === value} onChange={onChange} />
    <Label htmlFor={id}>
      {text}
    </Label>
  </div>);

export default BoolInput;

BoolInput.defaultProps = {
  onChange: () => {},
};

BoolInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
  checked: PropTypes.string.isRequired,
};
