import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Checkbox as Input } from '../../../primitives/Input';

const CheckboxInput = ({ id, text, onChange }) =>
  (<div>
    <Input type="checkbox" id={id} onChange={onChange} />
    <Label htmlFor={id}>
      {text}
    </Label>
  </div>);

export default CheckboxInput;

CheckboxInput.defaultProps = {
  onChange: () => {},
};

CheckboxInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
