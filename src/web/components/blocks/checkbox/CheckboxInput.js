import React from 'react';
import PropTypes from 'prop-types';

import Label from '../../../primitives/Label';
import { Checkbox as Input } from '../../../primitives/Input';
import { H4 } from '../../../primitives/Heading';
import { P } from '../../../primitives/Paragraphs';

export default function CheckboxInput({
  id,
  name,
  checked,
  text,
  onChange,
  heading,
  image,
  disabled,
  messages,
}) {
  const message = messages.length && messages[0];

  return (
    <div>
      <Input type="checkbox" name={name} id={id} onChange={onChange} disabled={disabled} checked={checked} />

      <Label htmlFor={id} warning={message.warning}>
        <div>
          {heading
            ? <H4>
              {heading}
            </H4>
            : null}
          <P>{text}</P>
        </div>
        {image ? <img src={image.url} alt={image.alt} /> : null}
      </Label>
    </div>
  );
}

CheckboxInput.defaultProps = {
  heading: '',
  image: {},
  checked: false,
  disabled: false,
  onChange: () => {},
  messages: [],
};

CheckboxInput.propTypes = {
  heading: PropTypes.string,
  id: PropTypes.string.isRequired,
  image: PropTypes.object,
  onChange: PropTypes.func,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(PropTypes.object),
};
