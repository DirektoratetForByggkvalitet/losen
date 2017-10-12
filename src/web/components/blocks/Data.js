import PropTypes from 'prop-types';
import React from 'react';

import { H3 } from '../../primitives/Heading';

export default function Data({ heading, currentValue }) {
  return (
    <div>
      <H3>{heading}</H3>
      <p>{currentValue}</p>
    </div>
  );
}

Data.defaultProps = {
  currentValue: '',
  heading: '',
};

Data.propTypes = {
  currentValue: PropTypes.string,
  heading: PropTypes.string,
};
