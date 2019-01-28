/**
 * Determine whether or not this page has a soft error (Error message) showing
 *
 * @param {object} page Page containing an array of children
 * @returns {boolean}
 */
export default function hasSoftError({ children = [] }) {
  return children.reduce((sum, node) => (
    sum
      || node.type === 'Error'
      || (node.children && hasSoftError(node))
  ), false);
}
