import React from 'react';
import PropTypes from 'prop-types';

const Number = props =>
  (<div>
    <p>
      {props.text}
    </p>
    <input
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
  text: '',
};

Number.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
  minimum: PropTypes.number.isRequired,
  maximum: PropTypes.number.isRequired,
};
