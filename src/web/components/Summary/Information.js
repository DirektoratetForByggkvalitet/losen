import PropTypes from 'prop-types';
import React from 'react';

import InformationBlock from '../../primitives/Information';
import { NodeSummary as StyledNodeSummary } from '../../primitives/Summary';
import ErrorIcon from '../graphics/ErrorIcon';
import Html from '../helper/Html';

export default function Information({ heading, text }) {
  if (text) {
    return (
      <StyledNodeSummary>
        <InformationBlock withHeading={Boolean(heading)}>
          {heading ? (
            <div className="headerWrap">
              <ErrorIcon triangleFill={'black'} />
              <Html text={heading} h3 />
            </div>
          ) : (
            <ErrorIcon triangleFill={'black'} />
          )}

          <Html text={text} />
        </InformationBlock>
      </StyledNodeSummary>
    );
  }
  return <p>TEXT MISSING</p>;
}

Information.propTypes = {
  heading: PropTypes.string,
  text: PropTypes.string,
};

Information.defaultProps = {
  text: '',
  heading: undefined,
  error: false,
};
