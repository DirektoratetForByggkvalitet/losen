/* eslint no-use-before-define: 0 */

import parseExpression from '../../shared/utils/dsl';
import { NAME } from '../state';
import vocalizeErrors from './vocalize-errors';

export const filterSchemaNodes = state => (node) => {
  if (node.type === 'Branch') {
    return true;
  }

  // if no expression is specified that could hide this node, exit now
  if (!node.hidden) {
    return true;
  }

  // parse and test expression. if result is falsy, we're not hiding
  return !parseExpression(node.hidden)(state[NAME]).valid;
};

export const reduceBranches = state => (res, node) => {
  if (node.type !== 'Branch') {
    return [...res, node];
  }

  const selectedBranch = node.branches.find(
    branch => parseExpression(branch.test)(state[NAME]).valid,
  );

  if (selectedBranch) {
    return [...res, ...selectedBranch.children];
  }

  return res;
};

export const mapWizardChildren = (state, nodeTitles) => (node) => {
  const errors = node.disabled ? parseExpression(node.disabled)(state[NAME]).errors : [];

  if (node.type === 'Result') {
    return node;
  }

  if (!node.children) {
    return {
      ...node,
      errors,
      errorDescription: vocalizeErrors(errors, nodeTitles),
    };
  }

  return {
    ...node,
    children: reduceWizard(node.children, state, nodeTitles),
  };
};

export const reduceSuggestedAnswers = state => (node) => {
  if (!node.suggestedAnswer) {
    return node;
  }

  return {
    ...node,
    suggestedAnswer: node.suggestedAnswer
      .filter(({ hidden }) => {
        if (hidden === undefined) {
          return true;
        }

        return !parseExpression(hidden)(state[NAME]).valid;
      })
      .map((option) => {
        if (option.disabled === undefined) {
          return option;
        }

        return {
          ...option,
          disabled: !parseExpression(option.disabled)(state[NAME]).valid,
        };
      }),
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

export default function reduceWizard(schema, state, nodeTitles) {
  return schema
    .reduce(reduceBranches(state), [])
    .filter(filterSchemaNodes(state))
    .map(mapWizardChildren(state, nodeTitles))
    .map(reduceSuggestedAnswers(state))
    .reduce(liftChildrenBranchPages, []);
}
