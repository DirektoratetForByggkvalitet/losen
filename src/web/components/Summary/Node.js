import PropTypes from 'prop-types';
import React from 'react';

import DefaultValueSummary from './value';
import FetchOrg from './value/FetchOrg';
import Sum from './value/Sum';

import { ErrorMessage } from '../../primitives/Errors';
import Html from '../helper/Html';
import { NodeSummary as StyledNodeSummary } from '../../primitives/Summary';
import ErrorIcon from '../graphics/ErrorIcon';
import SoftError from './SoftError';
import Information from './Information';

const ignoreNodes = ['Text', 'Image'];
const overrideValueSummary = { FetchOrg, Sum };

export default function NodeSummary({ node }) {
  const { children, currentValue, errorDescription, errors, heading, property, type } = node;
  if (type === 'Error') {
    return <SoftError children={children} />;
  }
  if (type === 'Information') {
    return <Information text={node.text} />;
  }
  if (type === 'Group' || type === 'ErrorOk') {
    return (
      <div>
        {children.map(child => (
          <NodeSummary key={child.id} value={child.currentValue} node={child} />
        ))}
      </div>
    );
  }
  if (ignoreNodes.includes(type) || property === undefined) {
    console.log(node);
    return null;
  }

  const ValueSummary = overrideValueSummary[type] || DefaultValueSummary;

  return (
    <StyledNodeSummary>
      <Html text={heading} h3 />
      <ValueSummary value={currentValue} node={node} />
      {errors.validation.error ? (
        <ErrorMessage>
          <ErrorIcon />
          {errors.validation.message}
        </ErrorMessage>
      ) : null}
      {errors.disabled.length ? (
        <ErrorMessage>
          <ErrorIcon /> {errorDescription}
        </ErrorMessage>
      ) : null}
    </StyledNodeSummary>
  );
}

NodeSummary.propTypes = {
  node: PropTypes.shape({
    children: PropTypes.arrayOf(PropTypes.object),
    currentValue: PropTypes.any,
    errorDescription: PropTypes.string,
    errors: PropTypes.object,
    heading: PropTypes.string,
    property: PropTypes.string,
    type: PropTypes.string.isRequired,
  }).isRequired,
};

NodeSummary.defaultProps = {
  children: [],
  currentValue: undefined,
  errorDescription: '',
  errors: {},
  heading: '',
  property: '',
};
