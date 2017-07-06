import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

import { H4 } from '../../../primitives/Heading';

const Select = props =>
  (<div>
    <H4>
      {props.text}
    </H4>
    <select>
      {props.suggestedAnswer.map(({ ...rest }) => <SelectOption {...rest} />)}
    </select>
  </div>);

export default Select;

Select.propTypes = {
  text: PropTypes.string.isRequired,
  suggestedAnswer: PropTypes.array.isRequired,
};
