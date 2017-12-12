import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash.get';
import { NAME } from '../../../state';

import { Value as StyledValue } from '../../../primitives/Summary';

export function getData(state) {
  return state[NAME] || {};
}

function missingValues(values, data) {
  console.log(values, data, getData());
  return true;
}

export default function Sum({ node }) {
  const { minimum, operations, values, data } = node;
  if (missingValues(values)) {
    return <StyledValue missing>* Mangler verdi for utregning</StyledValue>;
  }

  const sum = values.reduce((accumulator, currentValue, currentIndex) => {
    if (operations[currentIndex] === '-') {
      return Math.max(accumulator - get(data, currentValue), minimum);
    } else if (operations[currentIndex] === '*') {
      return Math.max(accumulator * get(data, currentValue), minimum);
    } else if (operations[currentIndex] === '/') {
      return Math.max(accumulator / get(data, currentValue), minimum);
    }
    return Math.max(accumulator + get(data, currentValue), minimum);
  }, 0);
  return <StyledValue>{sum}</StyledValue>;
}

Sum.propTypes = {
  node: PropTypes.object.isRequired,
};
