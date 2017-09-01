import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Checkbox as Input } from '../../../primitives/Input';

const CheckboxInput = ({ id, text, onChange, heading, image }) =>
  (<div>
    <Input type="checkbox" id={id} onChange={onChange} />
    <Label htmlFor={id}>
      {heading
        ? <h2>
          {heading}
        </h2>
        : null}
      {text}
      {image ? <img src={image.url} alt={image.alt} /> : null}
    </Label>
  </div>);

export default CheckboxInput;

CheckboxInput.defaultProps = {
  heading: '',
  image: {},
  onChange: () => {},
};

CheckboxInput.propTypes = {
  heading: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.object,
  onChange: PropTypes.func,
  text: PropTypes.string.isRequired,
};
