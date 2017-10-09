import React from 'react';
import PropTypes from 'prop-types';
import { H2 } from '../../primitives/Heading';
import { SmallButton as Button } from '../../primitives/Button';
import { PageSummary as StyledPageSummary } from '../../primitives/Summary';

import NodeSummary from './Node';

export default function PageSummary({ goToPage, error, heading, children }) {
  return (
    <StyledPageSummary error={error}>
      <H2>{heading} <Button onClick={goToPage}>Endre svar</Button></H2>
      {children.map(node => <NodeSummary node={node} />)}
    </StyledPageSummary>
  );
}

PageSummary.propTypes = {
  goToPage: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.array,
  error: PropTypes.bool,
};

PageSummary.defaultProps = {
  children: [],
  error: false,
};
