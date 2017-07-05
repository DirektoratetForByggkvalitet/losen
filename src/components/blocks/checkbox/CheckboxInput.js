import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = props =>
  // TODO: When we have an id replace with x
  (<label htmlFor="x">
    <input type="checkbox" id="x" />
    {props.text}
  </label>);

export default CheckboxInput;

CheckboxInput.propTypes = {
  text: PropTypes.string.isRequired,
};
