import React from 'react';
import PropTypes from 'prop-types';

export default function SelectOption({ value, text }) {
  return (
    <option value={value}>
      {text}
    </option>
  );
}

SelectOption.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
