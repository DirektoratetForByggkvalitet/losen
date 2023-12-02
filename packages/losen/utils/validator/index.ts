import { get } from 'lodash';

import parseExpression from "../dsl";
import { Branch, BranchNode, Metadata, Node, NodeType, Schema } from "losen";
import { hasProperty, isOfType } from "../is-of-type";

type ValidationError = {
  id?: string;
  path: string[];
  error: string;
};

const inputRequiredProperties = ["id", "property", "heading"];

const requiredProperties: Record<NodeType, string[]> = {
  Cell: ["id", "text"],
  Table: ["id", "text", "cells"],
  Result: ["id", "heading"],
  Page: ["id", "heading", "children"],
  Error: ["id", "heading", "children"],
  ErrorOk: ["id", "heading"],
  Group: ["id", "children"],
  Answer: ["id", "heading", "value"],
  Image: ["id", "image"],
  Text: ["id", "text"],
  Information: ["id", "text"],
  Branch: ["branches"],
  Reference: ["nodeId"],
  Checkbox: [...inputRequiredProperties, "options"],
  Radio: [...inputRequiredProperties, "options"],
  Select: [...inputRequiredProperties, "options"],
  Input: inputRequiredProperties,
  Number: inputRequiredProperties,
  Textarea: inputRequiredProperties,
  FetchOrg: [...inputRequiredProperties, "source"],
  Evaluation: ["id", "sad", "happy", "final"],
  Heading: ["id", "text"],
  Signature: ["id"],
  Sum: ["id", "heading", "values", "operations"],
};

const deprecatedProperties: Record<
  NodeType,
  Array<{ property: string; use: string }>
> = {
  Table: [],
  Cell: [],
  FetchOrg: [],
  Page: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Result: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Error: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Reference: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Group: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Answer: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Image: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Text: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Branch: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Checkbox: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Radio: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Select: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Input: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Number: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  Textarea: [
    { property: "hidden", use: "hide" },
    { property: "test", use: "show" },
  ],
  ErrorOk: [],
  Evaluation: [],
  Heading: [],
  Signature: [],
  Sum: [],
  Information: [],
};

/**
 * Validate that the metadata is ok
 */
function validateMeta({ title }: Metadata) {
  if (!title) {
    return [{ id: "meta", path: ["meta"], error: "Missing title in meta" }];
  }

  return [];
}

/**
 * Assert properties exist. Returns array of errors
 */
function assertProperties(
  object: Node | BranchNode,
  path: string[],
  properties: string[]
) {
  let errors: ValidationError[] = [];

  (properties || []).forEach((property) => {
    if (get(object, property, undefined) === undefined) {
      errors = [
        ...errors,
        {
          path,
          id: get(object, "id"),
          error: `${get(object, "type")} is missing the '${property}' property`,
        },
      ];
    }
  });

  return errors;
}

/**
 * Check for deprecated properties on the node. Returns array of errors
 */
function assertDeprecations(
  object: Node,
  path: string[],
  properties: (typeof deprecatedProperties)[NodeType]
) {
  let errors: ValidationError[] = [];

  (properties || []).forEach(({ property, use }) => {
    if (get(object, property, undefined) !== undefined) {
      errors = [
        ...errors,
        {
          path,
          id: get(object, "id"),
          error: `${get(
            object,
            "type"
          )} is using the '${property}' property. It's deprecated and will be removed.${
            use ? ` Use '${use}' instead` : ""
          }.`,
        },
      ];
    }
  });

  return errors;
}

/**
 * Validate that a node is valid. Returns an array of errors
 */
