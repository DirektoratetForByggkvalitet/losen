import merge from 'lodash.merge';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import defaultStyles from '../styles';

export default class StyleProvider extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    styles: PropTypes.object,
  }

  static defaultProps = {
    styles: {},
  }

  static childContextTypes = {
    styles: PropTypes.object,
  }

  getChildContext() {
    return {
      styles: merge({}, defaultStyles, this.props.styles),
    };
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
