import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import Navigation from './Navigation';
import { H2 } from '../primitives/Heading';
import Main from '../primitives/grid/Main';

export default function Page({ nextPage, previousPage, title, children = [], pageid, lead }) {
  let navigation = (
    <Navigation page={pageid} hasPrevious previousPage={previousPage} hasNext nextPage={nextPage} />
  );
  if (pageid === 0) {
    navigation = <Navigation page={pageid} hasNext nextPage={nextPage} />;
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
      {navigation}
    </Main>
  );
}

Page.defaultProps = {
  title: 'Missing page title',
  lead: '',
};

Page.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.array.isRequired,
  pageid: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};
