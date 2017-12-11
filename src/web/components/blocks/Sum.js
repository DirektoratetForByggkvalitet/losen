import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash.get';

import StyledSum from '../../primitives/Sum';
import SummaryDetails from './SummaryDetails';
import Html from '../helper/Html';

export default function Sum({
  data,
  details,
  final,
  minimum,
  operations,
  summary,
  text,
  unit,
  values,
}) {
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
  return (
    <StyledSum final={final}>
      <p>
        {text}
        <span>
          {sum} {unit ? <Html inline text={unit} /> : null}
        </span>
      </p>
      {summary && <SummaryDetails summary={summary} details={details} />}
    </StyledSum>
  );
}

Sum.defaultProps = {
  details: '',
  final: false,
  summary: '',
  text: '',
  unit: '',
  values: [],
  operations: [],
  minimum: undefined,
};

Sum.propTypes = {
  data: PropTypes.object.isRequired,
  details: PropTypes.string,
  final: PropTypes.bool,
  summary: PropTypes.string,
  text: PropTypes.string,
  unit: PropTypes.string,
  values: PropTypes.array,
  operations: PropTypes.array,
  minimum: PropTypes.number,
};
