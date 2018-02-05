import PropTypes from 'prop-types';
import React from 'react';

import InformationBlock from '../../primitives/Information';
import { NodeSummary as StyledNodeSummary } from '../../primitives/Summary';
import ErrorIcon from '../graphics/ErrorIcon';
import Html from '../helper/Html';

export default function Information({ text }) {
  if (text) {
    return (
      <StyledNodeSummary>
        <InformationBlock>
          <ErrorIcon triangleFill={'black'} />
          <Html text={text} />
        </InformationBlock>
      </StyledNodeSummary>
    );
  }
  return <p>TEXT MISSING</p>;
}

Information.propTypes = {
  text: PropTypes.string,
};

Information.defaultProps = {
  text: '',
  error: false,
};
