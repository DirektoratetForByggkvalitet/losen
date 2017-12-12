import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash.get';

import StyledSum from '../../primitives/Sum';

export default function Evaluation({ data, testing, final, heading, groupedSimple, happy, sad }) {
  if (get(data, testing) < 0) {
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

Evaluation.propTypes = {
  data: PropTypes.object.isRequired,
  testing: PropTypes.string.isRequired,
  final: PropTypes.bool,
  heading: PropTypes.string,
  groupedSimple: PropTypes.bool,
  happy: PropTypes.string.isRequired,
  sad: PropTypes.string.isRequired,
};
