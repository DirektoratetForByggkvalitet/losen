import PropTypes from 'prop-types';
import React from 'react';

import Block from './blocks/Block';
import Summary from './Summary';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import Main from '../primitives/grid/Main';

export default function ErrorResult({
  children,
  errorPages,
  schema,
  setPage,
  title,
  errorheading,
  errorlead,
}) {
  return (
    <Main result>
      <H1>{errorheading}</H1>
      <Lead>{errorlead}</Lead>
      <SpecificBlock>
        <H1 small>{title}</H1>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        {children.map(block => <Block key={block.property} {...block} />)}
      </SpecificBlock>
    </Main>
  );
}

ErrorResult.defaultProps = {
  children: [],
  errorheading: '',
  errorlead: '',
  schema: [],
  title: '',
};

ErrorResult.propTypes = {
  children: PropTypes.array,
  errorheading: PropTypes.string,
  errorlead: PropTypes.string,
  errorPages: PropTypes.array.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
  title: PropTypes.string,
};
