import React from 'react';
import PropTypes from 'prop-types';

export function injectStyles(Component) {
  function StyledComponent(props, { styles }) {
    return <Component {...props} styles={styles} />;
  }

  StyledComponent.contextTypes = {
    styles: PropTypes.object,
  };

  return StyledComponent;
}

export function foo() {}
