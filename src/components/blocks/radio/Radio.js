import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import RadioInput from './RadioInput';
import { H3 } from '../../../primitives/Heading';

export default class Radio extends Component {
  static defaultProps = {
    heading: '',
    text: '',
  };
  static propTypes = {
    heading: PropTypes.string,
    text: PropTypes.string,
    suggestedAnswer: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
    property: PropTypes.string.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { checked: '' };
    autobind(this);
  }

  handleChange = (property, value) => (e) => {
    const { setData } = this.props;
    this.state.checked = e.target.value;
    setData(`${property}.${value}`, e.target.value);
  };

  render() {
    const { heading, text, suggestedAnswer, property } = this.props;

    return (
      <div>
        <H3>
          {heading}
        </H3>
        <p>
          {text}
        </p>

        <div>
          {suggestedAnswer.map(option =>
            (<RadioInput
              key={`${property}:${option.value}`}
              {...option}
              checked={this.state.checked}
              onChange={this.handleChange(property, option.value)}
            />),
          )}
        </div>
      </div>
    );
  }
}
