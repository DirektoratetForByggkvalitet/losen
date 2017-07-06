import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';

const CheckboxInput = ({ key, text, onChange }) => (
  <Label htmlFor={key}>
    <input type="checkbox" id={key} onChange={onChange} />
    {text}
  </Label>
);

export default CheckboxInput;

CheckboxInput.defaultProps = {
  onChange: () => {},
};

CheckboxInput.propTypes = {
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
