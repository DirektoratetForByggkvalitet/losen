import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import invariantWizardContext from '../utils';
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
    styles: defaultStyles,
  };

  constructor(props, context = {}) {
    super(props, context);
    // invariantWizardContext(context)
  }

  render() {
    const { schema, styles } = this.props;

    return (
      <StyledWizard>
        {schema.map(props => (
          <Page
            title="Page"
            children={item.children}
            {...props}
            styles={styles}
          />
        ))}
      </StyledWizard>
    );
  }
}
