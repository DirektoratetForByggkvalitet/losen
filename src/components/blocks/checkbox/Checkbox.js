import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import CheckboxInput from './CheckboxInput';

export default class Checkbox extends Component {
  static defaultProps = {
    heading: '',
    text: '',
  };
  static propTypes = {
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
    const { suggestedAnswer, property } = this.props;

    return (
      <div>
        {suggestedAnswer &&
          suggestedAnswer.map(option =>
            (<CheckboxInput
              key={`${property}:${option.value}`}
              id={`${property}:${option.value}`}
              {...option}
              onChange={this.handleChange(property, option.value)}
            />),
          )}
      </div>
    );
  }
}
