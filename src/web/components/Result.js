import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import hasSoftError from '../utils/has-soft-error';
import getResultText from '../utils/get-result-text';
import { getErrorPages } from '../utils/selectors';
import Block from './blocks/Block';
import ExportData from './ExportData';
import Html from './helper/Html';
import Summary from './Summary';

import { H1, H2 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { MainButton } from '../primitives/Button';
import { SpecificBlock, TextBlock } from '../primitives/Block';
import Main from '../primitives/grid/Main';
import Export from '../primitives/Export';
import PDFButton from './PDFButton';

function Result(props) {
  const {
    children = [],
    debug,
    errorPages,
    exporter,
    heading,
    lead,
    exports,
    pageid,
    schema,
    setPage,
    summaryTitle,
    title,
  } = props;

  const incomplete = errorPages.length > 0;
  const hasSoftErrors = schema.filter(page => hasSoftError(page)).length > 0;

  const resultHeading = getResultText(heading, incomplete, hasSoftErrors);
  const resultLead = getResultText(lead, incomplete, hasSoftErrors);

  return (
    <Main result debug={debug} data-id={pageid} id="main">
      <H1 result>{resultHeading}</H1>
      <Lead result>
        <Html text={resultLead} />
      </Lead>

      {children.map(block => (
        <Block key={block.id} {...block} errorPages={errorPages} setPage={setPage} pages={schema} />
      ))}

      <SpecificBlock>
        {summaryTitle ? <H1 small>{summaryTitle}</H1> : <H1 small>{title}</H1>}
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </SpecificBlock>

      {!incomplete && exporter ? (
        <TextBlock>
          <H2>Takk for at du gjennomførte veiviseren!</H2>
          <Lead>Du kan kopiere svarene dine, eller skrive ut resultatsiden.</Lead>
        </TextBlock>
      ) : null}

      <PDFButton />

      {!incomplete ? (
        <Export exporter={exporter}>
          {exporter && exports[exporter] ? <ExportData exporter={exports[exporter]} /> : null}
          <MainButton type="button" onClick={() => window.print()}>
            Skriv ut
          </MainButton>
        </Export>
      ) : null}
    </Main>
  );
}

Result.propTypes = {
  children: PropTypes.array,
  debug: PropTypes.bool,
  errorPages: PropTypes.array.isRequired,
  exporter: PropTypes.string,
  exports: PropTypes.objectOf(PropTypes.func),
  heading: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      complete: PropTypes.string.isRequired,
      completeWithError: PropTypes.string.isRequired,
      incomplete: PropTypes.string.isRequired,
      incompleteWithError: PropTypes.string.isRequired,
    }).isRequired,
  ]),
  lead: PropTypes.oneOfType([
    PropTypes.string.isRequired,
    PropTypes.shape({
      complete: PropTypes.string.isRequired,
      completeWithError: PropTypes.string.isRequired,
      incomplete: PropTypes.string.isRequired,
      incompleteWithError: PropTypes.string.isRequired,
    }),
  ]),
  pageid: PropTypes.string.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
  summaryTitle: PropTypes.string,
  title: PropTypes.string,
};

Result.defaultProps = {
  children: [],
  debug: false,
  errorheading: '',
  errorlead: '',
  exporter: null,
  exports: {},
  heading: 'Missing page heading',
  lead: '',
  schema: [],
  summaryTitle: '',
  title: null,
};

const mapStateToProps = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
