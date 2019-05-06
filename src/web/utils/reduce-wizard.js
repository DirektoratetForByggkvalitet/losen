/* eslint no-use-before-define: 0 */
import { get } from 'lodash';

import parseExpression from '../../shared/utils/dsl';
import { NAME } from '../state';
import vocalizeErrors from './vocalize-errors';
import { getNodeValue, getTranslation } from './selectors';

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
    .filter(({ show, hide, hidden }) => {
      if (show) {
        return parseExpression(show)(state[NAME]).valid;
      }

      if (hide || hidden) {
        return !parseExpression(hide || hidden)(state[NAME]).valid;
      }

      return true;
    })
    .slice(0, 1);

export const filterSchemaNodes = state => ({ type, show, hide, hidden }) => {
  if (type === 'Branch') {
    return true;
  }

  if (show) {
    return parseExpression(show)(state[NAME]).valid;
  }

  if (hide || hidden) {
    const expression = hide || hidden;
    return !parseExpression(expression)(state[NAME]).valid;
  }

  return true;
};

export const reduceBranches = (state, nodeTitles, translations = {}, nodeMap) => (res, node) => {
  if (node.type !== 'Branch') {
    return [...res, node];
  }

  // find a branch with a test that evaluates to true
  const selectedBranch = node.branches.find(
    branch => parseExpression(branch.test)(state[NAME]).valid,
  );

  // get your result + the new stuff
  if (selectedBranch) {
    return [
      ...res,
      ...reduceWizard(selectedBranch.children, state, nodeTitles, translations, nodeMap),
    ];
  }

  return res;
};

export const mapWizardChildren = (state, nodeTitles, translations = {}, nodeMap) => (node) => {
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
  } else if (!node.optional && node.type === 'Checkbox' && !node.allMandatory) {
    errors.required = !currentValue || !Object.values(currentValue).filter(v => v).length;
  } else if (!node.optional && node.type === 'Checkbox' && node.allMandatory) {
    errors.required =
      Object.values(currentValue || {}).filter(v => v).length !== node.options.length;
  }

  const translatedProps = translateNode(node, translations);

  if (['Page', 'Result'].indexOf(node.type) > -1 || node.children) {
    return {
      ...node,
      ...translatedProps,
      ...(node.children && node.children.length
        ? {
          children: reduceWizard(node.children, state, nodeTitles, translations, nodeMap),
        }
        : {}),
    };
  }

  return {
    ...node,
    ...translatedProps,
    ...(currentValue !== undefined ? { currentValue } : {}),
    errors,
    errorDescription: vocalizeErrors(errors.disabled, nodeTitles),
  };
};

export const reduceOptions = (state, translations, nodeMap) => (node) => {
  if (!node.options) {
    return node;
  }

  return {
    ...node,
    options: node.options
      .map(replaceReferences(nodeMap))
      .filter(({ show, hide, hidden }) => {
        if (show) {
          return parseExpression(show)(state[NAME]).valid;
        }

        if (hide || hidden) {
          return parseExpression(hide || hidden)(state[NAME]).valid;
        }

        return true;
      })
      .map(option => ({
        ...option,
        ...translateNode(option, translations),
        ...(option.disabled
          ? { disabled: !parseExpression(option.disabled)(state[NAME]).valid }
          : {}),
        messages: reduceOptionMessages(state)(option.messages),
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

// Replace Reference nodes with the node they referenced
export const replaceReferences = nodeMap => (node) => {
  if (node.type !== 'Reference') {
    return node;
  }

  if (!node.nodeId || !nodeMap[node.nodeId]) {
    return node;
  }

  const { show, hide, hidden, ...referencedNodeProps } = nodeMap[node.nodeId];

  return {
    ...referencedNodeProps,
    ...(node.show ? { show: node.show } : {}),
    ...(node.hide ? { hide: node.hide } : {}),
    ...(node.hidden ? { hidden: node.hidden } : {}),
  };
};

// Build a flat object with all the nodes in the schema that have an ID
export const buildNodeMap = schema =>
  schema.reduce(
    (res, node) => ({
      ...res,
      ...(node.id ? { [node.id]: node } : {}),
      ...(node.children ? buildNodeMap(node.children) : {}),
      ...(node.options ? buildNodeMap(node.options) : {}),
      ...(node.branches
        ? buildNodeMap(
          node.branches.reduce((children, branch) => [...children, ...branch.children], []),
        )
        : {}),
    }),
    {},
  );

/**
 * Get rid of the show, hide and hidden props - not needed in render, and no
 * use in passing them around.
 */
export const discardVisibilityProps = ({ show, hide, hidden, ...node }) => node;

export const replaceTranslations = translation => node => ({
  ...node,
  ...get(translation, [node.id], {}),
});

export default function reduceWizard(schema, state, nodeTitles, translations = {}, nodeMap = null) {
  let schemaNodeMap = nodeMap;

  if (!schemaNodeMap) {
    schemaNodeMap = buildNodeMap(schema);
  }

  const translation = getTranslation(state, translations);

  return schema
    .map(replaceTranslations(translation))
    .map(replaceReferences(schemaNodeMap))
    .reduce(reduceBranches(state, nodeTitles, translations, schemaNodeMap), [])
    .filter(filterSchemaNodes(state))
    .map(parseTableCells(state, translations))
    .map(mapWizardChildren(state, nodeTitles, translations, schemaNodeMap))
    .map(reduceOptions(state, translations, schemaNodeMap))
    .map(discardVisibilityProps)
    .reduce(liftChildrenBranchPages, []);
}
