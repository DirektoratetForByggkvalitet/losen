import PropTypes from 'prop-types';
import React from 'react';

import Input from './Input';

export default function Number({ minimum, maximum, ...props }) {
  return <Input {...props} type="number" step={0.001} min={minimum} max={maximum} />;
}

Number.propTypes = {
  maximum: PropTypes.number,
  minimum: PropTypes.number,
};

Number.defaultProps = {
  maximum: null,
  minimum: null,
};
