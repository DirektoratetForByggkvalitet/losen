import get from 'lodash.get';

import reduceWizard from './reduce-wizard';
import { NAME } from '../state';

/**
 * Get wizard data
 */
export function getData(state) {
  return state[NAME] || {};
}

/**
 * Validates a node and returns an array of errors (if any)
 *
 * @param string property
 * @param object state
 */
export function validateNode(node, state) {
  if (!node.property) {
    return [];
  }

  const errors = [];

  // Image and text isn't stored, so no value is required
  if (['Image', 'Text'].includes(node.type)) {
    return errors;
  }

  // Checks for fields that are required but not provided
  if (typeof get(getData(state), node.property) === 'undefined') {
    errors.push({ type: 'required' });
  }

  return errors;
}

export function getValidatedSchema(schema, state) {
  const pages = reduceWizard(schema, state);

  return pages.map(page => ({
    ...page,
    children: (page.children || []).map(node => ({
      ...node,
      errors: validateNode(node, state),
    })),
  }));
}

export function getPages(schema, state) {
  const pages = getValidatedSchema(schema, state);

  return pages.map(({ children, ...rest }) => {
    const errorCount = children.reduce((res, node) => res + node.errors.length, 0);

    return {
      ...rest,
      errors: errorCount,
      completed: !errorCount,
    };
  });
}

export function getErrorPages(schema, state) {
  const pages = getValidatedSchema(schema, state);

  return pages.reduce((res, { id, title, type, children }) => ([
    ...res,
    {
      id,
      type,
      title,
      errorNodes: children.filter(
        ({ errors }) => errors.length,
      ).map(({ property, heading, errors }) => ({ property, heading, errors })),
    },
  ]), []).filter(({ errorNodes }) => errorNodes.length);
}

export function getNodeTitles(schema) {
  return schema.reduce((res, node) => ({
    ...res,
    ...(node.property ? { [node.property]: node.heading || node.property } : {}),
    ...(node.children ? getNodeTitles(node.children) : {}),
    ...(node.branches ? node.branches.reduce((branchesRes, branch) => ({
      ...branchesRes,
      ...getNodeTitles(branch.children),
    }), {}) : {}),
  }), {});
}

export function getNodeTitle(schema, property) {
  return getNodeTitle(schema)[property] || property;
}

export function getNodeValue(property, state) {
  return get(getData(state), property);
}
