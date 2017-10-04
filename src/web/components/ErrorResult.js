import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Main from '../primitives/grid/Main';
import { SpecificBlock } from '../primitives/Block';
import Summary from './Summary';
import Block from './blocks/Block';

export default function ErrorResult({ errorPages, schema, setPage, children }) {
  return (
    <Main>
      <H2>
        Du har ikke svart på alle spørsmålene
      </H2>
      <Lead>
        Du må fullføre alle stegene i veiviseren for å få et resultat. Under ser du hvilke spørsmål som mangler svar. Hvis du ønsker å endre noe, kan du klikke deg inn på hvert steg i oppsummeringen nedenfor.
      </Lead>

      <SpecificBlock>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
        {children.map(block => <Block key={block.property} {...block} />)}
      </SpecificBlock>
    </Main>
  );
}

ErrorResult.defaultProps = {
  children: [],
  schema: [],
};

ErrorResult.propTypes = {
  children: PropTypes.array,
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
};
