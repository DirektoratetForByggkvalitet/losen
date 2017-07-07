import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Checkbox as Input } from '../../../primitives/Input';

const CheckboxInput = ({ id, text, onChange }) =>
  (<Label htmlFor={id}>
    <Input type="checkbox" id={id} onChange={onChange} />
    {text}
  </Label>);

export default CheckboxInput;

CheckboxInput.defaultProps = {
  onChange: () => {},
};

CheckboxInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
