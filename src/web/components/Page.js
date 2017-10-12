import PropTypes from 'prop-types';
import React from 'react';

import Block from './blocks/Block';
import Html from './helper/Html';
import Navigation from './Navigation';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Breadcrumbs from '../primitives/Breadcrumbs';
import Main from '../primitives/grid/Main';

export default function Page({
  children = [],
  debug,
  firstPage,
  heading,
  lead,
  nextPage,
  pageid,
  previousPage,
}) {
  let navigation = (
    <Navigation
      page={pageid}
      hasPrevious
      previousPage={previousPage}
      hasNext
      nextPage={nextPage}
    />
  );

  if (firstPage) {
    navigation = <Navigation page={pageid} hasNext nextPage={nextPage} />;
  }

  return (
    <Main debug={debug} data-id={pageid}>
      <Breadcrumbs><a href="/">Veivisere</a> / <a href="/">Erklæring om ansvarsrett</a></Breadcrumbs>
      <H1>{heading}</H1>
      <Lead>
        <Html text={lead} />
      </Lead>
      {children.map(block => <Block key={block.property} {...block} />)}
      {navigation}
    </Main>
  );
}

Page.defaultProps = {
  debug: false,
  heading: 'Missing page heading',
  lead: '',
};

Page.propTypes = {
  children: PropTypes.array.isRequired,
  debug: PropTypes.bool,
  firstPage: PropTypes.bool.isRequired,
  heading: PropTypes.string,
  lead: PropTypes.string,
  nextPage: PropTypes.func.isRequired,
  pageid: PropTypes.string.isRequired,
  previousPage: PropTypes.func.isRequired,
};
