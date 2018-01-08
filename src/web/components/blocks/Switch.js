import PropTypes from 'prop-types';
import React, { Component } from 'react';

import CheckboxInput from './checkbox/CheckboxInput';
import Fieldset from '../../primitives/Fieldset';
import Legend from '../../primitives/Legend';

export default class Switch extends Component {
  static propTypes = {
    currentValue: PropTypes.any,
    debug: PropTypes.bool,
    defaultOption: PropTypes.string,
    options: PropTypes.array.isRequired,
    property: PropTypes.string.isRequired,
    heading: PropTypes.string,
    disabled: PropTypes.bool,
    setData: PropTypes.func.isRequired,
    update: PropTypes.array,
  }

  static defaultProps = {
    currentValue: '',
    debug: false,
    defaultOption: '',
    heading: '',
    text: '',
    disabled: false,
    update: [],
  }

  handleChange = (property, value) => (e) => {
    if (e.target.checked && this.props.update) {
      this.props.update.map(item => this.props.setData(`${item}`, 0));
    }
    this.props.setData(`${property}.${value}`, e.target.checked);
  }


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
