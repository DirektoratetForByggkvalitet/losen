import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';
import autobind from 'react-autobind';

import defaultStyles from '../styles';

class Theme extends Component {
  static propTypes = {
    styles: PropTypes.object,
  };

  static defaultProps = {
    styles: {},
  };

  static childContextTypes = {
    styles: PropTypes.object,
  };

  constructor(props) {
    super(props);
    autobind(this);
  }

  getChildContext() {
    return {
      styles: merge({}, defaultStyles, this.props.styles),
    };
  }

  render() {
    return (
      <p>Make this a theme decorator for wizard somehow</p>
    );
  }
}

export default Theme;
