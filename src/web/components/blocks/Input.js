import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ErrorIcon from '../graphics/ErrorIcon';
import { TextInput as StyledInput } from '../../primitives/Input';
import { ErrorMessage } from '../../primitives/Errors';

export default class Input extends Component {
  static defaultProps = {
    type: 'text',
    placeholder: '',
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
    currentValue: '',
    validation: {},
    disabled: false,
    update: () => {},
  };

  static propTypes = {
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    placeholder: PropTypes.string,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    currentValue: PropTypes.any,
    validation: PropTypes.shape({
      error: PropTypes.bool,
      message: PropTypes.string,
    }),
    disabled: PropTypes.bool,
    update: PropTypes.func,
  };

  handleChange = (e) => {
    const { type, step, property, setData, update } = this.props;
    let value = e.target.value;

    if (type === 'number' && step >= 1) {
      value = parseInt(value, 10);
    } else if (type === 'number') {
      value = parseFloat(value);
    }

    update(value);
    setData(property, value);
  };

  render() {
    const { currentValue, placeholder, min, max, type, step, validation, disabled } = this.props;

    return (
      <div>
        <StyledInput
          type={type}
          min={min}
          max={max}
          step={step}
          placeholder={placeholder}
          onChange={this.handleChange}
          value={currentValue}
          validation={validation}
          disabled={disabled}
        />

        {validation.error && (
          <ErrorMessage>
            <ErrorIcon /> {validation.message}
          </ErrorMessage>
        )}
      </div>
    );
  }
}
