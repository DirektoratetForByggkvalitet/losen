import React, { Component } from 'react';
import PropTypes from 'prop-types';
import merge from 'lodash.merge';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import Page from './Page';
import Result from './Result';
import Navigation from './Navigation';
import Header from './Header';
import defaultStyles from '../styles';
import reduceWizard from '../utils/reduce-wizard';

import Grid from '../primitives/grid/Grid';
import Aside from '../primitives/grid/Aside';
import Footer from '../primitives/grid/Footer';
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
    const { schema } = this.props;
    const page = schema[this.state.page];

    return (
      <StyledWizard>
        <Grid>
          <Header />
          <Aside>Burde du skaffe deg katt?</Aside>

          {page.type === 'Result' ? (
            <Result {...page} />
          ) : (
            <Page {...page} />
          )}

          <Navigation
            page={this.state.page}
            nextPage={this.nextPage}
            previousPage={this.previousPage}
          />
          <Footer>
            <div>Your footer here</div>
          </Footer>
        </Grid>
      </StyledWizard>
    );
  }
}

const mapStateToProps = (state, props) => ({
  schema: reduceWizard(props.schema, state),
});

export default connect(mapStateToProps)(Wizard);
