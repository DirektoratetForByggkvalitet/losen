import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

export default class Select extends Component {
  static defaultProps = {
    text: '',
    heading: '',
    currentValue: null,
  };

  static propTypes = {
    suggestedAnswer: PropTypes.array.isRequired,
    currentValue: PropTypes.any,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
  };

  handleChange = e => this.props.setData(this.props.property, e.target.value)

  render() {
    const {
      currentValue,
      suggestedAnswer,
    } = this.props;

    return (
      <select value={currentValue} onChange={this.handleChange}>
        {suggestedAnswer.map(option => (
          <SelectOption
            {...option}
            key={option.value}
          />
        ))}
      </select>
    );
  }
}
