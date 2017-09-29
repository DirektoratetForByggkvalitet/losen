import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getErrorPages } from '../utils/selectors';

import { H2 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import Main from '../primitives/grid/Main';
import Block from './blocks/Block';
import ErrorResult from './ErrorResult';
import Summary from './Summary';
import ExportData from './ExportData';

function Result({
  errorPages,
  previousPage,
  title,
  children = [],
  pageid,
  lead,
  setPage,
  schema,
  summary,
  exports,
  exporter,
}) {
  if (errorPages.length) {
    return (
      <ErrorResult
        schema={schema}
        setPage={setPage}
        page={pageid}
        previousPage={previousPage}
        errorPages={errorPages}
      />
    );
  }

  return (
    <Main>
      <H2>{title}</H2>
      <Lead>{lead}</Lead>

      <SpecificBlock>
        {summary ? (
          <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        ) : null}

        {children.map(block => <Block key={block.property} {...block} />)}

        {exporter &&
          exports[exporter] && <ExportData exporter={exports[exporter]} />}
      </SpecificBlock>
    </Main>
  );
}

Result.propTypes = {
  exports: PropTypes.objectOf(PropTypes.func),
  exporter: PropTypes.string,
  title: PropTypes.string,
  summary: PropTypes.bool,
  lead: PropTypes.string,
  children: PropTypes.array,
  pageid: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  errorPages: PropTypes.array.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
};

Result.defaultProps = {
  title: 'Missing page title',
  lead: '',
  children: [],
  schema: [],
  summary: true,
  exports: {},
  exporter: null,
};

const mapStateToProps = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
