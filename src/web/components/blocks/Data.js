import React from 'react';
import PropTypes from 'prop-types';
import { H4 } from '../../primitives/Heading';

const Data = ({ heading, currentValue }) => (
  <div>
    <H4>{heading}</H4>
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
