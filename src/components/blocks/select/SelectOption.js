import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = props =>
  (<option value={props.value}>
    {props.text}
  </option>);

export default CheckboxInput;

CheckboxInput.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
