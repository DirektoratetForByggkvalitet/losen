import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import CheckboxInput from './CheckboxInput';

export default class Checkbox extends Component {
  static defaultProps = {
    debug: false,
    heading: '',
    text: '',
    disabled: false,
    currentValue: {},
  };
  static propTypes = {
    debug: PropTypes.bool,
    options: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    currentValue: PropTypes.any,
  };

  constructor(props) {
    super(props);
    autobind(this);
  }

  handleChange = (property, value) => (e) => {
    const { setData } = this.props;
    setData(`${property}.${value}`, e.target.checked);
  };

  render() {
    const {
      options,
      property,
      disabled,
      currentValue,
      debug,
    } = this.props;

    return (
      <div>
        {options &&
          options.map((option) => {
            const isDisabled = disabled || option.disabled;

            return (
              <CheckboxInput
                disabled={isDisabled}
                key={`${property}:${option.value}`}
                debug={debug}
                id={option.id}
                checked={currentValue[option.value]}
                name={property}
                {...option}
                onChange={!isDisabled && this.handleChange(property, option.value)}
              />
            );
          })}
      </div>
    );
  }
}
