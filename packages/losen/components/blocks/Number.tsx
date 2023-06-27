import { ChangeEventHandler } from 'react';

import { ErrorMessage } from '../../primitives/Errors';
import { NumberInput } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';
import Html from '../helper/Html';
import { RenderWithData } from 'losen';

export default function Number({
  heading,
  property,
  errors,
  disabled,
  currentValue,
  placeholder,
  autocomplete,
  setData,
  maximum,
  minimum,
  step = 1,
  unit,
}: RenderWithData<"Number">) {
  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    let value: typeof currentValue = e.target.value;

    if (step >= 1) {
      value = parseInt(value, 10);
    } else {
      value = parseFloat(value);
    }

    if (minimum === 0) {
      value = Math.abs(value);
    }

    if (maximum && maximum < value) {
      value = maximum;
    }

    if (minimum && minimum > value) {
      value = minimum;
    }

    if (isNaN(value)) {
      value = undefined;
    }

    setData(property, value);
  };

  const describedBy = [];
  if (unit) describedBy.push(`${property}.unit`);
  if (errors?.validation?.error) describedBy.push(`${property}.error`);

  return (
    <div>
      <NumberInput
        aria-label={heading}
        aria-invalid={errors?.validation?.error}
        aria-describedby={describedBy.length > 0 ? describedBy.join(' ') : undefined}
        disabled={disabled}
        id={property}
        max={maximum}
        min={minimum}
        onChange={handleChange}
        autoComplete={autocomplete}
        placeholder={placeholder}
        step={step}
        type="number"
        unit={unit}
        validation={errors?.validation}
        value={currentValue}
      />

      {unit ? <Html inline id={`${property}.unit`} text={unit} /> : null}

      {errors?.validation?.error && (
        <ErrorMessage role="alert" id={`${property}.error`}>
          <ErrorIcon /> {errors.validation.message}
        </ErrorMessage>
      )}
    </div>
  );
}