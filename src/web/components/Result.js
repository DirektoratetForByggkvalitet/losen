import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react';

import { getErrorPages } from '../utils/selectors';
import Block from './blocks/Block';
import ErrorResult from './ErrorResult';
import ExportData from './ExportData';
import Html from './helper/Html';
import Summary from './Summary';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { MainButton } from '../primitives/Button';
import { SpecificBlock } from '../primitives/Block';
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
  previousPage,
  schema,
  setPage,
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
      />
    );
  }

  return (
    <Main result debug={debug} data-id={pageid} id="main">
      <H1 result>{heading}</H1>
      <Lead result>
        <Html text={lead} />
      </Lead>

      <SpecificBlock>
        <H1 small>{title}</H1>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </SpecificBlock>

      {children.map(block => (
        <Block
          key={block.id}
          {...block}
          errorPages={errorPages}
          setPage={setPage}
          pages={schema}
        />
      ))}

      {exporter ? (
        <Export>
          <MainButton>Skriv ut</MainButton>
          <br />
          {exporter &&
            exports[exporter] && <ExportData exporter={exports[exporter]} />}
        </Export>
      ) : null}
    </Main>
  );
}

Result.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array,
  debug: PropTypes.bool,
  errorPages: PropTypes.array.isRequired,
  exporter: PropTypes.string,
  exports: PropTypes.objectOf(PropTypes.func),
  heading: PropTypes.string,
  lead: PropTypes.string,
  pageid: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
};

Result.defaultProps = {
  title: null,
  children: [],
  debug: false,
  end: '',
  exporter: null,
  exports: {},
  heading: 'Missing page heading',
  lead: '',
  schema: [],
};

const mapStateToProps = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
