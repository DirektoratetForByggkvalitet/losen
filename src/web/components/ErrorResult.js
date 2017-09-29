import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Main from '../primitives/grid/Main';
import { SpecificBlock } from '../primitives/Block';
import Summary from './Summary';

export default function ErrorResult({ errorPages, schema, setPage }) {
  return (
    <Main>
      <H2>
        Fett. Du kom til slutten{' '}
        <span role="img" aria-label="victory emoji">
          ✌️
        </span>
      </H2>
      <Lead>
        <em>...men du ække helt ferdig ennå.</em> Nedenfor er noen ting du må
        fikse før du kan få et ordentlig resultat i denne veiviseren.
      </Lead>

      <SpecificBlock>
        <Summary errorPages={errorPages} setPage={setPage} pages={schema} />
      </SpecificBlock>
    </Main>
  );
}

ErrorResult.defaultProps = {
  children: [],
  schema: [],
};

ErrorResult.propTypes = {
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
};
