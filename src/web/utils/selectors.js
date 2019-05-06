import { get } from 'lodash';

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

export function getPages(schema, state, nodeTitles, translations) {
  const pages = reduceWizard(schema, state, nodeTitles, translations);

  return pages.map(({ children = [], ...page }) => {
    const errorCount = children.reduce((res, node) => res + getNodeErrors(node), 0);

    return {
      ...page,
      heading: get(nodeTitles, page.id, page.heading),
      errors: errorCount,
      completed: !errorCount,
    };
  });
}

export function getErrorPages(schema, state) {
  const pages = reduceWizard(schema, state);

  return pages.reduce((res, { id, heading: pageHeading, type, children = [] }) => ([
    ...res,
    {
      id,
      type,
      heading: pageHeading,
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

export function getTitle(state, { meta: { title } }, translations) {
  const currentLanguage = getCurrentLanguage(state, false);

  if (!currentLanguage) {
    return title;
  }

  return get(
    translations,
    [currentLanguage, 'meta', 'title'],
    title,
  );
}

export function getTranslation(state, translations) {
  const currentLanguage = getCurrentLanguage(state);

  return get(translations, [currentLanguage, 'tags']);
}

export function getNodeTitles(schema, translations, state) {
  const translation = getTranslation(state, translations);

  return schema.reduce((res, node) => ({
    ...res,
    ...(node.id ? {
      [node.id]: (
        (node.id && get(translation, `['${node.id}'].heading`))
          || node.heading
          || node.id
      ),
    } : {}),
    ...(node.children ? getNodeTitles(node.children, translations, state) : {}),
    ...(node.branches ? node.branches.reduce((branchesRes, branch) => ({
      ...branchesRes,
      ...getNodeTitles(branch.children, translations, state),
    }), {}) : {}),
  }), {});
}

export function getCurrentLanguage(state, defaultValue = 'no') {
  return get(getData(state), '$language', defaultValue);
}

export function getNodeValue(property, state) {
  return get(getData(state), property);
}
