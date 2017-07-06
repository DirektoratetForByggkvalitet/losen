import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';

const Radio = props =>
  (<div>
    <p>
      {props.text}
    </p>
    <div>
      {props.suggestedAnswer.map(({ ...rest }) => <RadioInput {...rest} />)}
    </div>
  </div>);

export default Radio;

Radio.propTypes = {
  text: PropTypes.string.isRequired,
  suggestedAnswer: PropTypes.array.isRequired,
};
