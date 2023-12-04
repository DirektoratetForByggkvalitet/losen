import React, { ChangeEventHandler } from 'react';

import Fieldset from "../../../primitives/Fieldset";
import Legend from "../../../primitives/Legend";
import OptionWrapper from "../../../primitives/OptionWrapper";
import CheckboxInput from "./CheckboxInput";
import { RenderWithData } from "../../../index";

export default function Checkbox({
  setData,
  heading,
  options,
  grid,
  disabled,
  property,
  debug,
  currentValue,
  data,
  update
}: RenderWithData<"Checkbox">) {
  const handleChange = (property: string, value: any): ChangeEventHandler<HTMLInputElement> => (e) => {
    setData(`${property}.${value}`, e.target.checked);

    // Unset properties in the update array when the checkbox value change
    update?.forEach((updateProp) => {
      setData(updateProp, undefined, true)
    })
  }

  return (
    <Fieldset>
      <Legend>{heading}</Legend>

      {options && options.length ? (
        <OptionWrapper grid={grid}>
          {options.map((option) => {
            const isDisabled = disabled || option.disabled;

            return (
              <CheckboxInput
                {...option}
                data={data}
                disabled={isDisabled}
                key={`${property}:${option.value}`}
                debug={debug}
                checked={currentValue?.[option.value]}
                name={property}
                onChange={
                  !isDisabled ? handleChange(property, option.value) : undefined
                }
              />
            );
          })}
        </OptionWrapper>
      ) : null}
    </Fieldset>
  );
}