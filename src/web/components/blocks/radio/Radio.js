import PropTypes from 'prop-types';
import React, { Component } from 'react';

import RadioInput from './RadioInput';

export default class Radio extends Component {
  static defaultProps = {
    currentValue: undefined,
    debug: false,
    disabled: false,
    heading: '',
    text: '',
  }

  static propTypes = {
    currentValue: PropTypes.any,
    debug: PropTypes.bool,
    disabled: PropTypes.bool,
    options: PropTypes.array.isRequired,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
  }

  handleChange = (property, value) => () => this.props.setData(`${property}`, value)

  render() {
    const { currentValue, debug, options, property, disabled } = this.props;

    return (
      <div>
        {options.map((option) => {
          const isDisabled = disabled || option.disabled;

          return (
            <RadioInput
              key={`${property}:${option.value}`}
              id={option.id}
              name={property}
              {...option}
              debug={debug}
              data-id={option.id}
              disabled={isDisabled}
              checked={currentValue === option.value}
              onChange={!isDisabled && this.handleChange(property, option.value)}
            />
          );
        })}
      </div>
    );
  }
}
