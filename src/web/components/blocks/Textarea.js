import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Html from '../helper/Html';

import { Textarea as StyledTextarea } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';
import Information from '../../primitives/Information';

export default class Textarea extends Component {
  static propTypes = {
    currentValue: PropTypes.string,
    information: PropTypes.string,
    heading: PropTypes.string,
    placeholder: PropTypes.string,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func,
  };

  static defaultProps = {
    currentValue: '',
    information: '',
    heading: '',
    placeholder: '',
    setData: () => {},
  };

  handleChange = (e) => {
    const { property, setData } = this.props;
    const value = e.target.value;

    setData(property, value);
  };

  render() {
    const { currentValue, information, heading, placeholder } = this.props;

    return (
      <div>
        <StyledTextarea
          aria-label={heading}
          placeholder={placeholder}
          value={currentValue}
          onChange={this.handleChange}
        />
        {information && (
          <Information>
            <ErrorIcon triangleFill={'black'} />
            <Html text={information} />
          </Information>
        )}
      </div>
    );
  }
}
