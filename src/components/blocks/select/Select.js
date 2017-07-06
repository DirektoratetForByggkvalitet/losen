import React from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

const Select = props =>
  (<div>
    <p>
      {props.text}
    </p>
    <select>
      {props.suggestedAnswer.map(({ ...rest }) => <SelectOption {...rest} />)}
    </select>
  </div>);

export default Select;

Select.propTypes = {
  text: PropTypes.string.isRequired,
  suggestedAnswer: PropTypes.array.isRequired,
};
