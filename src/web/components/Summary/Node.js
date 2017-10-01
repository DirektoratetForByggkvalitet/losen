import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { getNodeValue } from '../../utils/selectors';
import DefaultValueSummary from './value';
import FetchOrg from './value/FetchOrg';

import { H5 } from '../../primitives/Heading';
import { ErrorMessage } from '../../primitives/Errors';
import { NodeSummary as StyledNodeSummary } from '../../primitives/Summary';

import ErrorIcon from '../graphics/ErrorIcon';

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
    <StyledNodeSummary>
      <H5>{heading}</H5>
      <ValueSummary value={value} />
      {errors.length ? <ErrorMessage><ErrorIcon /> {errorDescription}</ErrorMessage> : null}
    </StyledNodeSummary>
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
