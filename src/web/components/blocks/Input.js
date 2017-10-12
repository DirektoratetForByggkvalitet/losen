import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ErrorMessage } from '../../primitives/Errors';
import { TextInput as StyledInput } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';

export default class Input extends Component {
  static defaultProps = {
    currentValue: '',
    disabled: false,
    max: Number.MAX_SAFE_INTEGER,
    min: 0,
    placeholder: '',
    step: 1,
    type: 'text',
    update: () => {},
    validation: {},
  }

  static propTypes = {
    currentValue: PropTypes.any,
    disabled: PropTypes.bool,
    errors: PropTypes.shape({
      validation: PropTypes.shape({
        error: PropTypes.bool,
        message: PropTypes.string,
      }),
    }).isRequired,
    max: PropTypes.number,
    min: PropTypes.number,
    placeholder: PropTypes.string,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    step: PropTypes.number,
    type: PropTypes.string,
    update: PropTypes.func,
  }

  handleChange = (e) => {
    const { type, step, property, setData, update } = this.props;
    let value = e.target.value;

    if (type === 'number' && step >= 1) {
      value = parseInt(value, 10);
    } else if (type === 'number') {
      value = parseFloat(value);
    }

    if (type === 'number' && isNaN(value)) {
      value = undefined;
    }

    update(value);
    setData(property, value);
  };

  render() {
    const {
      currentValue,
      disabled,
      errors,
      max,
      min,
      placeholder,
      step,
      type,
    } = this.props;

    return (
      <div>
        <StyledInput
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
          value={currentValue}
          validation={errors.validation}
          disabled={disabled}
          {...(type === 'number' ? {
            min,
            max,
            step,
          } : {})}
        />

        {errors.validation.error && (
          <ErrorMessage>
            <ErrorIcon /> {errors.validation.message}
          </ErrorMessage>
        )}
      </div>
    );
  }
}
