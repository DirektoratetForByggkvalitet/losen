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
import { getPages } from '../utils/reducers';
import Result from './Result';

import Grid from '../primitives/grid/Grid';
import Footer from '../primitives/grid/Footer';
import StyledWizard from '../primitives/Wizard';

class Wizard extends Component {
  static propTypes = {
    wizard: PropTypes.object,
    styles: PropTypes.object,
    tableOfContents: PropTypes.arrayOf(PropTypes.object).isRequired,
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

  setPage(page) {
    this.setState({ page });
  }

  getCurrentIndex() {
    return Math.max(0, this.props.wizard.schema.findIndex(
      ({ id }) => id === this.state.page,
    ));
  }

  changePage(distance) {
    const schema = this.props.wizard.schema;
    const pageIndex = this.getCurrentIndex();

    const newIndex = pageIndex + distance;

    if (newIndex >= schema.length || newIndex < 0) {
      return;
    }

    this.setState({
      page: schema[newIndex].id,
    });
  }

  nextPage = () => this.changePage(1)

  previousPage = () => this.changePage(-1)

  render() {
    const { wizard, wizard: { schema = [] }, tableOfContents } = this.props;
    const pageIndex = this.getCurrentIndex();
    const page = schema[pageIndex];

    return (
      <StyledWizard>
        <Grid>
          <Header />
          <Aside page={page.id} setPage={this.setPage} tableOfContents={tableOfContents} />
          {page.type === 'Result'
            ? <Result previousPage={this.previousPage} pageid={page.id} {...page} />
            : <Page
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              pageid={page.id}
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
  tableOfContents: getPages(props.wizard.schema, state),
  schema: reduceWizard(props.wizard.schema, state),
});

export default connect(mapStateToProps)(Wizard);
