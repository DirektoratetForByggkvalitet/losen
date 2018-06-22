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
        const heading = child.heading || child.text;
        if (heading) {
          return (
            <ErrorMessage>
              <ErrorIcon /> <Html text={heading} inline />
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
