import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { getErrorPages } from '../utils/selectors';
import Block from './blocks/Block';
import ErrorResult from './ErrorResult';
import Html from './helper/Html';
import Summary from './Summary';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { MainButton } from '../primitives/Button';
import { SpecificBlock } from '../primitives/Block';
import Main from '../primitives/grid/Main';
import Export from '../primitives/Export';

function Result({
  beforeResult = [],
  children = [],
  debug,
  errorheading,
  errorlead,
  errorPages,
  exporter,
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
        beforeResult={beforeResult}
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

      {beforeResult.map(block => (
        <Block key={block.id} {...block} errorPages={errorPages} setPage={setPage} pages={schema} />
      ))}

      <SpecificBlock>
        {summaryTitle ? <H1 small>{summaryTitle}</H1> : <H1 small>{title}</H1>}
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </SpecificBlock>

      {children.map(block => (
        <Block key={block.id} {...block} errorPages={errorPages} setPage={setPage} pages={schema} />
      ))}

      <Export exporter={exporter}>
        <MainButton type="button" onClick={() => window.print()}>
          Skriv ut
        </MainButton>
      </Export>
    </Main>
  );
}

Result.propTypes = {
  beforeResult: PropTypes.array,
  children: PropTypes.array,
  debug: PropTypes.bool,
  errorheading: PropTypes.string,
  errorlead: PropTypes.string,
  errorPages: PropTypes.array.isRequired,
  exporter: PropTypes.string,
  heading: PropTypes.string,
  lead: PropTypes.string,
  pageid: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
  summaryTitle: PropTypes.string,
  title: PropTypes.string,
};

Result.defaultProps = {
  beforeResult: [],
  children: [],
  debug: false,
  errorheading: '',
  errorlead: '',
  exporter: null,
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
