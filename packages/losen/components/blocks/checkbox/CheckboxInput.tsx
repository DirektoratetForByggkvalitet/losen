import React, { ChangeEventHandler } from 'react';

import { Checkbox as Input } from '../../../primitives/Input';
import { H3 } from '../../../primitives/Heading';
import Html from '../../helper/Html';
import { Label } from '../../../primitives/Label';
import { RenderWithData } from '../../..';

type Props = RenderWithData<"Answer"> & {
  checked?: boolean,
  name: string,
  onChange?: ChangeEventHandler<HTMLInputElement>,
}

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
}: Props) {
  const message = messages?.[0];


  return (
    <div>
      <Input
        aria-label={heading}
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
      />

      <Label htmlFor={id} warning={message?.warning} debug={debug}>
        <div data-id={id}>
          <div>
            {heading && !text ? heading : null}
            {heading && text ? <H3>{heading}</H3> : null}
          </div>
          {text ? <Html text={text} /> : null}
        </div>
        {image && image.url ? <img src={image.url} alt={image.alt} /> : null}
      </Label>
    </div>
  );
}