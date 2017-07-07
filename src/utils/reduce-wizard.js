/* eslint no-use-before-define: 0 */

import { NAME } from '../state';

const filterSchemaNodes = state => (node) => {
  if (node.type === 'Branch') {
    return true;
  }

  return !node.hidden || !node.hidden(state[NAME]);
};

const reduceBranches = state => (res, node) => {
  if (node.type !== 'Branch') {
    return [...res, node];
  }

  return ([
    ...res,
    ...reduceWizard((
      node.test(state[NAME])
      ? node.branchTruthy
      : node.branchFalsy
    ), state),
  ]);
};

const mapWizardChildren = (state, depth) => (node) => {
  if (!Array.isArray(node.children)) {
    return node;
  }

  return {
    ...node,
    children: reduceWizard(node.children, state, depth + 1),
  };
};

const liftChildrenBranchPages = (res, node) => {
  if (!Array.isArray(node.children) || !node.children.length) {
    return [...res, node];
  }

  if (node.children[node.children.length - 1].type === 'Page') {
    return [
      ...res,
      node,
      node.children.pop(),
    ];
  }

  return [...res, node];
};

export default function reduceWizard(schema, state, depth = 0) {
  return schema
    .filter(filterSchemaNodes(state))
    .reduce(reduceBranches(state), [])
    .map(mapWizardChildren(state, depth))
    .reduce(liftChildrenBranchPages, []);
}
