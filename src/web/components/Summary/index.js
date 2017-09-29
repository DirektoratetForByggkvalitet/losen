import React from 'react';
import PropTypes from 'prop-types';

import PageSummary from './Page';

import { H3 } from '../../primitives/Heading';
import { P } from '../../primitives/Paragraphs';

export default function Summary({ errorPages, setPage, pages }) {
  return (
    <div>
      <H3>Se over og fullfør</H3>
      <P>Les nøye gjennom før du fortsetter. Når du trykker fullfør vil du motta erklæringen på epost. Den må du skrive ut, signere og sende videre til ansvarlig søker. Ansvarlig søker vil sende erklæringen videre til kommunen sammen med sin gjennomføringsplan.</P>
      {pages.filter(({ type }) => type === 'Page').map(page => (
        <PageSummary
          error={!!errorPages.find(({ id }) => page.id === id)}
          goToPage={() => setPage(page.id)}
          {...page}
        />
      ))}
    </div>
  );
}

Summary.propTypes = {
  errorPages: PropTypes.array.isRequired,
  setPage: PropTypes.func.isRequired,
  pages: PropTypes.array,
};

Summary.defaultProps = {
  pages: [],
};
