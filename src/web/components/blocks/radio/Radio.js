import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Fieldset from '../../../primitives/Fieldset';
import Legend from '../../../primitives/Legend';
import OptionWrapper from '../../../primitives/OptionWrapper';
import Text from '../Text';
import RadioInput from './RadioInput';

export default class Radio extends Component {
  static propTypes = {
    currentValue: PropTypes.any,
    debug: PropTypes.bool,
    disabled: PropTypes.bool,
    heading: PropTypes.string,
    text: PropTypes.string,
    options: PropTypes.array.isRequired,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
    clear: PropTypes.array,
    grid: PropTypes.bool,
  };

  static defaultProps = {
    currentValue: undefined,
    debug: false,
    disabled: false,
    heading: '',
    text: '',
    clear: [],
    grid: false,
  };

  handleChange = (property, value) => () => {
    const { clear, setData } = this.props;

    if (clear.length) {
      clear.forEach((clearProp) => {
        setData(`${clearProp}`, undefined);
      });
    }
    setData(`${property}`, value);
  };

  render() {
    const { currentValue, debug, disabled, heading, text, options, property, grid } = this.props;

    return (
      <Fieldset>
        <Legend>{heading}</Legend>
        <Text>{text}</Text>

        <OptionWrapper grid={grid}>
          {options.map((option) => {
            const isDisabled = disabled || option.disabled;

            return (
              <RadioInput
                key={`${property}:${option.value}`}
                id={option.id}
                name={property}
                inGrid={grid}
                {...option}
                debug={debug}
                data-id={option.id}
                disabled={isDisabled}
                checked={currentValue === option.value}
                onChange={!isDisabled && this.handleChange(property, option.value)}
              />
            );
          })}
        </OptionWrapper>
      </Fieldset>
    );
  }
}
