import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { ErrorMessage } from '../../primitives/Errors';
import { SRLabel } from '../../primitives/Label';
import { TextInput, NumberInput } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';
import Html from '../helper/Html';

export default class Input extends Component {
  static propTypes = {
    currentValue: PropTypes.any,
    disabled: PropTypes.bool,
    unit: PropTypes.string,
    errors: PropTypes.shape({
      validation: PropTypes.shape({
        error: PropTypes.bool,
        message: PropTypes.string,
      }),
    }).isRequired,
    heading: PropTypes.string,
    max: PropTypes.number,
    min: PropTypes.number,
    placeholder: PropTypes.string,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    step: PropTypes.number,
    type: PropTypes.string,
    update: PropTypes.func,
    toggle: PropTypes.array,
  };

  static defaultProps = {
    currentValue: '',
    disabled: false,
    unit: '',
    heading: '',
    max: Number.MAX_SAFE_INTEGER,
    min: 0,
    placeholder: '',
    step: 1,
    type: 'text',
    update: () => {},
    validation: {},
    toggle: [],
  };

  updateToggle = (value) => {
    if (value !== 0 && this.props.toggle) {
      this.props.toggle.map(item => this.props.setData(`${item}`, 0));
    }
  };

  handleChange = (e) => {
    const { type, step, property, setData, update, min, max } = this.props;
    let value = e.target.value;

    if (type === 'number' && step >= 1) {
      value = parseInt(value, 10);
    } else if (type === 'number') {
      value = parseFloat(value);
    }

    if (type === 'number' && min === 0) {
      value = Math.abs(value);
    }

    if (type === 'number' && max < value) {
      value = max;
    }

    if (type === 'number' && isNaN(value)) {
      value = undefined;
    }
    this.updateToggle(value);
    update(value);
    setData(property, value);
  };

  render() {
    const {
      currentValue,
      disabled,
      errors,
      heading,
      max,
      min,
      placeholder,
      property,
      step,
      type,
      unit,
    } = this.props;
    let inputType = type;
    if (inputType === 'Input') {
      inputType = 'text';
    }
    let label = '';
    if (heading) {
      label = <SRLabel htmlFor={property}>{heading}</SRLabel>;
    }
    let input = (
      <TextInput
        aria-invalid={errors.validation.error}
        aria-label={heading}
        disabled={disabled}
        id={property}
        onChange={this.handleChange}
        placeholder={placeholder}
        type={inputType}
        validation={errors.validation}
        value={currentValue}
      />
    );
    if (this.props.type === 'number') {
      input = (
        <NumberInput
          aria-invalid={errors.validation.error}
          aria-label={heading}
          disabled={disabled}
          id={property}
          max={max}
          min={min}
          onChange={this.handleChange}
          placeholder={placeholder}
          step={step}
          type={inputType}
          unit={unit}
          validation={errors.validation}
          value={currentValue}
        />
      );
    }
    return (
      <div>
        {label}
        {input}

        {unit ? <Html inline text={unit} /> : null}

        {errors.validation.error && (
          <ErrorMessage>
            <ErrorIcon /> {errors.validation.message}
          </ErrorMessage>
        )}
      </div>
    );
  }
}
