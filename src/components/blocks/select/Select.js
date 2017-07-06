import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

import { H4 } from '../../../primitives/Heading';

const Select = props =>
  (<div>
    <H4>
      {props.heading}
    </H4>
    <p>
      {props.text}
    </p>
    <select>
      {props.suggestedAnswer.map(option => <SelectOption key={option.value} {...option} />)}
    </select>
  </div>);

export default Select;

Select.defaultProps = {
  text: '',
  heading: '',
};

Select.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  suggestedAnswer: PropTypes.array.isRequired,
};
