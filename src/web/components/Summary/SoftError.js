import PropTypes from 'prop-types';
import React from 'react';

import { ErrorMessage } from '../../primitives/Errors';
import { NodeSummary as StyledNodeSummary } from '../../primitives/Summary';
import ErrorIcon from '../graphics/ErrorIcon';
import Html from '../helper/Html';

export default function SoftError({ children }) {
  return (
    <StyledNodeSummary>
      {children.map((child) => {
        if (child.heading) {
          return (
            <ErrorMessage>
              <ErrorIcon /> <Html text={child.heading} inline />
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
