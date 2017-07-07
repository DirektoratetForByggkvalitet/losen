import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import { H2 } from '../primitives/Heading';
import Main from '../primitives/grid/Main';

export default function Page({ title, children = [] }) {
  return (
    <Main>
      <H2>{title}</H2>

      {children.map(block => <Block key={block.property} {...block} />)}
    </Main>
  );
}

Page.defaultProps = {
  title: 'Missing page title',
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
