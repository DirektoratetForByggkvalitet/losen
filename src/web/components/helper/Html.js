import React from 'react';
import PropTypes from 'prop-types';

import StyledHtml from '../../primitives/Html';
import { H2, H3 } from '../../primitives/Heading';

export default function Html({ text, inline, h2, h3 }) {
  if (!text) {
    return null;
  }
  if (h2) {
    // eslint-disable-next-line react/no-danger
    return <H2 inline={inline} dangerouslySetInnerHTML={{ __html: text }} />;
  }
  if (h3) {
    // eslint-disable-next-line react/no-danger
    return <H3 inline={inline} dangerouslySetInnerHTML={{ __html: text }} />;
  }
  // eslint-disable-next-line react/no-danger
  return <StyledHtml inline={inline} dangerouslySetInnerHTML={{ __html: text }} />;
}

Html.defaultProps = {
  text: '',
  inline: false,
  h2: false,
  h3: false,
};

Html.propTypes = {
  text: PropTypes.string,
  inline: PropTypes.bool,
  h2: PropTypes.bool,
  h3: PropTypes.bool,
};
