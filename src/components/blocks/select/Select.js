import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

import { H3 } from '../../../primitives/Heading';

export default class Select extends Component {
  static defaultProps = {
    text: '',
    heading: '',
    currentValue: null,
  };

  static propTypes = {
    text: PropTypes.string,
    heading: PropTypes.string,
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
      heading,
      text,
    } = this.props;

    return (
      <div>
        <H3>{heading}</H3>
        <p>{text}</p>

        <select value={currentValue} onChange={this.handleChange}>
          {suggestedAnswer.map(option => (
            <SelectOption
              {...option}
              key={option.value}
            />
          ))}
        </select>
      </div>
    );
  }
}
