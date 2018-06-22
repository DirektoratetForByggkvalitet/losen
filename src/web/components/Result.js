import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { getErrorPages } from '../utils/selectors';
import Block from './blocks/Block';
import ErrorResult from './ErrorResult';
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
  errorheading,
  errorlead,
  errorPages,
  exporter,
  exports,
  heading,
  lead,
  pageid,
  previousPage,
  schema,
  setPage,
  summaryTitle,
  title,
}) {
  if (errorPages.length) {
    return (
      <ErrorResult
        schema={schema}
        setPage={setPage}
        page={pageid}
        previousPage={previousPage}
        errorPages={errorPages}
        children={children}
        title={title}
        errorheading={errorheading}
        errorlead={errorlead}
        summaryTitle={summaryTitle}
      />
    );
  }

  return (
    <Main result debug={debug} data-id={pageid} id="main">
      <H1 result>{heading}</H1>
      <Lead result>
        <Html text={lead} />
      </Lead>

      {children.map(block => (
        <Block key={block.id} {...block} errorPages={errorPages} setPage={setPage} pages={schema} />
      ))}

      <SpecificBlock>
        {summaryTitle ? <H1 small>{summaryTitle}</H1> : <H1 small>{title}</H1>}
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </SpecificBlock>

      {exporter ? (
        <TextBlock>
          <H2>Takk for at du gjennomførte veiviseren!</H2>
          <Lead>Du kan kopiere svarene dine, eller skrive ut resultatsiden.</Lead>
        </TextBlock>
      ) : null}

      <Export exporter={exporter}>
        {exporter && exports[exporter] ? <ExportData exporter={exports[exporter]} /> : null}
        <MainButton type="button" onClick={() => window.print()}>
          Skriv ut
        </MainButton>
      </Export>
    </Main>
  );
}

Result.propTypes = {
  children: PropTypes.array,
  debug: PropTypes.bool,
  errorheading: PropTypes.string,
  errorlead: PropTypes.string,
  errorPages: PropTypes.array.isRequired,
  exporter: PropTypes.string,
  exports: PropTypes.objectOf(PropTypes.func),
  heading: PropTypes.string,
  lead: PropTypes.string,
  pageid: PropTypes.string.isRequired,
  previousPage: PropTypes.func.isRequired,
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
