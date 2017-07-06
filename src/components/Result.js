import React from 'react';
import PropTypes from 'prop-types';

import { H2 } from '../primitives/Heading';

export default function Result({ title, text }) {
  return (
    <div>
      <H2>{title}</H2>
      <div>{text}</div>
    </div>
  );
}

Result.defaultProps = {
  text: '',
};

Result.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
};
