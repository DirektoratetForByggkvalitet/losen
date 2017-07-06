import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';
import { connect } from 'react-redux';

import Page from './Page';
import defaultStyles from '../styles';
import reduceWizard from '../utils/reduce-wizard';

import StyledWizard from '../primitives/Wizard';

import { H1 } from '../primitives/Heading';

class Wizard extends Component {
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

const mapStateToProps = (state, props) => ({
  schema: reduceWizard(props.schema, state),
});

export default connect(mapStateToProps)(Wizard);
