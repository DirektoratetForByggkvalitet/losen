import PropTypes from 'prop-types';
import React from 'react';

import { NodeSummary as StyledNodeSummary } from '../../primitives/Summary';
import { ErrorMessage } from '../../primitives/Errors';
import ErrorIcon from '../graphics/ErrorIcon';

export default function SoftError({ children }) {
  return (
    <StyledNodeSummary>
      {children.map((child) => {
        if (child.heading) {
          return (
            <ErrorMessage>
              <ErrorIcon /> {child.heading}
            </ErrorMessage>
          );
        }
        return null;
      })}
    </StyledNodeSummary>
  );
}

SoftError.propTypes = {
  children: PropTypes.array,
};

SoftError.defaultProps = {
  children: [],
  error: false,
};
