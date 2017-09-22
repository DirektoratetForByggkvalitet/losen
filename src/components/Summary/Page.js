import React from 'react';
import PropTypes from 'prop-types';

import NodeSummary from './Node';

export default function PageSummary({ goToPage, error, title, children }) {
  return (
    <div style={{
      border: '1px solid hotpink',
      ...(
        error
          ? {
            borderLeft: '9px solid purple',
            paddingLeft: '10px',
          }
          : {}
      ),
    }}
    >
      <h3>Side: {title}</h3>
      <button onClick={goToPage}>Endre</button>
      {children.map(node => <NodeSummary {...node} />)}
    </div>
  );
}

PageSummary.propTypes = {
  goToPage: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.array,
  error: PropTypes.bool,
};

PageSummary.defaultProps = {
  children: [],
  error: false,
};
