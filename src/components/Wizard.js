import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import invariantWizardContext from '../utils';
import Page from './Page';
import defaultStyles from '../styles';

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
      <div>
        {schema.map(pages => <Page {...pages} styles={styles} />)}
      </div>
    );
  }
}
