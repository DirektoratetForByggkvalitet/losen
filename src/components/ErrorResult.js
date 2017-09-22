import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Main from '../primitives/grid/Main';
import { SpecificBlock } from '../primitives/Block';
import Navigation from './Navigation';
import Summary from './Summary';

export default function ErrorResult({ schema, setPage, pageid, previousPage }) {
  return (
    <Main>
      <H2>
        Fett. Du kom til slutten{' '}
        <span role="img" aria-label="victory emoji">
          ✌️
        </span>
      </H2>
      <Lead>
        <em>...men du ække helt ferdig ennå.</em> Nedenfor er noen ting du må fikse
        før du kan få et ordentlig resultat i denne veiviseren.
      </Lead>

      <SpecificBlock>
        <Summary setPage={setPage} pages={schema} />
      </SpecificBlock>

      <Navigation page={pageid} hasPrevious previousPage={previousPage} />
    </Main>
  );
}

ErrorResult.defaultProps = {
  children: [],
  schema: [],
};
ErrorResult.propTypes = {
  setPage: PropTypes.func.isRequired,
  pageid: PropTypes.string.isRequired,
  previousPage: PropTypes.func.isRequired,
  schema: PropTypes.arrayOf(PropTypes.object),
};
