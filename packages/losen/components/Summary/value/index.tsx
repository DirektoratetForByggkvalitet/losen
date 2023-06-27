import React from 'react';
import Html from "../../helper/Html";

import { Value as StyledValue } from "losen/primitives/Summary";

type Props = {
  value: any
  node: any
}

export default function Value({ value, node }: Props) {
  if (Number(value) === value && value % 1 !== 0) {
    // eslint-disable-next-line no-param-reassign
    value = Math.round(value);
  }

  if (!node.optional && [null, undefined, ""].includes(value)) {
    return <StyledValue missing>* Må fylles ut</StyledValue>;
  }

  if (node.options) {
    let values;
    if (typeof value === "object") {
      values = Object.keys(value).filter((key) => value[key]);
    } else {
      values = [value];
    }

    // Map the values to option heading/text for the option
    values = values.map((val) => {
      const option =
        (node.options || []).find(
          ({ value: optionValue }: any) => optionValue === val
        ) || {};

      return option.heading || option.text || val;
    });

    if (!node.optional && !values.length) {
      return <StyledValue missing>* Må fylles ut</StyledValue>;
    } else if (!values.length) {
      return <StyledValue>Ingen valgt</StyledValue>;
    }

    const commaSeparated = values.slice(0, -1);
    const lastOne = values.slice(-1)[0];

    // If only one value selected
    if (!commaSeparated.length) {
      return (
        <StyledValue>
          {lastOne}
        </StyledValue>
      );
    }

    // If more than one selected
    return (
      <StyledValue>
        {commaSeparated.join(", ")} og {lastOne}.
      </StyledValue>
    );
  }

  return (
    <StyledValue>
      {value} {node.unit ? <Html inline text={node.unit} /> : null}
    </StyledValue>
  );
}