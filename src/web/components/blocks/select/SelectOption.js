import React from 'react';
import PropTypes from 'prop-types';

export default function SelectOption({ id, value, heading, debug }) {
  return (
    <option value={value}>
      {heading}{debug ? ` (${id})` : null}
    </option>
  );
}

SelectOption.propTypes = {
  id: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  debug: PropTypes.bool,
};

SelectOption.defaultProps = {
  debug: false,
};
