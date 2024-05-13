import { NAME } from "../state/constants";
import vocalizeErrors from "./vocalize-errors";
import { get, omit, set } from "lodash";
import { hasProperty, isOfType } from "./is-of-type";
import parseExpression, { ValidationError, ValidationResult } from "./dsl";
import {
  Answer,
  Node,
  NodeTitles,
  RenderableAnswer,
  RenderableNode,
  State,
  ValidatedNode,
} from "../index";
import { getNodeValue } from "./get-node-value";
import { getTranslation } from "./get-translation";

export type Translations = Record<
  string,
  {
    key: string;
    name: string;
    tags: Record<
      string,
      {
        heading: string;
        description?: string;
        image?: {
          large: string;
        };
      }
    >;
    meta?: { title?: "Min vägvisare" };
  }
>;

const nonInteractiveTypes = [
  "Image",
  "Text",
  "Group",
  "Table",
  "Information"
] satisfies Node["type"][];

type NodeMap = Record<string, Node>;

export function translateNode<T extends RenderableNode | Node>(
  node: T,
  state: State,
  translations: Translations
): T {
  if (!hasProperty(node, "id")) {
    return node;
  }

  const currentTranslation = getTranslation(state, translations);

  if (!get(currentTranslation, node.id)) {
    return node;
  }

  const nodeTranslation = get(currentTranslation, node.id);
  const result = { ...node };

  if (nodeTranslation.heading) {
    set(result, "heading", nodeTranslation.heading);
  }

  if (nodeTranslation.description) {
    if (node.type === "Result" || node.type === "Page") {
      set(result, "lead", nodeTranslation.description);
    } else {
      set(result, "text", nodeTranslation.description);
    }
  }

  if (nodeTranslation.image) {
    set(result, "image", {
      url: nodeTranslation.image.large,
      alt: `Illustrasjon for ${get(result, "heading")}`,
    });
  }

  return result;
}

export const mapTranslateNode =
  <T extends Node>(state: State, translations: Translations) =>
  (node: T) =>
    translateNode<T>(node, state, translations);

/**
 * Parse tests for cells in (the dynamic) Table in order to set the invalid
 * property on cells that that has a test that does not evaluate to a truthy
 * result
 */
export const parseTableCells =
  <T extends Node>(state: State, translations: Translations) =>
  (node: T) => {
    if (!isOfType(node, ["Table"])) {
      return node;
    }

    return {
      ...node,
      cells:
        node.cells?.map((row) =>
          row?.map((cell) => {
            let inactive = false;

            if (cell.test) {
              inactive = !parseExpression(cell.test)(state[NAME]).valid;
            }

            const translatedProps = translateNode(cell, state, translations);

            return {
              ...cell,
              ...translatedProps,
              inactive,
            };
          })
        ) ?? [],
    };
  };

/**
 * Reduce option messages to a single (if any) message.
 */
export const reduceOptionMessages =
  (state: State) => (messages: Answer["messages"]) =>
    (messages || [])
      .filter(({ show, hide, hidden }) => {
        if (show) {
          return parseExpression(show)(state[NAME]).valid;
        }

        if (hide || hidden) {
          return !parseExpression((hide || hidden)!)(state[NAME]).valid;
        }

        return true;
      })
      .slice(0, 1);

export const filterSchemaNodes = (state: State) => (node: Node) => {
  if (isOfType(node, ["Branch"])) {
    return true;
  }

  if (hasProperty(node, "show") && node.show) {
    return parseExpression(node.show)(state[NAME]).valid;
  }

  if (hasProperty(node, "hide") || hasProperty(node, "hidden")) {
    const expression = (node.hide || node.hidden)!;
    return !parseExpression(expression)(state[NAME]).valid;
  }

  return true;
};

export const reduceBranches =
  (
    state: State,
    nodeTitles: NodeTitles,
    translations: Translations = {},
    nodeMap?: NodeMap
  ) =>
  <T extends Node>(res: T[], node: T): T[] => {
    if (node.type !== "Branch") {
      return [...res, node as T];
    }

    // find a branch with a test that evaluates to true
    const selectedBranch = node.branches.find(
      (branch) => parseExpression(branch.test)(state[NAME]).valid
    );

    // get your result + the new stuff
    if (selectedBranch) {
      return [
        ...res,
        ...reduceWizard(
          selectedBranch.children,
          state,
          nodeTitles,
          translations,
          nodeMap
        ),
      ] as T[];
    }

    return res;
  };

