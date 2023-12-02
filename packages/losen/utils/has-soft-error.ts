import { RenderableNode } from "losen";
import { hasProperty, isOfType } from "utils/is-of-type";

/**
 * Determine whether or not this page has a soft error (Error message) showing
 *
 * @param {object} page Page containing an array of children
 * @returns {boolean}
 */
export default function hasSoftError(page: RenderableNode): boolean {
  if (!hasProperty(page, "children")) {
    return false;
  }

  return page.children.reduce<boolean>(
    (result, node) =>
      result ||
      isOfType(node, ["Error"]) ||
      (hasProperty(node, "children") && hasSoftError(node)),
    false
  );
}
