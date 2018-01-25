import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash.get';

import StyledSum from '../../primitives/Sum';
import Html from '../helper/Html';

export default function Evaluation({
  data,
  testing,
  final,
  heading,
  groupedSimple,
  happy,
  sad,
  showValue,
  unit,
}) {
  let testedValue;
  if (Array.isArray(testing)) {
    testedValue = get(data, testing[0]) - get(data, testing[1]);
  } else {
    testedValue = get(data, testing);
  }
  const absTestedValue = Math.abs(testedValue);
  if (showValue) {
    if (testedValue < 0) {
      return (
        <StyledSum groupedSimple={groupedSimple} final={final}>
          <div>
            {sad}
            <span style={{ color: 'red' }}>
              {absTestedValue} {unit ? <Html inline text={unit} /> : null}
            </span>
          </div>
        </StyledSum>
      );
    }
    return (
      <StyledSum groupedSimple={groupedSimple} final={final}>
        <div>
          {happy}
          <span style={{ color: 'green' }}>
            {testedValue} {unit ? <Html inline text={unit} /> : null}
          </span>
        </div>
      </StyledSum>
    );
  }

  if (testedValue < 0) {
    // sad case
    return (
      <StyledSum groupedSimple={groupedSimple} final={final}>
        <div>
          {heading}
          <span style={{ color: 'red' }}>{sad}</span>
        </div>
      </StyledSum>
    );
  }
  // happy case
  return (
    <StyledSum groupedSimple={groupedSimple} final={final}>
      <div>
        {heading}
        <span style={{ color: 'green' }}>{happy}</span>
      </div>
    </StyledSum>
  );
}

Evaluation.defaultProps = {
  currentValue: undefined,
  details: '',
  final: false,
  groupedSimple: false,
  heading: '',
  minimum: undefined,
  operations: [],
  property: undefined,
  showValue: false,
  summary: '',
  unit: '',
  values: [],
};

Evaluation.propTypes = {
  data: PropTypes.object.isRequired,
  testing: PropTypes.string.isRequired,
  final: PropTypes.bool,
  heading: PropTypes.string,
  groupedSimple: PropTypes.bool,
  happy: PropTypes.string.isRequired,
  sad: PropTypes.string.isRequired,
  showValue: PropTypes.bool,
  unit: PropTypes.string,
};
