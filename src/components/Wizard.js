import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';
import { connect } from 'react-redux';

import Page from './Page';
import defaultStyles from '../styles';
import reduceWizard from '../utils/reduce-wizard';

import StyledWizard from '../primitives/Wizard';

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
  };

  getChildContext() {
    return {
      styles: merge({}, defaultStyles, this.props.styles),
    };
  }

  render() {
    const { schema } = this.props;

    return (
      <StyledWizard>
        {schema.map(props => <Page key={props.title} {...props} />)}
      </StyledWizard>
    );
  }
}

const mapStateToProps = (state, props) => ({
  schema: reduceWizard(props.schema, state),
});

export default connect(mapStateToProps)(Wizard);
