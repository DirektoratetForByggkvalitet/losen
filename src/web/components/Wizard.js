import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Modal from './helper/Modal';
import { NAME } from '../state';

import { getTitle, getNodeTitles, getData } from '../utils/selectors';
import getPages from '../utils/get-pages';

import { setData } from '../state/actions';
import Nav from './Nav';
import Page from './Page';
import reduceWizard from '../utils/reduce-wizard';
import Result from './Result';
import SkipLink from './helper/SkipLink';
import StyleProvider from './StyleProvider';
import track from '../utils/tracking';
import beforeUnloadHandler from '../utils/before-unload-handler';
import validateSchema from '../../shared/utils/validator';

import Grid from '../primitives/grid/Grid';
import FocusWrapper from '../primitives/grid/FocusWrapper';
import StyledWizard from '../primitives/Wizard';

class Wizard extends Component {
  static propTypes = {
    data: PropTypes.object,
    debug: PropTypes.bool,
    warningBeforeUnload: PropTypes.bool,
    exports: PropTypes.objectOf(PropTypes.func),
    schema: PropTypes.array.isRequired,
    setData: PropTypes.func.isRequired,
    showIntro: PropTypes.func,
    styles: PropTypes.object,
    title: PropTypes.string.isRequired,
    tableOfContents: PropTypes.arrayOf(PropTypes.object).isRequired,
    translations: PropTypes.objectOf(
      PropTypes.shape({
        key: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        tags: PropTypes.shape({
          description: PropTypes.string,
          heading: PropTypes.string,
          image: PropTypes.shape({
            small: PropTypes.string.isRequired,
            large: PropTypes.string.isRequired,
          }),
          tooltips: PropTypes.string,
        }),
      }),
    ),
    wizard: PropTypes.object.isRequired,
    showResetModal: PropTypes.bool,
  };

  static defaultProps = {
    data: {},
    debug: false,
    warningBeforeUnload: true,
    exports: {},
    showIntro: () => {},
    styles: {},
    translations: {},
    showResetModal: true,
  };

  constructor(props) {
    super(props);
    const { $computed, ...wizardData } = props.data[NAME] || {};

    this.state = {
      page: 0,
      result: false,
      showResetModal: props.showResetModal && !!Object.keys(wizardData).length,
    };

    this.pageWrapper = null;

    if (wizardData.page) {
      this.setPage(wizardData.page);
    }

    this.trackPage(true);

    this.helper();
  }

  componentDidMount = () => {
    const { warningBeforeUnload } = this.props;
    if (warningBeforeUnload) {
      window.addEventListener('beforeunload', beforeUnloadHandler);
    }
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (this.state.page !== prevState.page) {
      this.trackPage();
      if (this.pageWrapper) this.pageWrapper.focus(); // Move keyboard focus to wrapper
    }
  }

  componentWillUnmount = () => {
    const { warningBeforeUnload } = this.props;
    if (warningBeforeUnload) {
      window.removeEventListener('beforeunload', beforeUnloadHandler);
    }
  };

  // @todo Consider finding a more elegant way for scrolling..?
  setPage = (page, property = null) => {
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
    this.props.setData('page', page);
    this.setState({ page });
  }

  getCurrentIndex = () => Math.max(
    0,
    this.props.schema.findIndex(({ id }) => id === getData(this.props.data).page),
  )

  helper = () => {
    if (!console || window.location.hostname !== 'localhost') {
      return;
    }

    const errors = validateSchema(this.props.wizard);

    if (!errors.length) {
      // eslint-disable-next-line no-console
      console.log('🌈  The schema is ok');
    } else {
      // eslint-disable-next-line no-console
      console.warn('🚒  There seems to be something wrong with your schema 👇\n');

      errors.forEach(({ path = [], id, error }) => {
        // eslint-disable-next-line no-console
        console.warn(`${path.join('.')}${id ? ` (${id})` : ''}:
${error}
    `);
      });
    }
  }

  trackPage = (first) => {
    const firstPage = this.props.wizard.schema[0];

    /**
     * Don't track if we have no page. No page, no question.
     * Probably something wrong with the schema...
     */
    if (!firstPage) { return; }

    if (first) {
      track(
        this.props.wizard.meta.name,
        firstPage.id,
        firstPage.heading,
      );
    } else {
      const page = (this.props.schema || []).filter(item => item.id === this.state.page)[0];

      if (page) {
        track(this.props.wizard.meta.name, page.id, page.heading);
      }
    }
  }

  changePage = (distance) => {
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
    const {
      debug,
      exports,
      schema,
      showIntro,
      styles,
      tableOfContents,
      wizard,
      translations,
      title,
    } = this.props;

    const { showResetModal } = this.state;

    const pageIndex = this.getCurrentIndex();
    const page = schema[pageIndex];
    const lastPage = pageIndex + 1 === schema.length;
    const firstPage = pageIndex === 0;
    const nextPageIsResult = schema[pageIndex + 1]
      ? schema[pageIndex + 1].type === 'Result'
      : false;

    return (
      <StyleProvider styles={styles}>
        <StyledWizard>
          {showResetModal && <Modal showIntro={showIntro} />}
          <Grid>
            <SkipLink />
            <Nav
              page={(page && page.id) || null}
              setPage={this.setPage}
              heading={title}
              tableOfContents={tableOfContents}
              showIntro={showIntro}
              translations={translations}
            />
            <FocusWrapper tabIndex="-1" innerRef={e => (this.pageWrapper = e)}>
              {page && page.type === 'Result' ? (
                <Result
                  {...page}
                  previousPage={this.previousPage}
                  debug={debug}
                  pageid={page.id}
                  wizard={wizard}
                  title={title}
                  schema={schema}
                  setPage={this.setPage}
                  exports={exports}
                />
              ) : (
                page && <Page
                  firstPage={firstPage}
                  lastPage={lastPage}
                  nextPage={this.nextPage}
                  previousPage={this.previousPage}
                  debug={debug}
                  nextPageIsResult={nextPageIsResult}
                  pageid={page.id}
                  {...page}
                />
              )}
            </FocusWrapper>
          </Grid>
        </StyledWizard>
      </StyleProvider>
    );
  }
}

const mapStateToProps = (state, { wizard, translations }) => {
  const nodeTitles = getNodeTitles(wizard.schema, translations, state);

  const schema = reduceWizard(wizard.schema, state, nodeTitles, translations);

  return {
    schema,
    debug: !!window.location.search.match('debug'),
    tableOfContents: getPages(schema, nodeTitles),
    title: getTitle(state, wizard, translations),
    data: state,
  };
};

export default connect(
  mapStateToProps,
  dispatch => bindActionCreators({ setData }, dispatch),
)(Wizard);
