import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import autobind from 'react-autobind';

import StyleProvider from './StyleProvider';
import Aside from './Aside';
import Header from './Header';
import Page from './Page';
import reduceWizard from '../utils/reduce-wizard';
import { getPages, getNodeTitles } from '../utils/selectors';
import track from '../utils/tracking';
import Result from './Result';

import Grid from '../primitives/grid/Grid';
import Footer from '../primitives/grid/Footer';
import StyledWizard from '../primitives/Wizard';

class Wizard extends Component {
  static propTypes = {
    wizard: PropTypes.object.isRequired,
    schema: PropTypes.array.isRequired,
    exports: PropTypes.objectOf(PropTypes.func),
    styles: PropTypes.object,
    tableOfContents: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  static defaultProps = {
    styles: {},
    exports: {},
  };

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      result: false,
    };
    autobind(this);
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.page !== prevState.page) {
      track(this.props.schema.filter(item => item.id === this.state.page)[0].title);
    }
  }

  // @todo Consider finding a more elegant way for scrolling..?
  setPage(page, property = null) {
    if (property) {
      setImmediate(() => {
        const element = document.getElementById(property);

        if (!element) {
          return;
        }

        window.scroll(0, element.offsetTop);
      });
    } else {
      window.scrollTo(0, 0);
    }

    this.setState({ page });
  }

  getCurrentIndex() {
    return Math.max(0, this.props.schema.findIndex(({ id }) => id === this.state.page));
  }

  changePage(distance) {
    const schema = this.props.schema;
    const pageIndex = this.getCurrentIndex();

    const newIndex = pageIndex + distance;

    if (newIndex >= schema.length || newIndex < 0) {
      return;
    }

    this.setPage(schema[newIndex].id);
  }

  nextPage = () => this.changePage(1);

  previousPage = () => this.changePage(-1);

  render() {
    const { wizard, styles, schema, tableOfContents, exports } = this.props;
    const pageIndex = this.getCurrentIndex();
    const page = schema[pageIndex];

    return (
      <StyleProvider styles={styles}>
        <StyledWizard>
          <Grid>
            <Header />
            <Aside
              page={page.id}
              setPage={this.setPage}
              title={wizard.meta.title}
              tableOfContents={tableOfContents}
            />
            {page.type === 'Result' ? (
              <Result
                {...page}
                previousPage={this.previousPage}
                pageid={page.id}
                wizard={wizard}
                schema={schema}
                setPage={this.setPage}
                exports={exports}
              />
            ) : (
              <Page
                nextPage={this.nextPage}
                previousPage={this.previousPage}
                pageid={page.id}
                firstPage={schema[0].id === page.id}
                {...page}
              />
            )}
            <Footer>
              <div>{wizard.meta.footer}</div>
            </Footer>
          </Grid>
        </StyledWizard>
      </StyleProvider>
    );
  }
}

const mapStateToProps = (state, { wizard }) => {
  const nodeTitles = getNodeTitles(wizard.schema);

  return {
    tableOfContents: getPages(wizard.schema, state),
    schema: reduceWizard(wizard.schema, state, nodeTitles),
  };
};

export default connect(mapStateToProps)(Wizard);