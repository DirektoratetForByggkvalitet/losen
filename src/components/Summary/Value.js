import React from 'react';
import PropTypes from 'prop-types';

export default function Value({ value }) {
  if (value === undefined) {
    return <div style={{ color: 'red' }}>Mangler verdi</div>;
  }

  if (typeof value === 'object') {
    const values = Object.keys(value).filter(key => value[key]);

    if (!values.length) {
      return <div style={{ color: 'red' }}>Mangler verdi</div>;
    }

    const commaSeparated = values.slice(0, -1);
    const lastOne = values.slice(-1)[0];

    if (!commaSeparated.length) {
      return <div style={{ color: 'yellow' }}>{lastOne}</div>;
    }

    return <div style={{ color: 'yellow' }}>{commaSeparated.join(', ')} og {lastOne}.</div>;
  }

  return <div style={{ color: 'green' }}>{value}</div>;
}

Value.propTypes = {
  value: PropTypes.any,
};

Value.defaultProps = {
  value: undefined,
};
