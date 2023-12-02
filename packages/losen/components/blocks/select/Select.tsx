import React, { ChangeEventHandler } from 'react';
import SelectOption from './SelectOption';

import { SelectWrapper } from 'primitives/Input';
import { RenderWithData } from 'index';

const NULL_VALUE = '({[NULL]})';

export default function Select({
  setData,
  property,
  options,
  defaultOption,
  heading,
  currentValue,
  autocomplete,
  debug,
  data
}: RenderWithData<"Select">) {
  const handleChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    let value = e.target.value === NULL_VALUE ? undefined : e.target.value;
    const intValue = value && parseInt(value, 10);

    // Check if the value was supposed to be an int. It's important that we
    // set it as a number in order for checks (gt, lt, gte, lte to work) to work
    if (intValue && !isNaN(intValue)) {
      const optionExists = options.find(
        ({ value: optionValue }) => optionValue === intValue,
      );

      // If we found an option that matched the numeric value, we'll set it to 
      // the store..
      if (optionExists) {
        setData(property, intValue);
        return
      }
    }

    setData(property, value);
  };

  const placeholder = defaultOption || 'Velg fra listen';
  return (
    <SelectWrapper>
      <select
        aria-label={heading}
        value={currentValue}
        onChange={handleChange}
        autoComplete={autocomplete}
      >
        <option value={NULL_VALUE}>{placeholder}</option>

        {options.map(option => (
          <SelectOption data={data} debug={debug} {...option} key={option.value} />
        ))}
      </select>
    </SelectWrapper>
  );
}