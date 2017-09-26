import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Checkbox as Input } from '../../../primitives/Input';
import { H4 } from '../../../primitives/Heading';

const CheckboxInput = ({ id, name, checked, text, onChange, heading, image, disabled }) => (
  <div>
    <Input type="checkbox" name={name} id={id} onChange={onChange} disabled={disabled} checked={checked} />

    <Label htmlFor={id}>
      <div>
        {heading ? <H4>{heading}</H4> : null}
        {text}
      </div>
      {image ? <img src={image.url} alt={image.alt} /> : null}
    </Label>
  </div>
);

export default CheckboxInput;

CheckboxInput.defaultProps = {
  heading: '',
  image: {},
  checked: false,
  onChange: () => {},
};

CheckboxInput.propTypes = {
  heading: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.object,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
