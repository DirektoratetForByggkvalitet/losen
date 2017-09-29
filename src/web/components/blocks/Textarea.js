import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Html from '../helper/Html';
import SummaryDetails from './SummaryDetails';
import { Textarea as StyledTextarea } from '../../primitives/Input';
import ErrorIcon from '../graphics/ErrorIcon';
import Information from '../../primitives/Information';

export default class Textarea extends Component {
  static defaultProps = {
    placeholder: '',
    setData: () => {},
    currentValue: '',
    information: '',
    details: '',
    summary: '',
  };

  static propTypes = {
    property: PropTypes.string.isRequired,
    setData: PropTypes.func,
    placeholder: PropTypes.string,
    currentValue: PropTypes.string,
    information: PropTypes.string,
    details: PropTypes.string,
    summary: PropTypes.string,
  };

  handleChange = (e) => {
    const { property, setData } = this.props;
    const value = e.target.value;

    setData(property, value);
  };

  render() {
    const {
      placeholder,
      currentValue,
      information,
      summary,
      details,
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
