import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNodeValue } from '../../utils/selectors';
import Value from './Value';

const ignoreNodes = ['Text', 'Image'];

function NodeSummary({
  type,
  heading,
  property,
  children,
  value,
  errors,
  errorDescription,
}) {
  if (ignoreNodes.includes(type) || property === undefined) {
    return null;
  }

  if (type === 'Group') {
    return (
      <div>
        {children.map(node => <NodeSummary {...node} />)}
      </div>
    );
  }

  return (
    <div>
      <h4>{heading} [{property}]</h4>

      <Value value={value} />

      {errors.length ? <div style={{ color: 'magenta' }}>{errorDescription}</div> : null}
    </div>
  );
}

NodeSummary.propTypes = {
  type: PropTypes.string.isRequired,
  heading: PropTypes.string,
  property: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.object),
  value: PropTypes.any,
  errors: PropTypes.array,
  errorDescription: PropTypes.string,
};

NodeSummary.defaultProps = {
  heading: '',
  property: '',
  children: [],
  value: undefined,
  errors: [],
  errorDescription: '',
};

const mapStateToProps = (state, { property }) => ({
  value: getNodeValue(property, state),
});

export default connect(mapStateToProps)(NodeSummary);
