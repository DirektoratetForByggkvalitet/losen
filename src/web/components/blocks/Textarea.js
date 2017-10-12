import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Html from '../helper/Html';
import SummaryDetails from './SummaryDetails';

import { Textarea as StyledTextarea } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';
import Information from '../../primitives/Information';

export default class Textarea extends Component {
  static propTypes = {
    currentValue: PropTypes.string,
    details: PropTypes.string,
    information: PropTypes.string,
    placeholder: PropTypes.string,
    property: PropTypes.string.isRequired,
    setData: PropTypes.func,
    summary: PropTypes.string,
  }

  static defaultProps = {
    currentValue: '',
    details: '',
    information: '',
    placeholder: '',
    setData: () => {},
    summary: '',
  }

  handleChange = (e) => {
    const { property, setData } = this.props;
    const value = e.target.value;

    setData(property, value);
  };

  render() {
    const {
      currentValue,
      details,
      information,
      placeholder,
      summary,
    } = this.props;

    return (
      <div>
        <StyledTextarea
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
        {summary && <SummaryDetails summary={summary} details={details} />}
      </div>
    );
  }
}
