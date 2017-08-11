import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import RadioInput from './RadioInput';

export default class Radio extends Component {
  static defaultProps = {
    heading: '',
    text: '',
    currentValue: undefined,
  };

  static propTypes = {
    suggestedAnswer: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
    currentValue: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.state = { checked: '' };
    autobind(this);
  }

  handleChange = (property, value) => () => {
    console.log('yo');

    const { setData } = this.props;
    this.state.checked = value;
    setData(`${property}`, value);
  };

  render() {
    const { currentValue, suggestedAnswer, property } = this.props;

    return (
      <div>
        {suggestedAnswer.map(option => (
          <RadioInput
            name={property}
            key={`${property}:${option.value}`}
            id={`${property}:${option.value}`}
            {...option}
            checked={currentValue === option.value}
            onChange={this.handleChange(property, option.value)}
          />
        ))}
      </div>
    );
  }
}
