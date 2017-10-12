import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SelectOption from './SelectOption';

import { SelectWrapper } from '../../../primitives/Input';

const NULL_VALUE = '({[NULL]})';

export default class Select extends Component {
  static propTypes = {
    currentValue: PropTypes.any,
    debug: PropTypes.bool,
    defaultOption: PropTypes.string,
    options: PropTypes.array.isRequired,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func.isRequired,
  }

  static defaultProps = {
    currentValue: '',
    debug: false,
    defaultOption: '',
    heading: '',
    text: '',
  }

  handleChange = (e) => {
    let value = e.target.value === NULL_VALUE ? undefined : e.target.value;
    const intValue = parseInt(value, 10);

    // Check if the value was supposed to be an int. It's important that we
    // set it as a number in order for checks (gt, lt, gte, lte to work) to work
    if (!isNaN(intValue)) {
      const optionExists = this.props.options.find(
        ({ value: optionValue }) => optionValue === intValue,
      );

      // If we found an option that matched the numeric value,
      // we'll set it to the store.. Otherwise use the string
      value = optionExists ? intValue : value;
    }

    this.props.setData(this.props.property, value);
  };

  render() {
    const { currentValue, options, defaultOption, debug } = this.props;
    const heading = defaultOption || 'Velg fra listen';
    return (
      <SelectWrapper>
        <select value={currentValue} onChange={this.handleChange}>
          <option value={NULL_VALUE}>{heading}</option>

          {options.map(option => (
            <SelectOption debug={debug} {...option} key={option.value} />
          ))}
        </select>
      </SelectWrapper>
    );
  }
}
