import React from 'react';
import PropTypes from 'prop-types';

export default function Value({ value }) {
  if (value === undefined) {
    return <div style={{ color: '#888', fontStyle: 'italic' }}>Må fylles ut</div>;
  }

  if (typeof value === 'object') {
    const values = Object.keys(value).filter(key => value[key]);

    if (!values.length) {
      return <div style={{ color: '#888', fontStyle: 'italic' }}>Må fylles ut</div>;
    }

    const commaSeparated = values.slice(0, -1);
    const lastOne = values.slice(-1)[0];

    if (!commaSeparated.length) {
      return <div>{lastOne}</div>;
    }

    return <div>{commaSeparated.join(', ')} og {lastOne}.</div>;
  }

  return <div>{value}</div>;
}

Value.propTypes = {
  value: PropTypes.any,
};

Value.defaultProps = {
  value: undefined,
};
