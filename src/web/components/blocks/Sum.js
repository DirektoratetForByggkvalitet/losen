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
  unit,
  values,
  groupedSimple,
  property,
  setData,
}) {
  let sum = values.reduce((accumulator, cur, currentIndex) => {
    if (operations && operations[currentIndex] === '-') {
      return accumulator - get(data, cur);
    } else if (operations && operations[currentIndex] === '%') {
      return accumulator * cur;
    } else if (operations && operations[currentIndex] === '*') {
      return accumulator * get(data, cur);
    } else if (operations && operations[currentIndex] === '/') {
      return accumulator / get(data, cur);
    }
    return accumulator + get(data, cur);
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
};
