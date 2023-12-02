import { get } from "lodash";
import { getNodeErrors } from "utils/selectors";
import { hasProperty } from "utils/is-of-type";
import type { NodeTitles, RenderableNode, ValidatedNode } from "losen";

/**
 * Returns a list of the wizard pages with number of erros per page and whether
 * or not the page has been completed or not
 *
 * @param {*} reducedSchema A reduced schema (the result of reduceWizard)
 */
export default function getPages(
  reducedSchema: ValidatedNode<RenderableNode>[],
  nodeTitles: NodeTitles
) {
  return reducedSchema.map((node) => {
    const errors = hasProperty(node, "children")
      ? node.children.reduce((res, node) => res + getNodeErrors(node), 0)
      : 0;

    return {
      ...node,
      errors,
      heading: get(
        nodeTitles,
        (node as unknown as any).id,
        hasProperty(node, "heading") ? node.heading : undefined
      ),
      completed: !errors,
    };
  });
}
