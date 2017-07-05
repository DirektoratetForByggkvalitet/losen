import React from 'react';
import PropTypes from 'prop-types';
import Block from './blocks/Block';

export default function Page({ title, children }) {
  return (
    <div>
      <h2>
        {title}
      </h2>
      {children.map(block => <Block block={block} type={block['@type']} />)}
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
