import React from 'react';
import PropTypes from 'prop-types';

import AsideStyle from '../primitives/grid/Aside';
import AsideItem from './AsideItem';

export default function Aside(tableOfContents) {
  const toc = [];
  /* eslint-disable */
  for (const key in tableOfContents) {
    /* eslint-enable */
    if (Object.prototype.hasOwnProperty.call(tableOfContents, key)) {
      toc.push(<AsideItem key={key} id={key} title={tableOfContents[key].title} />);
    }
  }
  return (
    <AsideStyle>
      {toc}
    </AsideStyle>
  );
}

Aside.defaultProps = {
  title: 'Missing page title',
};

Aside.propTypes = {
  title: PropTypes.string,
};
