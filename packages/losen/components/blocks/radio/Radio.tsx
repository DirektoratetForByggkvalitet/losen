import React from 'react';
import Fieldset from '../../../primitives/Fieldset';
import Legend from '../../../primitives/Legend';
import OptionWrapper from '../../../primitives/OptionWrapper';
import RadioInput from './RadioInput';
import { RenderWithData } from '../../../index';

export default function Radio({
  property,
  heading,
  grid,
  options,
  disabled,
  clear,
  debug,
  setData,
  currentValue,
  data
}: RenderWithData<"Radio">) {
  const handleChange = (property: string, value: any) => () => {
    if (clear?.length) {
      clear.forEach((clearProp) => {
        setData(`${clearProp}`, undefined);
      });
    }

    setData(`${property}`, value);
  };

  return (
    <Fieldset>
      <Legend>{heading}</Legend>

      <OptionWrapper grid={grid}>
        {options.map((option) => {
          const isDisabled = disabled || option.disabled;

          return (
            <RadioInput
              {...option}
              data={data}
              debug={debug}
              key={`${property}:${option.value}`}
              name={property}
              data-id={option.id}
              disabled={isDisabled}
              checked={currentValue === option.value}
              onChange={!isDisabled ? handleChange(property, option.value) : undefined}
            />
          )
        })}
      </OptionWrapper>
    </Fieldset>
  );
}