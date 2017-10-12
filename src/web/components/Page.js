import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import Navigation from './Navigation';
import Html from './helper/Html';
import Breadcrumbs from '../primitives/Breadcrumbs';
import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Main from '../primitives/grid/Main';

export default function Page({
  nextPage,
  previousPage,
  heading,
  children = [],
  pageid,
  firstPage,
  lead,
  debug,
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
  heading: 'Missing page heading',
  lead: '',
  debug: false,
};

Page.propTypes = {
  heading: PropTypes.string,
  lead: PropTypes.string,
  debug: PropTypes.bool,
  children: PropTypes.array.isRequired,
  pageid: PropTypes.string.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  firstPage: PropTypes.bool.isRequired,
};
