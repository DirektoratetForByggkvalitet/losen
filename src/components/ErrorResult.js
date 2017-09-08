import React from 'react';
import PropTypes from 'prop-types';
import { H2, H3 } from '../primitives/Heading';
import { Lead } from '../primitives/Paragraphs';
import Main from '../primitives/grid/Main';
import Navigation from './Navigation';
import Block from './blocks/Block';

export default function ErrorResult({ errorPages, setPage, pageid, previousPage, children }) {
  return (
    <Main>
      <H2>
        Fett. Du kom til slutten{' '}
        <span role="img" aria-label="victory emoji">
          ✌️
        </span>
      </H2>
      <Lead>
        <em>...men du ække helt ferdig ennå.</em> Nedenfor er noen ting du må fikse før du kan få et
        ordentlig resultat i denne veiviseren.
      </Lead>

      <H3>Husk å fylle ut:</H3>
      {errorPages.map(page =>
        (<div>
          {page.errorNodes.map(node =>
            (<button onClick={() => setPage(page.id, node.property)}>
              <p>
                <strong>
                  {page.title} - {node.heading}
                </strong>
              </p>
              {node.errors.map(error =>
                (<div>
                  {JSON.stringify(error)}
                </div>),
              )}
            </button>),
          )}
        </div>),
      )}
      {children.map(block => <Block key={block.property} {...block} />)}
      <Navigation page={pageid} hasPrevious previousPage={previousPage} />
    </Main>
  );
}

ErrorResult.defaultProps = {
  children: [],
};
ErrorResult.propTypes = {
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  pageid: PropTypes.string.isRequired,
  previousPage: PropTypes.func.isRequired,
  children: PropTypes.array,
};
