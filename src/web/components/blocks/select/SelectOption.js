import React from 'react';
import PropTypes from 'prop-types';

const SelectOption = props =>
  (<option value={props.value}>
    {props.text}
  </option>);

export default SelectOption;

SelectOption.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
