import PropTypes from 'prop-types';
import React from 'react';

import { Checkbox as Input } from '../../../primitives/Input';
import { H3 } from '../../../primitives/Heading';
import Html from '../../helper/Html';
import { Label } from '../../../primitives/Label';

export default function CheckboxInput({
  checked,
  debug,
  disabled,
  heading,
  id,
  image,
  messages,
  name,
  onChange,
  text,
}) {
  const message = messages.length && messages[0];

  return (
    <div>
      <Input
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />

      <Label htmlFor={id} warning={message.warning} debug={debug}>
        <div data-id={id}>
          {heading ? <H3>{heading}</H3> : null}
          <Html text={text} />
        </div>
        {image ? <img src={image.url} alt={image.alt} /> : null}
      </Label>
    </div>
  );
}

CheckboxInput.defaultProps = {
  checked: false,
  debug: false,
  disabled: false,
  heading: '',
  image: {},
  messages: [],
  onChange: () => {},
};

CheckboxInput.propTypes = {
  checked: PropTypes.bool,
  debug: PropTypes.bool,
  disabled: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  text: PropTypes.string.isRequired,
};
