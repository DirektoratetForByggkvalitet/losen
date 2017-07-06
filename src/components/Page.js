import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import { H2 } from '../primitives/Heading';

export default function Page({ heading, children }) {
  return (
    <div>
      <H2>
        {heading}
      </H2>

      {children.map(props => <Block {...props} />)}
    </div>
  );
}

Page.defaultProps = {
  heading: 'Page',
};

Page.propTypes = {
  heading: PropTypes.string,
  children: PropTypes.array.isRequired,
};
