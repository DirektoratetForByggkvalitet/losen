import PropTypes from 'prop-types';
import React from 'react';

export default function Missing({ type }) {
  return (
    <div>
      Block missing: {type}
    </div>
  );
}

Missing.defaultProps = {
  type: 'No type',
};

Missing.propTypes = {
  type: PropTypes.string,
};
