import React from 'react';
import PropTypes from 'prop-types';

import StyledAside from '../primitives/grid/Aside';
import { H1 } from '../primitives/Heading';
import AsideItem from './AsideItem';
import AsideResult from './AsideResult';

// @todo Use a more robust id for the page
export default function Aside({ page: currentPage = {}, setPage, tableOfContents }) {
  return (
    <StyledAside>
      <H1 small>Tittel på veiviseren</H1>
      {tableOfContents.map(page => (
        page.type === 'Result'
        ? (
          <AsideResult
            key={page.id}
            id={page.id}
            title={page.title}
            setPage={setPage}
            done={!page.errors}
            active={page.id === currentPage}
          />
        )
        : (
          <AsideItem
            key={page.id} // eslint-disable-line react/no-array-index-key
            id={page.id}
            title={page.title}
            setPage={setPage}
            done={!page.errors}
            active={page.id === currentPage}
          />
        )
      ))}
    </StyledAside>
  );
}

Aside.defaultProps = {
  title: 'Missing page title',
  page: 0,
};

Aside.propTypes = {
  setPage: PropTypes.func.isRequired,
  tableOfContents: PropTypes.array.isRequired,
  page: PropTypes.number,
};
