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
    schema: PropTypes.array,
    tableOfContents: PropTypes.array,
    styles: PropTypes.object,
  };

  static defaultProps = {
    schema: '',
    tableOfContents: '',
    styles: {},
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
    const { schema, tableOfContents } = this.props;
    const page = schema[this.state.page];

    return (
      <StyledWizard>
        <Grid>
          <Header />
          <Aside setPage={this.setPage} tableOfContents={tableOfContents} />
          {page.type === 'Result'
            ? <Result
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              pageid={this.state.page}
              {...page}
            />
            : <Page
              nextPage={this.nextPage}
              previousPage={this.previousPage}
              pageid={this.state.page}
              {...page}
            />}
          <Footer>
            <div>Your footer here</div>
          </Footer>
        </Grid>
      </StyledWizard>
    );
  }
}

const mapStateToProps = (state, props) => ({
  tableOfContents: props.schema,
  schema: reduceWizard(props.schema, state),
});

export default connect(mapStateToProps)(Wizard);
