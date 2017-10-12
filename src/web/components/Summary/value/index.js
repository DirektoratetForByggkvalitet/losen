import React from 'react';
import PropTypes from 'prop-types';

import { Value as StyledValue } from '../../../primitives/Summary';

export default function Value({ value, node }) {
  if (!node.optional && [null, undefined, ''].includes(value)) {
    return <StyledValue missing>* Må fylles ut</StyledValue>;
  }

  if (typeof value === 'object') {
    const values = Object
      .keys(value)
      .filter(key => value[key])
      .map((val) => {
        const option = (node.options || []).find(
          ({ value: optionValue }) => optionValue === val,
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

    if (!commaSeparated.length) {
      return <StyledValue>{lastOne}</StyledValue>;
    }

    return <StyledValue>{commaSeparated.join(', ')} og {lastOne}.</StyledValue>;
  }

  return <StyledValue>{value}</StyledValue>;
}

Value.propTypes = {
  value: PropTypes.any,
  node: PropTypes.object.isRequired,
};

Value.defaultProps = {
  value: undefined,
};
