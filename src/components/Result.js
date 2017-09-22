import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getErrorPages } from '../utils/selectors';

import { H2 } from '../primitives/Heading';
import { SpecificBlock } from '../primitives/Block';
import Main from '../primitives/grid/Main';
import Block from './blocks/Block';
import Navigation from './Navigation';
import ErrorResult from './ErrorResult';
import Summary from './Summary';

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
}) {
  if (errorPages.length) {
    return (
      <ErrorResult
        schema={schema}
        setPage={setPage}
        page={pageid}
        previousPage={previousPage}
      />
    );
  }

  return (
    <Main>
      <H2>{title}</H2>
      <p>{lead}</p>

      <SpecificBlock>
        {summary ? <Summary setPage={setPage} pages={schema} /> : null}

        {children.map(block => <Block key={block.property} {...block} />)}
      </SpecificBlock>

      <Navigation page={pageid} hasPrevious previousPage={previousPage} />
    </Main>
  );
}

Result.propTypes = {
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
};

const mapStateToProps = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
