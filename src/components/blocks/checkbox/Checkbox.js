import React from 'react';
import PropTypes from 'prop-types';
import CheckboxInput from './CheckboxInput';

const Checkbox = props =>
  (<div>
    <p>
      {props.text}
    </p>
    <div>
      {props.suggestedAnswer.map(({ ...rest }) => <CheckboxInput {...rest} />)}
    </div>
  </div>);

export default Checkbox;

Checkbox.propTypes = {
  text: PropTypes.string.isRequired,
  suggestedAnswer: PropTypes.array.isRequired,
};
