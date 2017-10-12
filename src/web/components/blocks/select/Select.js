import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

import { Select as StyledSelect } from '../../../primitives/Input';

const NULL_VALUE = '({[NULL]})';

export default class Select extends Component {
  static defaultProps = {
    text: '',
    heading: '',
    currentValue: '',
    defaultOption: '',
    debug: false,
  };

  static propTypes = {
    debug: PropTypes.bool,
    options: PropTypes.array.isRequired,
    currentValue: PropTypes.any,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    defaultOption: PropTypes.string,
  };

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
      <StyledSelect value={currentValue} onChange={this.handleChange}>
        <SelectOption heading={heading} value={NULL_VALUE} />

        {options.map(option => (
          <SelectOption debug={debug} {...option} key={option.value} />
        ))}
      </StyledSelect>
    );
  }
}
