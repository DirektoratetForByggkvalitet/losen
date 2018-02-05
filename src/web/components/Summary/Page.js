import PropTypes from 'prop-types';
import React from 'react';

import { H2 } from '../../primitives/Heading';
import { PageSummary as StyledPageSummary } from '../../primitives/Summary';
import { SmallButton as Button } from '../../primitives/Button';

import NodeSummary from './Node';

export default function PageSummary({ children, error, goToPage, heading }) {
  return (
    <StyledPageSummary error={error}>
      <H2>
        {heading}{' '}
        <Button type="button" onClick={goToPage}>
          Endre svar
        </Button>
      </H2>
      {children.map(node => <NodeSummary node={node} />)}
    </StyledPageSummary>
  );
}

PageSummary.propTypes = {
  children: PropTypes.array,
  error: PropTypes.bool,
  goToPage: PropTypes.func.isRequired,
  heading: PropTypes.string.isRequired,
};

PageSummary.defaultProps = {
  children: [],
  error: false,
};
