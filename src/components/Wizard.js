import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';

import Page from './Page';
import defaultStyles from '../styles';

import StyledWizard from '../primitives/Wizard';

import { H1 } from '../primitives/Heading';

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
        <H1>Burde du få deg katt?</H1>
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
