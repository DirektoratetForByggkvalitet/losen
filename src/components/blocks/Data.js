import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from '../../primitives/Heading';

const Data = ({ heading, currentValue }) => (
  <div>
    <H3>{heading}</H3>
    <p>{currentValue}</p>
  </div>
);

export default Data;

Data.defaultProps = {
  currentValue: '',
  heading: '',
};

Data.propTypes = {
  currentValue: PropTypes.string,
  heading: PropTypes.string,
};
