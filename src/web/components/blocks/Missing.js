import React from 'react';
import PropTypes from 'prop-types';

const Missing = ({ type }) =>
  (<div>
    Block missing: {type}
  </div>);

export default Missing;

Missing.defaultProps = {
  type: 'No type',
};

Missing.propTypes = {
  type: PropTypes.string,
};
