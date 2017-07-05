import React from 'react';
import PropTypes from 'prop-types';
import Page from './Page';

export default function Wizard({ schema }) {
  return (
    <div>
      {schema.map(item => <Page title="Page" children={item.children} />)}
    </div>
  );
}

Wizard.defaultProps = {
  schema: '',
};

Wizard.propTypes = {
  schema: PropTypes.array,
};
