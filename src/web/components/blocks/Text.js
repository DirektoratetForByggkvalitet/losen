import PropTypes from 'prop-types';
import React from 'react';

import { TextBlock } from '../../primitives/Block';
import Html from '../helper/Html';
import VariableText from '../helper/VariableText';

const Text = ({
  debug,
  heading,
  id,
  text,
  warning = false,
  printonly = false,
  printhide = false,
  variables = false,
}) => {
  let title = '';
  if (heading) {
    title = <Html text={heading} h2 />;
  }
  if (variables) {
    return (
      <TextBlock
        warning={warning}
        debug={debug}
        data-id={id}
        printonly={printonly}
        printhide={printhide}
      >
        <VariableText text={text} data={{ test: 'Not implemented yet' }} />
      </TextBlock>
    );
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
  variables: PropTypes.bool,
  warning: PropTypes.bool,
};

Text.defaultProps = {
  debug: false,
  heading: '',
  text: '',
  id: null,
  printhide: false,
  printonly: false,
  variables: false,
  warning: false,
};

export default Text;
