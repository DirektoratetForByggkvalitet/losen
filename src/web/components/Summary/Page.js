import React from 'react';
import PropTypes from 'prop-types';
import { H3 } from '../../primitives/Heading';
import { SmallButton as Button } from '../../primitives/Button';
import { PageSummary as StyledPageSummary } from '../../primitives/Summary';

import NodeSummary from './Node';

export default function PageSummary({ goToPage, error, title, children }) {
  return (
    <StyledPageSummary error={error}>
      <H3>{title} <Button onClick={goToPage}>Endre svar</Button></H3>
      {children.map(node => <NodeSummary {...node} />)}
    </StyledPageSummary>
  );
}

PageSummary.propTypes = {
  goToPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
  error: PropTypes.bool,
};

PageSummary.defaultProps = {
  children: [],
  error: false,
};
