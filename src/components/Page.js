import React from 'react';
import PropTypes from 'prop-types';

import Block from './blocks/Block';
import { H2 } from '../primitives/Heading';

export default function Page({ title, children }) {
  return (
    <div>
      <H2>
        {title}
      </H2>

      {children.map(props => <Block {...props} />)}
    </div>
  );
}

Page.defaultProps = {
  title: 'Page',
};

Page.propTypes = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
};
