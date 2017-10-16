import PropTypes from 'prop-types';
import React from 'react';

import Block from './blocks/Block';
import Summary from './Summary';

import { H1 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import { SpecificBlock } from '../primitives/Block';
import Main from '../primitives/grid/Main';

export default function ErrorResult({ children, errorPages, schema, setPage }) {
  return (
    <Main result>
      <H1>
        Du har ikke svart på alle spørsmålene
      </H1>
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
  schema: PropTypes.arrayOf(PropTypes.object),
  setPage: PropTypes.func.isRequired,
};
