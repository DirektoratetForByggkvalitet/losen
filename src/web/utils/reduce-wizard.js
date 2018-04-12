/* eslint no-use-before-define: 0 */
import parseExpression from '../../shared/utils/dsl';
import { NAME } from '../state';
import vocalizeErrors from './vocalize-errors';
import { getNodeValue } from './selectors';

const nonInteractiveTypes = ['Image', 'Text', 'Group', 'Table'];

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
    result.heading = translation.heading;
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

/**
 * Parse tests for cells in (the dynamic) Table in order to set the invalid
 * property on cells that that has a test that does not evaluate to a truthy
 * result
 */
export const parseTableCells = (state, translations) => (node) => {
  if (node.type !== 'Table') {
    return node;
  }

  return {
    ...node,
    cells: (node.cells || []).map(row =>
      (row || row).map((cell) => {
        let inactive = false;

        if (cell.test) {
          inactive = !parseExpression(cell.test)(state[NAME]).valid;
        }

        const translatedProps = translateNode(cell, translations);

        return {
          ...cell,
          ...translatedProps,
          inactive,
        };
      }),
    ),
  };
};

/**
 * Reduce option messages to a single (if any) message.
 */
export const reduceOptionMessages = state => messages =>
  (messages || [])
    .filter((message) => {
      if (!message.test) {
        return true;
      }

      return parseExpression(message.test)(state[NAME]).valid;
    })
    .slice(0, 1);

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

  // find a branch with a test that evaluates to true
  const selectedBranch = node.branches.find(
    branch => parseExpression(branch.test)(state[NAME]).valid,
  );

  // get your result + the new stuff
  if (selectedBranch) {
    return [...res, ...selectedBranch.children.reduce(reduceBranches(state), [])];
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
    // If test property is used use DSL validator
    if (node.validator.test) {
      errors.validation = {
        error: !parseExpression(node.validator.test)(state[NAME]).valid,
        message: node.validator.error,
      };
      // If currentValue is an object with multiple values pick value from one given key
    } else if (node.validator.object) {
      errors.validation = {
        error: !new RegExp(node.validator.pattern).test(currentValue[node.validator.object]),
        message: node.validator.error,
      };
    } else {
      errors.validation = {
        error: !new RegExp(node.validator.pattern).test(`${currentValue}`),
        message: node.validator.error,
      };
    }
  }

  if (!node.optional && ![...nonInteractiveTypes, 'Checkbox'].includes(node.type)) {
    errors.required = [null, undefined, ''].includes(currentValue);
  } else if (!node.optional && node.type === 'Checkbox') {
    errors.required = !currentValue || !Object.values(currentValue).filter(v => v).length;
  }

  const translatedProps = translateNode(node, translations);

  if (['Page', 'Result'].indexOf(node.type) > -1 || node.children) {
    return {
      ...node,
      ...translatedProps,
      ...(node.children && node.children.length
        ? {
          children: reduceWizard(node.children, state, nodeTitles, translations),
        }
        : {}),
    };
  }

  return {
    ...node,
    ...translatedProps,
    currentValue,
    errors,
    errorDescription: vocalizeErrors(errors.disabled, nodeTitles),
  };
};

export const reduceOptions = (state, translations) => (node) => {
  if (!node.options) {
    return node;
  }

  return {
    ...node,
    options: node.options
      .filter(({ hidden }) => {
        if (hidden === undefined) {
          return true;
        }

        return !parseExpression(hidden)(state[NAME]).valid;
      })
      .map(option => ({
        ...option,
        ...translateNode(option, translations),
        messages: reduceOptionMessages(state)(option.messages),
        disabled: option.disabled && !parseExpression(option.disabled)(state[NAME]).valid,
      })),
  };
};

export const liftChildrenBranchPages = (res, node) => {
  // We've got a result page already. Skip the rest
  if (res.length && res[res.length - 1].type === 'Result') {
    return res;
  }

  // A page with no children is no good. Skip it
  if (node.type === 'Page' && (!node.children || !node.children.length)) {
    return res;
  }

  // If the node has no children, there's nothing to show and we'll just skip the page
  if (!Array.isArray(node.children) || !node.children.length) {
    return [...res, node];
  }

  // If page has only child, and that child is a result page,
  // return the result page and ditch the page
  if (node.children.length === 1 && node.children[0].type === 'Result') {
    return [...res, node.children[0]];
  }

  // Hoist result page if the last child of this page is a result
  // page (mening it's a dead end)
  if (node.children[node.children.length - 1].type === 'Result') {
    return [...res, node, node.children.pop()];
  }

  // Page with regular pages (not a dead end)
  return [...res, node];
};

export default function reduceWizard(schema, state, nodeTitles, translations = {}) {
  return schema
    .reduce(reduceBranches(state), [])
    .filter(filterSchemaNodes(state))
    .map(parseTableCells(state, translations))
    .map(mapWizardChildren(state, nodeTitles, translations))
    .map(reduceOptions(state, translations))
    .reduce(liftChildrenBranchPages, []);
}
