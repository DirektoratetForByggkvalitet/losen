import React from 'react';
import PropTypes from 'prop-types';

import { NumberInput as Input } from '../../primitives/Input';

const Number = props =>
  (<div>
    <Input
      type="number"
      placeholder={props.placeholder}
      step="1"
      min={props.minimum}
      max={props.maximum}
    />
  </div>);

export default Number;

Number.defaultProps = {
  placeholder: '',
};

Number.propTypes = {
  placeholder: PropTypes.string,
  minimum: PropTypes.number.isRequired,
  maximum: PropTypes.number.isRequired,
};
