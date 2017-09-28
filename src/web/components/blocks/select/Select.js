import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

const NULL_VALUE = '({[NULL]})';

export default class Select extends Component {
  static defaultProps = {
    text: '',
    heading: '',
    currentValue: '',
  };

  static propTypes = {
    suggestedAnswer: PropTypes.array.isRequired,
    currentValue: PropTypes.any,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
  };

  handleChange = (e) => {
    this.props.setData(
      this.props.property,
      e.target.value === NULL_VALUE ? undefined : e.target.value,
    );
  };

  render() {
    const { currentValue, suggestedAnswer } = this.props;

    return (
      <select value={currentValue} onChange={this.handleChange}>
        <SelectOption text="Velg fra listen" value={NULL_VALUE} />

        {suggestedAnswer.map(option => <SelectOption {...option} key={option.value} />)}
      </select>
    );
  }
}
