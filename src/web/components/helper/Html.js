import React from 'react';
import PropTypes from 'prop-types';

import StyledHtml from '../../primitives/Html';

export default function Html({ text, inline }) {
  if (!text) {
    return null;
  }

  // eslint-disable-next-line react/no-danger
  return <StyledHtml inline dangerouslySetInnerHTML={{ __html: text }} />;
}

Html.defaultProps = {
  text: '',
  inline: false,
};

Html.propTypes = {
  text: PropTypes.string,
  inline: PropTypes.bool,
};
