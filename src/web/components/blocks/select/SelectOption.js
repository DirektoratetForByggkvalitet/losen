import PropTypes from 'prop-types';
import React from 'react';

export default function SelectOption({ id, value, heading, debug }) {
  return (
    <option value={value}>
      {heading}{debug ? ` (${id})` : null}
    </option>
  );
}

SelectOption.propTypes = {
  debug: PropTypes.bool,
  heading: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

SelectOption.defaultProps = {
  debug: false,
};
