import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNodeValue } from '../../utils/selectors';
import DefaultValueSummary from './value';
import FetchOrg from './value/FetchOrg';

const ignoreNodes = ['Text', 'Image'];
const overrideValueSummary = { FetchOrg };

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
        {children.map(node => <ConnectedNodeSummary {...node} />)}
      </div>
    );
  }

  const ValueSummary = overrideValueSummary[type] || DefaultValueSummary;

  return (
    <div>
      <h4>{heading} [{property}]</h4>

      <ValueSummary value={value} />

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

const mapStateToProps = (state, props) => ({
  value: getNodeValue(props.property, state),
});

const ConnectedNodeSummary = connect(mapStateToProps)(NodeSummary);

export default ConnectedNodeSummary;
