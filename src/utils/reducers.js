import get from 'lodash.get';

import reduceWizard from './reduce-wizard';
import { NAME } from '../state';

/**
 * Validates a node and returns an array of errors (if any)
 *
 * @param string property
 * @param object state
 */
function validateNode(property, state) {
  if (!property) {
    return [];
  }

  // Checks for fields that are required but not provided
  if (typeof get(state[NAME], property) === 'undefined') {
    return [{ type: 'required' }];
  }

  // @todo Implement type checks
  // @todo Implement logical tests

  return [];
}

export function getValidatedSchema(schema, state) {
  const pages = reduceWizard(schema, state);

  return pages.map(page => ({
    ...page,
    children: (page.children || []).map(node => ({
      ...node,
      errors: validateNode(node.property, state),
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
      completed: false,
    };
  });
}
