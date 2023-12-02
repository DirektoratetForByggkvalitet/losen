import { get } from "lodash";

import reduceWizard, { Translations } from "./reduce-wizard";
import {
  Node,
  NodeTitles,
  Render,
  RenderableNode,
  Result,
  Schema,
  State,
  ValidatedNode,
  WizardDefinition,
} from "losen";
import { hasProperty } from "./is-of-type";
import { getTranslation } from "./get-translation";
import { getCurrentLanguage } from "./get-current-language";

export function getNodeErrors(node: ValidatedNode<RenderableNode>): number {
  const errors = { validation: {}, disabled: [], ...node.errors };

  return (
    (Array.isArray(errors.disabled) ? errors.disabled.length : 0) +
    (errors.required ? 1 : 0) +
    (errors.validation.error ? 1 : 0) +
    (hasProperty(node, "children")
      ? (node.children || []).reduce(
          (sum, child) => sum + getNodeErrors(child),
          0
        )
      : 0)
  );
}

export function getErrorPages(
  schema: Schema,
  state: State
): Array<{
  id?: string;
  type: Node["type"];
  heading?: Result["heading"];
  errorNodes?: Array<{
    property?: string;
    heading?: Result["heading"];
    errors?: Render<Node>["errors"];
  }>;
}> {
  const pages = reduceWizard(schema, state);

  return pages
    .reduce<ReturnType<typeof getErrorPages>>((res, node) => {
      const { type } = node;
      const id = hasProperty(node, "id") ? node.id : undefined;
      const children = hasProperty(node, "children") ? node.children : [];
      const heading = hasProperty(node, "heading") ? node.heading : undefined;

      return [
        ...res,
        {
          id,
          type,
          heading,
          errorNodes: children
            ?.filter((node) => hasProperty(node, "property"))
            ?.filter((node) => getNodeErrors(node) > 0)
            ?.map((node) => ({
              property: get(node, "property"),
              heading: get(node, "heading"),
              errors: get(node, "errors"),
            })),
        },
      ];
    }, [])
    .filter(({ errorNodes }) => errorNodes?.length);
}

export function getTitle(
  state: State,
  { meta: { title } }: WizardDefinition,
  translations: Translations
): string {
  const currentLanguage = getCurrentLanguage(state, null);

  if (!currentLanguage) {
    return title;
  }

  return get(translations, [currentLanguage, "meta", "title"], title);
}

export function getNodeTitles(
  schema: Node[],
  translations: Translations,
  state: State
): NodeTitles {
  const translation = getTranslation(state, translations);

  return schema.reduce(
    (res, node) => ({
      ...res,
      ...(hasProperty(node, "id")
        ? {
            [node.id]:
              (node.id && get(translation, `['${node.id}'].heading`)) ||
              get(node, "heading", node.id),
          }
        : {}),
      ...(hasProperty(node, "children")
        ? getNodeTitles(node.children || [], translations, state)
        : {}),
      ...(hasProperty(node, "branches")
        ? node.branches.reduce(
            (branchesRes, branch) => ({
              ...branchesRes,
              ...getNodeTitles(branch.children, translations, state),
            }),
            {}
          )
        : {}),
    }),
    {}
  );
}
