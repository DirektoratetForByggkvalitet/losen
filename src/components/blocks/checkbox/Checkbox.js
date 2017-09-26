import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import CheckboxInput from './CheckboxInput';

export default class Checkbox extends Component {
  static defaultProps = {
    heading: '',
    text: '',
    disabled: false,
    currentValue: {},
  };
  static propTypes = {
    suggestedAnswer: PropTypes.array.isRequired,
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
      suggestedAnswer,
      property,
      disabled,
      currentValue,
    } = this.props;

    return (
      <div>
        {suggestedAnswer &&
          suggestedAnswer.map((option) => {
            const isDisabled = disabled || option.disabled;

            return (
              <CheckboxInput
                disabled={isDisabled}
                key={`${property}:${option.value}`}
                id={`${property}:${option.value}`}
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
