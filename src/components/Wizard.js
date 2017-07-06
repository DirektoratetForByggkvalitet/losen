import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';

import Page from './Page';
import defaultStyles from '../styles';

import StyledWizard from '../primitives/Wizard';

export default class Wizard extends Component {
  static propTypes = {
    schema: PropTypes.array,
    styles: PropTypes.object,
  };

  static defaultProps = {
    schema: '',
    styles: {},
  };

  static childContextTypes = {
    styles: PropTypes.object,
  }

  getChildContext() {
    return {
      styles: merge(
        {},
        defaultStyles,
        this.props.styles,
      ),
    };
  }


  render() {
    const { schema } = this.props;

    return (
      <StyledWizard>
        {schema.map(props => (
          <Page
            title="Page"
            children={props.children}
            {...props}
          />
        ))}
      </StyledWizard>
    );
  }
}
