import PropTypes from 'prop-types';
import React from 'react';

import { TextBlock } from '../../primitives/Block';
import InformationBlock from '../../primitives/Information';
import Html from '../helper/Html';
import ErrorIcon from '../graphics/ErrorIcon';

const Information = ({
  debug,
  heading,
  id,
  text,
  warning = false,
  printonly = false,
  printhide = false,
}) => (
  <TextBlock
    warning={warning}
    debug={debug}
    data-id={id}
    printonly={printonly}
    printhide={printhide}
  >
    <InformationBlock>
      <ErrorIcon triangleFill={'black'} />
      <Html text={heading} h2 />
      <Html text={text} />
    </InformationBlock>
  </TextBlock>
);

Information.propTypes = {
  debug: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  printhide: PropTypes.bool,
  printonly: PropTypes.bool,
  text: PropTypes.string.isRequired,
  warning: PropTypes.bool,
};

Information.defaultProps = {
  debug: false,
  heading: '',
  id: null,
  printhide: false,
  printonly: false,
  warning: false,
};

export default Information;
