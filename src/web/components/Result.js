import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import hasSoftError from '../utils/has-soft-error';
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

function Result({
  children = [],
  debug,
  errorPages,
  exporter,
  exports,
  heading,
  lead,
  pageid,
  schema,
  setPage,
  summaryTitle,
  title,
}) {
  const incomplete = errorPages.length > 0;
  const hasSoftErrors = schema.filter(page => hasSoftError(page)).length > 0;

  let resultHeading = '';
  let resultLead = '';

  if (incomplete && hasSoftErrors) {
    resultHeading = heading.incompleteWithError;
    resultLead = lead.incompleteWithError;
  } else if (incomplete && !hasSoftErrors) {
    resultHeading = heading.incomplete;
    resultLead = lead.incomplete;
  } else if (hasSoftErrors) {
    resultHeading = heading.completeWithError;
    resultLead = lead.completeWithError;
  } else {
    resultHeading = heading.complete;
    resultLead = lead.complete;
  }

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

      {!incomplete ? <Export exporter={exporter}>
        {exporter && exports[exporter] ? <ExportData exporter={exports[exporter]} /> : null}
        <MainButton type="button" onClick={() => window.print()}>
          Skriv ut
        </MainButton>
      </Export> : null}
    </Main>
  );
}

Result.propTypes = {
  children: PropTypes.array,
  debug: PropTypes.bool,
  errorPages: PropTypes.array.isRequired,
  exporter: PropTypes.string,
  exports: PropTypes.objectOf(PropTypes.func),
  heading: PropTypes.shape({
    complete: PropTypes.string.isRequired,
    completeWithError: PropTypes.string.isRequired,
    incomplete: PropTypes.string.isRequired,
    incompleteWithError: PropTypes.string.isRequired,
  }),
  lead: PropTypes.shape({
    complete: PropTypes.string.isRequired,
    completeWithError: PropTypes.string.isRequired,
    incomplete: PropTypes.string.isRequired,
    incompleteWithError: PropTypes.string.isRequired,
  }),
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
