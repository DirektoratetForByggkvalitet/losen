import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getErrorPages } from '../utils/reducers';

import { H2 } from '../primitives/Heading';
import Main from '../primitives/grid/Main';
import Block from './blocks/Block';
import Navigation from './Navigation';
import ErrorResult from './ErrorResult';

function Result({ errorPages, previousPage, title, children = [], pageid, lead, setPage }) {
  if (errorPages.length) {
    return (
      <ErrorResult
        errorPages={errorPages}
        setPage={setPage}
        page={pageid}
        previousPage={previousPage}
      />
    );
  }

  return (
    <Main>
      <H2>
        {title}
      </H2>
      <p>
        {lead}
      </p>
      {children.map(block => <Block key={block.property} {...block} />)}
      <Navigation page={pageid} hasPrevious previousPage={previousPage} />
    </Main>
  );
}

Result.defaultProps = {
  title: 'Missing page title',
  lead: '',
  children: [],
};

Result.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.array,
  pageid: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  errorPages: PropTypes.array.isRequired,
  wizard: PropTypes.object.isRequired, // eslint-disable-line react/no-unused-prop-types
  setPage: PropTypes.func.isRequired,
};

const mapStateToProps = (state, { wizard }) => ({
  errorPages: getErrorPages(wizard.schema, state),
});

export default connect(mapStateToProps)(Result);
