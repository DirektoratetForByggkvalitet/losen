import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import CheckboxInput from './CheckboxInput';
import { H3 } from '../../../primitives/Heading';
import { H4 as Question } from '../../../primitives/Heading';

export default class Checkbox extends Component {
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
    autobind(this);
  }

  handleChange = (property, value) => (e) => {
    const { setData } = this.props;
    setData(`${property}.${value}`, e.target.checked);
  };

  render() {
    const { heading, text, suggestedAnswer, property } = this.props;

    return (
      <div>
        <H3>
          {heading}
        </H3>
        <Question>
          {text}
        </Question>

        <div>
          {suggestedAnswer.map(option =>
            (<CheckboxInput
              key={`${property}:${option.value}`}
              {...option}
              onChange={this.handleChange(property, option.value)}
            />),
          )}
        </div>
      </div>
    );
  }
}
