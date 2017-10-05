/* eslint no-use-before-define: 0 */

import parseExpression from '../../shared/utils/dsl';
import { NAME } from '../state';
import vocalizeErrors from './vocalize-errors';
import { getNodeValue } from './selectors';

export function translateNode(node, translations) {
  if (!node.id) {
    return node;
  }

  if (!translations[node.id]) {
    return node;
  }

  const translation = translations[node.id];
  const result = {};

  if (translation.heading) {
    if (node.type === 'Answer' && !translation.description) {
      result.text = translation.heading;
    } else {
      result.heading = translation.heading;
    }
  }

  if (translation.description) {
    if (['Result', 'Page'].includes(node.type)) {
      result.lead = translation.description;
    } else {
      result.text = translation.description;
    }
  }

  if (translation.image) {
    result.image = {
      url: translation.image.large,
      alt: `Illustrasjon for ${result.heading || node.heading}`,
    };
  }

  return result;
}

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

export const mapWizardChildren = (state, nodeTitles, translations = {}) => (node) => {
  const currentValue = node.property ? getNodeValue(node.property, state) : undefined;

  const errors = { disabled: [], validation: {} };

  if (node.disabled) {
    errors.disabled = parseExpression(node.disabled)(state[NAME]).errors;
  }

  if (node.validator && currentValue) {
    errors.validation = {
      error: !new RegExp(node.validator.pattern).test(`${currentValue}`),
      message: node.validator.error,
    };
  }

  if (!node.optional && !['Image', 'Text', 'Group'].includes(node.type)) {
    errors.required = currentValue === undefined;
  }

  const translatedProps = translateNode(node, translations);

  if (node.type === 'Result') {
    return {
      ...node,
      ...translatedProps,
    };
  }

  if (!node.children) {
    return {
      ...node,
      ...translatedProps,
      currentValue,
      errors,
      errorDescription: vocalizeErrors(errors.disabled, nodeTitles),
    };
  }

  return {
    ...node,
    ...translatedProps,
    children: reduceWizard(node.children, state, nodeTitles, translations),
  };
};

export const reduceSuggestedAnswers = (state, translations) => (node) => {
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
      .map(option => ({
        ...option,
        ...translateNode(option, translations),
        disabled: option.disabled && !parseExpression(option.disabled)(state[NAME]).valid,
      })),
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

export default function reduceWizard(schema, state, nodeTitles, translations = {}) {
  return schema
    .reduce(reduceBranches(state), [])
    .filter(filterSchemaNodes(state))
    .map(mapWizardChildren(state, nodeTitles, translations))
    .map(reduceSuggestedAnswers(state, translations))
    .reduce(liftChildrenBranchPages, []);
}
