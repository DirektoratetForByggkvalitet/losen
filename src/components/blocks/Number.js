import React from 'react';
import PropTypes from 'prop-types';

import { H3 } from '../../primitives/Heading';
import { NumberInput as Input } from '../../primitives/Input';

const Number = props =>
  (<div>
    <H3>
      {props.heading}
    </H3>
    <p>
      {props.text}
    </p>
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
  heading: '',
  text: '',
};

Number.propTypes = {
  placeholder: PropTypes.string,
  heading: PropTypes.string,
  text: PropTypes.string,
  minimum: PropTypes.number.isRequired,
  maximum: PropTypes.number.isRequired,
};
