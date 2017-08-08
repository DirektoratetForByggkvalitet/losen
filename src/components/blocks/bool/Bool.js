import React, { Component } from 'react';
import PropTypes from 'prop-types';
import autobind from 'react-autobind';

import BoolInput from './BoolInput';

export default class Bool extends Component {
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
    this.state = { checked: '' };
    autobind(this);
  }

  handleChange = property => (e) => {
    const { setData } = this.props;
    this.state.checked = e.target.value;
    setData(`${property}`, e.target.value);
  };

  render() {
    const { suggestedAnswer, property } = this.props;

    return (
      <div>
        {suggestedAnswer.map(option =>
          (<BoolInput
            key={`${property}:${option.value}`}
            id={`${property}:${option.value}`}
            {...option}
            checked={this.state.checked}
            onChange={this.handleChange(property)}
          />),
        )}
      </div>
    );
  }
}
