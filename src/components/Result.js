import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import Navigation from './Navigation';
import { H2 } from '../primitives/Heading';
import Main from '../primitives/grid/Main';

export default function Result({ previousPage, title, children = [], pageid, lead }) {
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
};

Result.propTypes = {
  title: PropTypes.string,
  lead: PropTypes.string,
  children: PropTypes.array.isRequired,
  pageid: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
};
