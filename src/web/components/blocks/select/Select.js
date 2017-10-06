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
  };

  static propTypes = {
    options: PropTypes.array.isRequired,
    currentValue: PropTypes.any,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    defaultOption: PropTypes.string,
  };

  handleChange = (e) => {
    this.props.setData(
      this.props.property,
      e.target.value === NULL_VALUE ? undefined : e.target.value,
    );
  };

  render() {
    const { currentValue, options, defaultOption } = this.props;
    const text = defaultOption || 'Velg fra listen';
    return (
      <StyledSelect value={currentValue} onChange={this.handleChange}>
        <SelectOption text={text} value={NULL_VALUE} />

        {options.map(option => (
          <SelectOption {...option} key={option.value} />
        ))}
      </StyledSelect>
    );
  }
}
