import get from 'lodash.get';

import reduceWizard from './reduce-wizard';
import { NAME } from '../state';

/**
 * Get wizard data
 */
export function getData(state) {
  return state[NAME] || {};
}

export function getNodeErrors(node) {
  const errors = { validation: {}, disabled: [], ...node.errors };

  return (
    errors.disabled.length
    + (errors.required ? 1 : 0)
    + (errors.validation.error ? 1 : 0)
    + (node.children || []).reduce((sum, child) => sum + getNodeErrors(child), 0)
  );
}

export function getPages(schema, state) {
  const pages = reduceWizard(schema, state);

  return pages.map(({ children = [], ...rest }) => {
    const errorCount = children.reduce((res, node) => res + getNodeErrors(node), 0);

    return {
      ...rest,
      errors: errorCount,
      completed: !errorCount,
    };
  });
}

export function getErrorPages(schema, state) {
  const pages = reduceWizard(schema, state);

  return pages.reduce((res, { id, title, type, children = [] }) => ([
    ...res,
    {
      id,
      type,
      title,
      errorNodes: children
        .filter(node => getNodeErrors(node) > 0)
        .map(({
          property,
          heading,
          errors,
        }) => ({ property, heading, errors })),
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
