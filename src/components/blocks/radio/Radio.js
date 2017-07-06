import React from 'react';
import PropTypes from 'prop-types';
import RadioInput from './RadioInput';
// import { H3 } from '../../../primitives/Heading';

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

Radio.defaultProps = {
  //  heading: '',
  text: '',
};

Radio.propTypes = {
  //  heading: PropTypes.string,
  text: PropTypes.string,
  suggestedAnswer: PropTypes.array.isRequired,
};
