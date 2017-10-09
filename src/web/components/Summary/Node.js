import React from 'react';
import PropTypes from 'prop-types';

import DefaultValueSummary from './value';
import FetchOrg from './value/FetchOrg';

import { H3 } from '../../primitives/Heading';
import { ErrorMessage } from '../../primitives/Errors';
import { NodeSummary as StyledNodeSummary } from '../../primitives/Summary';

import ErrorIcon from '../graphics/ErrorIcon';

const ignoreNodes = ['Text', 'Image'];
const overrideValueSummary = { FetchOrg };

export default function NodeSummary({ node }) {
  const {
    type,
    heading,
    property,
    children,
    errors,
    errorDescription,
    currentValue,
  } = node;

  if (ignoreNodes.includes(type) || property === undefined) {
    return null;
  }

  if (type === 'Group') {
    return (
      <div>
        {children.map(child => <NodeSummary value={child.currentValue} node={child} />)}
      </div>
    );
  }

  const ValueSummary = overrideValueSummary[type] || DefaultValueSummary;

  return (
    <StyledNodeSummary>
      <H3>{heading}</H3>
      <ValueSummary value={currentValue} node={node} />
      {errors.validation.error ? <ErrorMessage><ErrorIcon />{errors.validation.message}</ErrorMessage> : null}
      {errors.disabled.length ? <ErrorMessage><ErrorIcon /> {errorDescription}</ErrorMessage> : null}
    </StyledNodeSummary>
  );
}

NodeSummary.propTypes = {
  node: PropTypes.shape({
    type: PropTypes.string.isRequired,
    heading: PropTypes.string,
    property: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object),
    currentValue: PropTypes.any,
    errors: PropTypes.object,
    errorDescription: PropTypes.string,
  }).isRequired,
};

NodeSummary.defaultProps = {
  heading: '',
  property: '',
  children: [],
  currentValue: undefined,
  errors: {},
  errorDescription: '',
};
