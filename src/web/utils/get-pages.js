import { get } from 'lodash';
import { getNodeErrors } from './selectors';

/**
 * Returns a list of the wizard pages with number of erros per page and whether
 * or not the page has been completed or not
 *
 * @param {*} reducedSchema A reduced schema (the result of reduceWizard)
 */
export default function getPages(reducedSchema, nodeTitles) {
  return reducedSchema.map(({ children = [], ...page }) => {
    const errors = children.reduce((res, node) => res + getNodeErrors(node), 0);

    return {
      ...page,
      errors,
      heading: get(nodeTitles, page.id, page.heading),
      completed: !errors,
    };
  });
}
