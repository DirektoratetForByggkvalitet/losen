/* eslint no-use-before-define: 0 */

import { NAME } from '../state';

export const filterSchemaNodes = state => (node) => {
  if (node.type === 'Branch') {
    return true;
  }

  return !node.hidden || !node.hidden(state[NAME]);
};

export const reduceBranches = state => (res, node) => {
  if (node.type !== 'Branch') {
    return [...res, node];
  }

  const selectedBranch = node.branches.find(
    branch => branch.test(state[NAME]),
  );

  if (selectedBranch) {
    return [...res, ...selectedBranch.children];
  }

  return res;
};

export const mapWizardChildren = state => (node) => {
  if (!Array.isArray(node.children)) {
    return node;
  }

  return {
    ...node,
    children: reduceWizard(node.children, state),
  };
};

export const liftChildrenBranchPages = (res, node) => {
  // We've got a result page already. Skip the rest
  if (res.length && res[res.length - 1].type === 'Result') {
    return res;
  }

  // If the node has no children, there'll be no pages to hoist
  if (!Array.isArray(node.children) || !node.children.length) {
    return [...res, node];
  }

  // Hoist result page if the last child of this page is a result
  // page (mening it's a dead end)
  if (node.children[node.children.length - 1].type === 'Result') {
    return [
      ...res,
      node,
      node.children.pop(),
    ];
  }

  // Page with regular pages (not a dead end)
  return [...res, node];
};

export default function reduceWizard(schema, state) {
  return schema
    .reduce(reduceBranches(state), [])
    .filter(filterSchemaNodes(state))
    .map(mapWizardChildren(state))
    .reduce(liftChildrenBranchPages, []);
}
