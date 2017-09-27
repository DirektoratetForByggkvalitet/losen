import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Textarea as StyledTextarea } from '../../primitives/Input';

export default class Textarea extends Component {
  static defaultProps = {
    placeholder: '',
    setData: () => {},
    currentValue: '',
  }

  static propTypes = {
    property: PropTypes.string.isRequired,
    setData: PropTypes.func,
    placeholder: PropTypes.string,
    currentValue: PropTypes.string,
  }

  handleChange = (e) => {
    const { property, setData } = this.props;
    const value = e.target.value;

    setData(property, value);
  }

  render() {
    const { placeholder, currentValue } = this.props;

    return (
      <StyledTextarea
        placeholder={placeholder}
        value={currentValue}
        onChange={this.handleChange}
      />
    );
  }
}
