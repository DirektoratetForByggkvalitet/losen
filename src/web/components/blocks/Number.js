import PropTypes from 'prop-types';
import React from 'react';

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
  maximum: PropTypes.number.isRequired,
  minimum: PropTypes.number.isRequired,
};
