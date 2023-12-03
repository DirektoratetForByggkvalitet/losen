import React, { ChangeEventHandler } from 'react';

import { ErrorMessage } from '../../primitives/Errors';
import { TextInput } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';
import { RenderWithData } from '../..';

type Props = RenderWithData<"Input", string> & {
  update?: (value: string) => void
}

export default function Input({
  heading,
  property,
  errors,
  disabled,
  currentValue,
  placeholder,
  autocomplete,
  inputType,
  setData,
  update,
}: Props) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setData(property, e.target.value);
    update?.(e.target.value);
  };

  return (
    <div>
      <TextInput
        aria-label={heading}
        aria-invalid={errors?.validation?.error}
        aria-describedby={errors?.validation?.error ? `${property}.error` : undefined}
        disabled={disabled}
        id={property}
        onChange={handleChange}
        placeholder={placeholder}
        autoComplete={autocomplete}
        type={inputType}
        validation={errors?.validation}
        value={currentValue}
      />

      {errors?.validation?.error && (
        <ErrorMessage role="alert" id={`${property}.error`}>
          <ErrorIcon /> {errors.validation.message}
        </ErrorMessage>
      )}
    </div>
  );
}