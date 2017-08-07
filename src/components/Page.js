import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import Navigation from './Navigation';
import { H2 } from '../primitives/Heading';
import Main from '../primitives/grid/Main';

export default function Page({ nextPage, previousPage, title, children = [], pageid }) {
  return (
    <Main>
      <H2>
        {title}
      </H2>
      {children.map(block => <Block key={block.property} {...block} />)}
      <Navigation page={pageid} nextPage={nextPage} previousPage={previousPage} />
    </Main>
  );
}

Page.defaultProps = {
  title: 'Missing page title',
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
  pageid: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
};
