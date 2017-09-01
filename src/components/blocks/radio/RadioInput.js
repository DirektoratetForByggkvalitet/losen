import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Radio as Input } from '../../../primitives/Input';

const RadioInput = ({ id, text, name, value, checked, onChange, heading, image }) =>
  (<div>
    <Input type="radio" name={name} value={value} checked={checked} />

    <Label htmlFor={id} onClick={onChange}>
      {heading
        ? <h2>
          {heading}
        </h2>
        : null}
      {text}
      {image ? <img src={image.url} alt={image.alt} /> : null}
    </Label>
  </div>);

export default RadioInput;

RadioInput.defaultProps = {
  onChange: () => {},
};

RadioInput.defaultProps = {
  heading: '',
  image: {},
};

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  heading: PropTypes.string,
  image: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any.isRequired,
  checked: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
