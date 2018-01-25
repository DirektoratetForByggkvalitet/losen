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
  operations2,
  summary,
  heading,
  secondary,
  unit,
  unit2,
  values,
  values2,
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

  const sum2 = values2.reduce((accumulator, cur, currentIndex) => {
    if (operations2 && operations2[currentIndex] === '-') {
      return accumulator - get(data, cur, 0);
    } else if (operations2 && operations2[currentIndex] === '%') {
      return (accumulator * cur).toFixed(2);
    } else if (operations2 && operations[currentIndex] === '*') {
      return accumulator * get(data, cur, 1);
    } else if (operations2 && operations2[currentIndex] === '-/') {
      return get(data, cur, 0) / accumulator;
    } else if (operations2 && operations2[currentIndex] === '/') {
      return accumulator / get(data, cur, 1);
    }
    return accumulator + get(data, cur, 0);
  }, 0);

  if (typeof minimum === 'number') {
    sum = Math.max(sum, minimum);
  }

  // eslint-disable-next-line eqeqeq
  if (get(data, `sum-${property}`) !== sum) {
    setData(`sum-${property}`, sum);
  }
  if (get(data, `sum2-${property}`) !== sum2) {
    setData(`sum2-${property}`, sum2);
  }

  return (
    <StyledSum groupedSimple={groupedSimple} final={final}>
      <div>
        {heading}
        {secondary ? <span>{get(data, secondary)} %</span> : null}
        <span>
          {sum} {unit ? <Html inline text={unit} /> : null}
        </span>
        <span>
          {sum2} {unit2 ? <Html inline text={unit2} /> : null}
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
  unit2: '',
  values: [],
  values2: [],
  operations: [],
  operations2: [],
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
  operations2: PropTypes.array,
  summary: PropTypes.string,
  heading: PropTypes.string,
  unit: PropTypes.string,
  unit2: PropTypes.string,
  values: PropTypes.array,
  values2: PropTypes.array,
  groupedSimple: PropTypes.bool,
  property: PropTypes.string.isRequired,
  setData: PropTypes.func.isRequired,
  secondary: PropTypes.string,
};
