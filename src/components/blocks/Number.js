import React from 'react';
import PropTypes from 'prop-types';

import Input from './Input';

export default function Number({ minimum, maximum, ...props }) {
  return (
    <Input
      {...props}
      type="number"
      step={1}
      min={minimum}
      max={maximum}
    />
  );
}

Number.propTypes = {
  minimum: PropTypes.number.isRequired,
  maximum: PropTypes.number.isRequired,
};
