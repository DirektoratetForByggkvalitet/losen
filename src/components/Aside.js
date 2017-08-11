import React from 'react';
import PropTypes from 'prop-types';

import StyledAside from '../primitives/grid/Aside';
import AsideItem from './AsideItem';

// @todo Use a more robust id for the page
export default function Aside({ page: currentPage, setPage, tableOfContents }) {
  return (
    <StyledAside>
      {tableOfContents.map((page, index) => (
        <AsideItem
          key={index} // eslint-disable-line react/no-array-index-key
          id={index}
          title={page.title}
          setPage={setPage}
          done={!page.errors}
          active={index.key === currentPage.toString()}
        />
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
