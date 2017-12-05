import PropTypes from 'prop-types';
import React from 'react';
import get from 'lodash.get';

import { H3 } from '../../primitives/Heading';

export default function Sum({ heading, text, values, data }) {
  const sum = values.reduce(
    (accumulator, currentValue) => accumulator + get(data, currentValue),
    0,
  );
  return (
    <div>
      <H3>{heading}</H3>
      <p>
        {text}: {sum}
      </p>
    </div>
  );
}

Sum.defaultProps = {
  text: '',
  heading: '',
  values: [],
};

Sum.propTypes = {
  text: PropTypes.string,
  heading: PropTypes.string,
  values: PropTypes.array,
  data: PropTypes.object.isRequired,
};
