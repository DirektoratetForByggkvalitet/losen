import React from 'react';
import { H3 } from 'primitives/Heading';
import { Radio as Input } from 'primitives/Input';
import Html from 'components/helper/Html';
import { Label } from 'primitives/Label';
import SoftWarning from 'primitives/SoftWarning';
import { RenderWithData } from 'index';

type Props = RenderWithData<"Answer"> & {
  checked?: boolean,
  name: string,
  onChange?: () => void,
}

export default function RadioInput({
  id,
  value,
  checked,
  debug,
  disabled,
  heading,
  image,
  messages,
  onChange,
  text = '',
  name
}: Props) {
  const message = messages?.[0];

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

      <Label htmlFor={id} warning={message?.warning} debug={debug}>
        <div data-id={id}>
          {heading && !text ? `${heading} ` : null}
          {heading && text ? <H3>{heading}</H3> : null}

          {message ? (
            <SoftWarning warning={message.warning}>
              {message.message}
            </SoftWarning>
          ) : null}

          {text ? <Html text={text} /> : null}
        </div>
        {image && image.url ? <img src={image.url} alt={image.alt} /> : null}
      </Label>
    </div>
  );
}