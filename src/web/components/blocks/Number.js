import PropTypes from 'prop-types';
import React from 'react';

import Input from './Input';

export default function Number({ minimum, maximum, step, ...props }) {
  return <Input {...props} type="number" step={step} min={minimum} max={maximum} />;
}

Number.propTypes = {
  maximum: PropTypes.number,
  minimum: PropTypes.number,
  step: PropTypes.number,
};

Number.defaultProps = {
  maximum: null,
  minimum: null,
  step: 1,
};
