import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = props =>
  // TODO: When we have an id replace with x
  (<label htmlFor="x">
    <input id="radio1" name="radio" type="radio" />
    {props.text}
  </label>);

export default CheckboxInput;

CheckboxInput.propTypes = {
  text: PropTypes.string.isRequired,
};
