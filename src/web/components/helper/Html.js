import React from 'react';
import PropTypes from 'prop-types';

export default function Html({ text }) {
  if (!text) {
    return null;
  }

  // eslint-disable-next-line react/no-danger
  return <div dangerouslySetInnerHTML={{ __html: text }} />;
}

Html.defaultProps = {
  text: '',
};

Html.propTypes = {
  text: PropTypes.string,
};
