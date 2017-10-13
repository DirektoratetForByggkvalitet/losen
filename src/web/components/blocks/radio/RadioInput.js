import React from 'react';
import PropTypes from 'prop-types';

import { H3 } from '../../../primitives/Heading';
import { Radio as Input } from '../../../primitives/Input';
import Html from '../../helper/Html';
import { Label } from '../../../primitives/Label';
import SoftWarning from '../../../primitives/SoftWarning';

export default function RadioInput({
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
  value,
}) {
  const message = messages.length && messages[0];

  return (
    <div>
      <Input
        aria-label={heading}
        type="radio"
        name={name}
        id={id}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={onChange}
      />

      <Label htmlFor={id} warning={message.warning} debug={debug}>
        <div data-id={id}>
          <div>
            {heading && !text ? heading : null}
            {heading && text ? <H3>{heading}</H3> : null}

            {message ? (
              <SoftWarning warning={message.warning}>
                {message.message}
              </SoftWarning>
            ) : null}
          </div>

          {text ? <Html text={text} /> : null}
        </div>
        {image && image.url ? <img src={image.url} alt={image.alt} /> : null}
      </Label>
    </div>
  );
}

RadioInput.defaultProps = {
  checked: false,
  debug: false,
  disabled: false,
  heading: '',
  image: {},
  messages: [],
  onChange: () => {},
  text: '',
};

RadioInput.propTypes = {
  checked: PropTypes.bool,
  debug: PropTypes.bool,
  disabled: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  text: PropTypes.string,
  value: PropTypes.any.isRequired,
};
