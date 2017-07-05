import React from 'react';
import PropTypes from 'prop-types';

const CheckboxInput = ({ key, text, onChange }) =>
  // TODO: When we have an id replace with x
  (<label htmlFor={key}>
    <input type="checkbox" id={key} onChange={onChange} />
    {text}
  </label>);

export default CheckboxInput;

CheckboxInput.defaultProps = {
  onChange: () => {},
};

CheckboxInput.propTypes = {
  key: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};
