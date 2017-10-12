import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import RadioInput from './RadioInput';

export default class Radio extends Component {
  static defaultProps = {
    heading: '',
    text: '',
    currentValue: undefined,
    disabled: false,
    debug: false,
  };

  static propTypes = {
    debug: PropTypes.bool,
    options: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    currentValue: PropTypes.any,
    disabled: PropTypes.bool,
  };

  constructor(props) {
    super(props);
    autobind(this);
  }

  handleChange = (property, value) => () => {
    const { setData } = this.props;
    setData(`${property}`, value);
  };

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
