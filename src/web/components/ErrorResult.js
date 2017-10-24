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
}) {
  return (
    <Main result>
      {/* TODO: Move this to "api" */}
      <H1>Du har ikke svart på alle spørsmålene</H1>
      <Lead>
        Vi kan derfor ikke gi deg svar på om firmaet ditt kan erklære ansvar. Du
        kan se hvilke spørsmål du ikke har svart på i oppsummeringen under. Der
        kan du også klikke deg inn på hvert steg i veiviseren for å legge til og
        endre dine svar.
      </Lead>
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
  schema: [],
  title: '',
};

ErrorResult.propTypes = {
  children: PropTypes.array,
  errorPages: PropTypes.array.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
  title: PropTypes.string,
};
