import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash.get';

import StyledSum from '../../primitives/Sum';
import Html from '../helper/Html';

export default function Sum({ text, values, data, final, unit }) {
  const sum = values.reduce(
    (accumulator, currentValue) => accumulator + get(data, currentValue),
    0,
  );
  return (
    <StyledSum final={final}>
      <p>
        {text}:&nbsp;
        <span>{sum} {unit ? <Html inline text={unit} /> : null}</span>
      </p>
    </StyledSum>
  );
}

Sum.defaultProps = {
  text: '',
  values: [],
  final: false,
  unit: '',
};

Sum.propTypes = {
  text: PropTypes.string,
  values: PropTypes.array,
  data: PropTypes.object.isRequired,
  final: PropTypes.bool,
  unit: PropTypes.string,
};
