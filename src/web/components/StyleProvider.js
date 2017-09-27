import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';

import defaultStyles from '../styles';

export default class StyleProvider extends Component {
  static propTypes = {
    styles: PropTypes.object,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
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
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
