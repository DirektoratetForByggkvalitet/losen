import PropTypes from 'prop-types';
import React from 'react';

import Block from './blocks/Block';
import Html from './helper/Html';
import Navigation from './Navigation';
import SummaryDetails from './blocks/SummaryDetails';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Main from '../primitives/grid/Main';

export default function Page({
  children = [],
  debug,
  details,
  firstPage,
  lastPage,
  heading,
  lead,
  nextPage,
  pageid,
  previousPage,
  summary,
}) {
  return (
    <Main debug={debug} data-id={pageid} id="main">
      <H1>{heading}</H1>
      <Lead>
        <Html text={lead} />
      </Lead>
      {summary && <SummaryDetails summary={summary} details={details} />}
      {children.map(block => <Block key={block.property} {...block} />)}

      {(!firstPage || !lastPage) && (
        <Navigation
          page={pageid}
          hasPrevious={!firstPage}
          previousPage={previousPage}
          hasNext={!lastPage}
          nextPage={nextPage}
        />
      )}
    </Main>
  );
}

Page.defaultProps = {
  debug: false,
  details: '',
  heading: 'Missing page heading',
  lead: '',
  summary: '',
};

Page.propTypes = {
  children: PropTypes.array.isRequired,
  debug: PropTypes.bool,
  details: PropTypes.string,
  firstPage: PropTypes.bool.isRequired,
  lastPage: PropTypes.bool.isRequired,
  heading: PropTypes.string,
  lead: PropTypes.string,
  nextPage: PropTypes.func.isRequired,
  pageid: PropTypes.string.isRequired,
  previousPage: PropTypes.func.isRequired,
  summary: PropTypes.string,
};
