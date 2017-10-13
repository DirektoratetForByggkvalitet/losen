import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CheckboxInput from './CheckboxInput';
import Fieldset from '../../../primitives/Fieldset';
import Legend from '../../../primitives/Legend';

export default class Checkbox extends Component {
  static propTypes = {
    currentValue: PropTypes.any,
    debug: PropTypes.bool,
    disabled: PropTypes.bool,
    heading: PropTypes.string,
    options: PropTypes.array.isRequired,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
  };

  static defaultProps = {
    currentValue: {},
    debug: false,
    disabled: false,
    heading: '',
    text: '',
  };

  handleChange = (property, value) => e =>
    this.props.setData(`${property}.${value}`, e.target.checked);

  render() {
    const {
      currentValue,
      debug,
      disabled,
      options,
      property,
      heading,
    } = this.props;

    return (
      <Fieldset>
        <Legend>{heading}</Legend>
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
                onChange={
                  !isDisabled && this.handleChange(property, option.value)
                }
              />
            );
          })}
      </Fieldset>
    );
  }
}