export const mapWizardChildren =
  <T extends Node>(
    state: State,
    nodeTitles: NodeTitles,
    translations: Translations = {},
    nodeMap: NodeMap
  ) =>
  (
    node: T
  ): ValidatedNode<Node> & {
    errorDescription?: string;
  } => {
    const currentValue = hasProperty(node, "property")
      ? getNodeValue(get(node, "property"), state)
      : undefined;

    const errors: {
      disabled: ValidationResult | Array<ValidationError | ValidationResult>;
      validation: {
        error?: boolean;
        message?: string;
      };
      required?: boolean;
    } = { disabled: [], validation: {} };

    if (isOfType(node, ["Answer"]) && node.disabled) {
      errors.disabled = parseExpression(node.disabled)(state[NAME]).errors;
    }

    if (
      isOfType(node, ["Input", "Number", "Textarea", "FetchOrg"]) &&
      node.validator &&
      currentValue
    ) {
      // If test property is used use DSL validator
      if (node.validator.test) {
        errors.validation = {
          error: !parseExpression(node.validator.test)(state[NAME]).valid,
          message: node.validator.error,
        };
        // If currentValue is an object with multiple values pick value from one given key
      } else if (node.validator.object) {
        errors.validation = {
          error: !new RegExp(node.validator.pattern).test(
            currentValue[node.validator.object]
          ),
          message: node.validator.error,
        };
      } else {
        errors.validation = {
          error: !new RegExp(node.validator.pattern).test(`${currentValue}`),
          message: node.validator.error,
        };
      }
    }

    if (
      (!hasProperty(node, "optional") || !node.optional) &&
      !isOfType(node, [...nonInteractiveTypes, "Checkbox"])
    ) {
      errors.required = [null, undefined, ""].includes(currentValue);
    } else if (
      isOfType(node, ["Checkbox"]) &&
      !node.optional &&
      !node.allMandatory
    ) {
      errors.required =
        !currentValue || !Object.values(currentValue).filter((v) => v).length;
    } else if (
      isOfType(node, ["Checkbox"]) &&
      !node.optional &&
      node.allMandatory
    ) {
      errors.required =
        Object.values(currentValue || {}).filter((v) => v).length !==
        node.options.length;
    }

    const translatedNode = translateNode(node, state, translations);

    if (hasProperty(node, "children")) {
      return {
        ...translatedNode,
        ...(node.children && node.children.length
          ? {
              children: reduceWizard(
                node.children,
                state,
                nodeTitles,
                translations,
                nodeMap
              ) as any,
            }
          : {}),
      };
    }

    return {
      ...translatedNode,
      ...(currentValue !== undefined ? { currentValue } : {}),
      ...(!isOfType(node, ["Result"])
        ? {
            errors,
            errorDescription: vocalizeErrors(errors.disabled, nodeTitles),
          }
        : {}),
    };
  };

export const reduceOptions =
  (state: State, translations: Translations, nodeMap: NodeMap) =>
  <T extends Node>(node: T): ValidatedNode<RenderableNode> => {
    if (!hasProperty(node, "options")) {
      return node as RenderableNode;
    }

    return {
      ...node,
      options: node.options
        .map(replaceReferences(nodeMap))
        .filter((node) => {
          if (hasProperty(node, "show") && node.show) {
            return parseExpression(node.show)(state[NAME]).valid;
          }

          if (hasProperty(node, "hidden") || hasProperty(node, "hide")) {
            return parseExpression((node.hide || node.hidden)!)(state[NAME])
              .valid;
          }

          return true;
        })
        .map(mapTranslateNode(state, translations))
        .filter((node) => isOfType(node, ["Answer"]))
        .map((option: Node): ValidatedNode<RenderableAnswer> => {
          return {
            ...(option as ValidatedNode<RenderableAnswer>),
            ...(hasProperty(option, "disabled")
              ? {
                  disabled: !parseExpression(option.disabled!)(state[NAME])
                    .valid,
                }
              : {}),
            messages: hasProperty(option, "messages")
              ? reduceOptionMessages(state)(option.messages || [])
              : [],
          } as ValidatedNode<RenderableAnswer>;
        }),
    } as ValidatedNode<RenderableNode>;
  };

