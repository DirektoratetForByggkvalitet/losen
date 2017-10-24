import PropTypes from 'prop-types';
import React from 'react';

import { TextBlock } from '../../primitives/Block';
import { H2 } from '../../primitives/Heading';
import Html from '../helper/Html';

const Text = ({
  debug,
  heading,
  id,
  text,
  warning = false,
  printonly = false,
  printhide = false,
}) => {
  let title = '';
  if (heading) {
    title = <H2>{heading}</H2>;
  }

  return (
    <TextBlock
      warning={warning}
      debug={debug}
      data-id={id}
      printonly={printonly}
      printhide={printhide}
    >
      {title}
      <Html text={text} />
    </TextBlock>
  );
};

Text.propTypes = {
  debug: PropTypes.bool,
  heading: PropTypes.string,
  id: PropTypes.string,
  printhide: PropTypes.bool,
  printonly: PropTypes.bool,
  text: PropTypes.string.isRequired,
  warning: PropTypes.bool,
};

Text.defaultProps = {
  debug: false,
  heading: '',
  id: null,
  printhide: false,
  printonly: false,
  warning: false,
};

export default Text;