function validateNode(node: Node, path: string[], ancestors: Node[]) {
  let errors: ValidationError[] = [];

  if (!get(node, "type")) {
    return [{ path, error: "Node is missing the type property" }];
  }

  if (ancestors.length && get(node, "type") === "Page") {
    errors = [
      ...errors,
      {
        path,
        error:
          "Encountered a nested page. Page is only allowed at the top level",
      },
    ];
  }

  errors = [
    ...errors,
    ...assertProperties(node, path, requiredProperties[node.type]),
    ...assertDeprecations(node, path, deprecatedProperties[node.type]),
  ];

  // Parse logical expressions
  const logicalExpressionFields = ["hidden", "disabled", "test"];

  logicalExpressionFields.forEach((field) => {
    if (!get(node, field)) {
      return;
    }

    try {
      parseExpression(get(node, field));
    } catch (e: any) {
      errors = [
        ...errors,
        { path: [...path, field], error: e.message as unknown as string },
      ];
    }
  });

  // Recurse through children
  if ((node.type === "Page" || node.type === "Group") && node.children) {
    node.children.forEach((child, index) => {
      errors = [
        ...errors,
        ...validateNode(
          child,
          [...path, "children", String(index)],
          [...ancestors, node]
        ),
      ];
    });
  }

  // Check and recurse through branches
  if (node.type === "Branch" && node.branches) {
    node.branches.forEach((branch, branchIndex) => {
      errors = [
        ...errors,
        ...assertProperties(
          branch,
          [...path, "branches", String(branchIndex)],
          ["test", "children"]
        ),
      ];

      // Validate the text expression
      if (branch.test) {
        try {
          parseExpression(branch.test);
        } catch (e: any) {
          errors = [
            ...errors,
            {
              path: [...path, "branches", String(branchIndex), "test"],
              error: e.message,
            },
          ];
        }
      }

      // Recurse through the branch children
      if (branch.children) {
        branch.children.forEach((child, index) => {
          errors = [
            ...errors,
            ...validateNode(
              child,
              [
                ...path,
                "branches",
                String(branchIndex),
                "children",
                String(index),
              ],
              [...ancestors, node]
            ),
          ];
        });
      }
    });
  }

  // Recurse over the options
  if ((node.type === "Radio" || node.type === "Checkbox") && node.options) {
    node.options.forEach((option, index) => {
      errors = [
        ...errors,
        ...validateNode(
          option,
          [...path, "options", String(index)],
          [...ancestors, node]
        ),
      ];
    });
  }

  // Check image
  if (node.type === "Image" && node.image) {
    if (typeof node.image !== "object") {
      errors = [
        ...errors,
        {
          path,
          error: `an object was expected for the image property. Got ${typeof node.image}`,
        },
      ];
    }

    errors = [
      ...errors,
      ...assertProperties(
        { ...node.image, type: "Image" } as unknown as Node,
        [...path, "image"],
        ["url", "alt"]
      ),
    ];
  }

  return errors;
}

/**
 * Validate a page, checking that the required properties are in place
 */
function validatePage(page: Schema[0], path: string[]) {
  let errors: ValidationError[] = [];

  // Check for required properties
  errors = [
    ...errors,
    ...assertProperties(page, path, requiredProperties[page.type]),
  ];

  if (hasProperty(page, "children")) {
    // Check that children is an array
    if (!Array.isArray(page.children)) {
      errors = [...errors, { path, error: "Children must be an array" }];

      return errors;
    }

    page.children.forEach((node, index) => {
      errors = [
        ...errors,
        ...validateNode(node, [...path, "children", String(index)], [page]),
      ];
    });
  }

  return errors;
}

/**
 * Validate root-level branch to ensure that the resulting nodes are Pages
 * or Result pages (the only types really allowed at the top level of the
 * schema)
 */
function validateRootBranch(
  branchNode: Branch,
  path: string[]
): ValidationError[] {
  return [
    // Check for bad children node types
    ...(branchNode?.branches?.reduce<ValidationError[]>(
      (errors, branch, index) => {
        if (
          branch.children.find(
            ({ type }) => !["Branch", "Page", "Result", "Error"].includes(type)
          )
        ) {
          return [
            ...errors,
            {
              path: [...path, "branches", String(index)],
              error:
                "Root level Branch node contains a child that is not a Page, Result or Error",
            },
          ];
        }

        return errors;
      },
      []
    ) ?? []),

    // Visit Branch nodes below this Branch node
    ...(branchNode?.branches?.reduce<ValidationError[]>(
      (errors, node, branchIndex) => [
        ...errors,
        ...node?.children.reduce<ValidationError[]>(
          (childBranchErrors, childBranch, childIndex) => [
            ...childBranchErrors,
            ...validateNode(
              childBranch,
              [
                ...path,
                "branches",
                String(branchIndex),
                "children",
                String(childIndex),
              ],
              [branchNode]
            ),
          ],
          []
        ),
      ],
      []
    ) ?? []),
  ];
}

/**
 * Validates that the schema is ok. Checking that the top level is pages
 * and recursing down from there, ending up with an array of everything that
 * isn't up to standards 👮
 */
function validateSchema(schema: Schema) {
  let errors: ValidationError[] = [];

  schema.forEach((page, index) => {
    if (!isOfType(page, ["Page", "Result", "Branch", "Error"])) {
      errors = [
        ...errors,
        {
          path: ["schema", String(index)],
          error:
            "Top-level element is of invalid type. Must be Page, Result, Error or Branch (with Page/Result/Error as child)",
        },
      ];
    }

    errors = [
      ...errors,
      ...(isOfType(page, ["Branch"])
        ? validateRootBranch(page, ["schema", String(index)])
        : validatePage(page, ["schema", String(index)])),
    ];
  });

  return errors;
}

export default function validate({
  meta,
  schema,
}: {
  meta: Metadata;
  schema: Schema;
}) {
  const metaErrors = validateMeta(meta);
  const schemaErrors = validateSchema(schema);

  return [...metaErrors, ...schemaErrors];
}
