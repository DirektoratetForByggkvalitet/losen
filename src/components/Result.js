import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import { H2 } from '../primitives/Heading';
import Main from '../primitives/grid/Main';

export default function Result({ title, children = [] }) {
  return (
    <Main>
      <H2>{title}</H2>

      {children.map(block => <Block key={block.property} {...block} />)}
    </Main>
  );
}

Result.defaultProps = {
  title: 'Missing page title',
};

Result.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
