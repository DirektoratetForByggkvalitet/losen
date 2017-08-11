import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import Aside from './Aside';
import defaultStyles from '../styles';
import Header from './Header';
import Page from './Page';
import reduceWizard from '../utils/reduce-wizard';
import Result from './Result';

import Grid from '../primitives/grid/Grid';
import Footer from '../primitives/grid/Footer';
import StyledWizard from '../primitives/Wizard';

class Wizard extends Component {
  static propTypes = {
    wizard: PropTypes.object,
    styles: PropTypes.object,
  };

  static defaultProps = {
    wizard: '',
    styles: {},
    schema: '',
  };

  static childContextTypes = {
    styles: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      result: false,
    };
    autobind(this);
  }

  getChildContext() {
    return {
      styles: merge({}, defaultStyles, this.props.styles),
    };
  }

  setPage(number) {
    this.setState({
      page: number,
    });
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1,
    });
  }

  previousPage() {
    this.setState({
      page: this.state.page - 1,
    });
  }

  render() {
    const { wizard } = this.props;
    const page = wizard.schema[this.state.page];

    return (
      <StyledWizard>
        <Grid>
          <Header />
          <Aside page={this.state.page} setPage={this.setPage} tableOfContents={wizard.schema} />
          {page.type === 'Result'
            ? <Result previousPage={this.previousPage} pageid={this.state.page} {...page} />
            : <Page
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              pageid={this.state.page}
              {...page}
            />}
          <Footer>
            <div>
              {wizard.meta.footer}
            </div>
          </Footer>
        </Grid>
      </StyledWizard>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tableOfContents: props.wizard,
  schema: reduceWizard(props.wizard.schema, state),
});

export default connect(mapStateToProps)(Wizard);
