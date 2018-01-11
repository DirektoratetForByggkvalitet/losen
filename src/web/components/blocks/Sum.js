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
  heading,
  secondary,
  unit,
  values,
  groupedSimple,
  property,
  setData,
}) {
  let sum = values.reduce((accumulator, cur, currentIndex) => {
    if (operations && operations[currentIndex] === '-') {
      return accumulator - get(data, cur, 0);
    } else if (operations && operations[currentIndex] === '%') {
      return (accumulator * cur).toFixed(2);
    } else if (operations && operations[currentIndex] === '*') {
      return accumulator * get(data, cur, 1);
    } else if (operations && operations[currentIndex] === '-/') {
      return get(data, cur, 0) / accumulator;
    } else if (operations && operations[currentIndex] === '/') {
      return accumulator / get(data, cur, 1);
    }
    return accumulator + get(data, cur, 0);
  }, 0);
  if (minimum) {
    sum = Math.max(sum, minimum);
  }

  // eslint-disable-next-line eqeqeq
  if (get(data, `sum-${property}`) !== sum) {
    setData(`sum-${property}`, sum);
  }

  return (
    <StyledSum groupedSimple={groupedSimple} final={final}>
      <div>
        {heading}
        {secondary ? <span>{get(data, secondary)} %</span> : null }
        <span>
          {sum} {unit ? <Html inline text={unit} /> : null}
        </span>
      </div>
      {summary && <SummaryDetails summary={summary} details={details} />}
    </StyledSum>
  );
}

Sum.defaultProps = {
  details: '',
  final: false,
  summary: '',
  heading: '',
  unit: '',
  values: [],
  operations: [],
  minimum: undefined,
  groupedSimple: false,
  property: undefined,
  currentValue: undefined,
  secondary: undefined,
};

Sum.propTypes = {
  data: PropTypes.object.isRequired,
  details: PropTypes.string,
  final: PropTypes.bool,
  minimum: PropTypes.number,
  operations: PropTypes.array,
  summary: PropTypes.string,
  heading: PropTypes.string,
  unit: PropTypes.string,
  values: PropTypes.array,
  groupedSimple: PropTypes.bool,
  property: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  secondary: PropTypes.string,
};