export const liftChildrenBranchPages = <
  T extends ReturnType<typeof discardVisibilityProps>
>(
  res: T[],
  node: T
): T[] => {
  // We've got a result page already. Skip the rest
  if (res.length && res[res.length - 1].type === "Result") {
    return res;
  }

  // A page with no children is no good. Skip it
  if (node.type === "Page" && (!node.children || !node.children.length)) {
    return res;
  }

  if (!get(node, "children.length")) {
    return [...res, node];
  }

  // If page has only child, and that child is a result page,
  // return the result page and ditch the page
  if (
    hasProperty(node, "children") &&
    node.children?.length === 1 &&
    isOfType(node.children[0], ["Result"])
  ) {
    return [...res, node.children[0] as T];
  }

  // Hoist result page if the last child of this page is a result
  // page (mening it's a dead end)
  if (
    hasProperty(node, "children") &&
    node?.children?.[node.children.length - 1] &&
    isOfType(node.children[node.children.length - 1], ["Result"])
  ) {
    return [...res, node, node.children.pop()! as T];
  }

  // Page with regular pages (not a dead end)
  return [...res, node as T];
};

// Replace Reference nodes with the node they referenced
export const replaceReferences =
  <T extends Node | RenderableNode>(nodeMap: NodeMap) =>
  (node: T): T => {
    if (node.type !== "Reference") {
      return node;
    }

    if (!node.nodeId || !nodeMap[node.nodeId]) {
      return node;
    }

    const referencedNodeProps = nodeMap[node.nodeId];

    return {
      ...omit(referencedNodeProps, ["show", "hide", "hidden"]),
      ...(hasProperty(node, "show") ? { show: node.show } : {}),
      ...(hasProperty(node, "hide") ? { hide: node.hide } : {}),
      ...(hasProperty(node, "hidden") ? { hidden: node.hidden } : {}),
    } as T;
  };

// Build a flat object with all the nodes in the schema that have an ID
export const buildNodeMap = (schema: (RenderableNode | Node)[]): NodeMap =>
  schema.reduce((res, node) => {
    return {
      ...res,
      ...(hasProperty(node, "id") ? { [node.id]: node } : {}),

      ...(hasProperty(node, "children")
        ? buildNodeMap((node as any).children || [])
        : {}),

      ...(hasProperty(node, "options") ? buildNodeMap(node.options || []) : {}),

      ...(isOfType(node, ["Branch"])
        ? buildNodeMap(
            (node?.branches as any)?.reduce(
              (children: any, branch: any) => [...children, ...branch.children],
              []
            ) ?? []
          )
        : {}),
    };
  }, {});

/**
 * Get rid of the show, hide and hidden props - not needed in render, and no
 * use in passing them around.
 */
export const discardVisibilityProps = <T extends ValidatedNode<RenderableNode>>(
  node: T
) => omit(node, ["show", "hide", "hidden"]) as T;

export default function reduceWizard(
  schema: Node[],
  state: State,
  nodeTitles: NodeTitles = {},
  translations: Translations = {},
  nodeMap?: NodeMap
) {
  let schemaNodeMap = nodeMap;

  if (!schemaNodeMap) {
    schemaNodeMap = buildNodeMap(schema);
  }

  return schema
    .map(replaceReferences(schemaNodeMap))
    .map(mapTranslateNode(state, translations))
    .reduce(
      reduceBranches(state, nodeTitles, translations, schemaNodeMap),
      [] as Node[]
    )
    .filter(filterSchemaNodes(state))
    .map(parseTableCells(state, translations))
    .map(mapWizardChildren(state, nodeTitles, translations, schemaNodeMap))
    .map(reduceOptions(state, translations, schemaNodeMap))
    .map(discardVisibilityProps)
    .reduce<ReturnType<typeof discardVisibilityProps>[]>(
      liftChildrenBranchPages,
      []
    );
}
