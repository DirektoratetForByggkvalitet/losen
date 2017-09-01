import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TextInput as StyledInput } from '../../primitives/Input';

export default class Input extends Component {
  static defaultProps = {
    type: 'text',
    placeholder: '',
    min: 0,
    max: Number.MAX_SAFE_INTEGER,
    step: 1,
  }

  static propTypes = {
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    placeholder: PropTypes.string,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
  }

  handleChange = (e) => {
    const { type, step, property, setData } = this.props;
    let value = e.target.value;

    if (type === 'number' && step >= 1) {
      value = parseInt(value, 10);
    } else if (type === 'number') {
      value = parseFloat(value);
    }

    setData(property, value);
  }

  render() {
    const { placeholder, min, max, type, step } = this.props;

    return (
      <StyledInput
        type={type}
        min={min}
        max={max}
        step={step}
        placeholder={placeholder}
        onChange={this.handleChange}
      />
    );
  }
}
