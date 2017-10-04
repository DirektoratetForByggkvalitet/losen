import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Radio as Input } from '../../../primitives/Input';
import { H4 } from '../../../primitives/Heading';
import { P } from '../../../primitives/Paragraphs';

const RadioInput = ({ id, text, name, value, checked, onChange, heading, image, disabled }) => (
  <div>
    <Input type="radio" name={name} id={id} value={value} checked={checked} disabled={disabled} />

    <Label htmlFor={id} onClick={onChange}>
      <div>
        {heading
          ? <H4>
            {heading}
          </H4>
          : null}
        <P>{text}</P>
      </div>
      {image && image.url ? <img src={image.url} alt={image.alt} /> : null}
    </Label>
  </div>
);

export default RadioInput;

RadioInput.defaultProps = {
  onChange: () => {},
};

RadioInput.defaultProps = {
  heading: '',
  image: {},
  checked: false,
  disabled: false,
};

RadioInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  heading: PropTypes.string,
  image: PropTypes.object,
  onChange: PropTypes.func,
  value: PropTypes.any.isRequired,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
};
