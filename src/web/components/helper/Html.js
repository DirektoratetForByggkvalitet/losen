import React from 'react';
import PropTypes from 'prop-types';

import StyledHtml from '../../primitives/Html';

export default function Html({ text }) {
  if (!text) {
    return null;
  }

  // eslint-disable-next-line react/no-danger
  return <StyledHtml dangerouslySetInnerHTML={{ __html: text }} />;
}

Html.defaultProps = {
  text: '',
};

Html.propTypes = {
  text: PropTypes.string,
};
