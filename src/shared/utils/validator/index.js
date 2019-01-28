import get from 'lodash.get';
import parseExpression from '../dsl';

const inputRequiredProperties = ['id', 'property', 'heading'];

const requiredProperties = {
  Result: ['id', 'heading'],
  Page: ['id', 'heading', 'children'],
  Group: ['id', 'children'],
  Answer: ['id', 'heading', 'value'],
  Image: ['id', 'image'],
  Text: ['id', 'text'],
  Branch: ['branches'],
  Reference: ['nodeId'],
  Checkbox: [...inputRequiredProperties, 'options'],
  Radio: [...inputRequiredProperties, 'options'],
  Select: [...inputRequiredProperties, 'options'],
  Input: inputRequiredProperties,
  Number: inputRequiredProperties,
  TextArea: inputRequiredProperties,
};

const deprecatedProperties = {
  Page: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Result: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Reference: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Group: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Answer: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Image: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Text: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Branch: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Checkbox: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Radio: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Select: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Input: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  Number: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
  TextArea: [{ property: 'hidden', use: 'hide' }, { property: 'test', use: 'show' }],
};

/**
 * Validate that the metadata is ok
 */
function validateMeta({ title }) {
  if (!title) {
    return [{ path: ['meta'], error: 'Missing heading in meta' }];
  }

  return [];
}

/**
 * Assert properties exist. Returns array of errors
 */
function assertProperties(object, path, properties) {
  let errors = [];

  (properties || []).forEach((property) => {
    if (get(object, property, undefined) === undefined) {
      errors = [...errors, { path, id: object.id, error: `${object.type} is missing the '${property}' property` }];
    }
  });

  return errors;
}

/**
 * Check for deprecated properties on the node. Returns array of errors
 */
function assertDeprecations(object, path, properties) {
  let errors = [];

  (properties || []).forEach(({ property, use }) => {
    if (get(object, property, undefined) !== undefined) {
      errors = [
        ...errors,
        {
          path,
          id: object.id,
          error: `${object.type} is using the '${property}' property. It's deprecated and will be removed.${use ? ` Use '${use}' instead` : ''}.`,
        },
      ];
    }
  });

  return errors;
}

/**
 * Validate that a node is valid. Returns an array of errors
 */
function validateNode(node, path, ancestors) {
  let errors = [];

  if (!node.type) {
    return [{ path, error: 'Node is missing the type property' }];
  }

  if (ancestors.length && node.type === 'Page') {
    errors = [...errors, { path, error: 'Encountered a nested page. Page is only allowed at the top level' }];
  }

  errors = [
    ...errors,
    ...assertProperties(node, path, requiredProperties[node.type]),
    ...assertDeprecations(node, path, deprecatedProperties[node.type]),
  ];

  // Parse logical expressions
  ['hidden', 'disabled', 'test'].forEach((field) => {
    if (!node[field]) {
      return;
    }

    try {
      parseExpression(node[field]);
    } catch (e) {
      errors = [...errors, { path: [...path, field], error: e.message }];
    }
  });

  // Recurse through children
  if (node.children) {
    node.children.forEach((child, index) => {
      errors = [
        ...errors,
        ...validateNode(child, [...path, 'children', index], [...ancestors, node]),
      ];
    });
  }

  // Check and recurse through branches
  if (node.branches) {
    node.branches.forEach((branch, branchIndex) => {
      errors = [
        ...errors,
        ...assertProperties(
          branch,
          [...path, 'branches', branchIndex],
          ['test', 'children'],
        ),
      ];

      // Validate the text expression
      if (branch.test) {
        try {
          parseExpression(branch.test);
        } catch (e) {
          errors = [...errors, { path: [...path, 'branches', branchIndex, 'test'], error: e.message }];
        }
      }

      // Recurse through the branch children
      if (branch.children) {
        branch.children.forEach((child, index) => {
          errors = [
            ...errors,
            ...validateNode(child, [...path, 'branches', branchIndex, 'children', index], [...ancestors, node]),
          ];
        });
      }
    });
  }

  // Recurse over the options
  if (node.options) {
    node.options.forEach((option, index) => {
      errors = [
        ...errors,
        ...validateNode(option, [...path, 'options', index], [...ancestors, node]),
      ];
    });
  }

  // Check image
  if (node.image) {
    if (typeof node.image !== 'object') {
      errors = [
        ...errors,
        { path, error: `an object was expected for the image property. Got ${typeof node.image}` },
      ];
    }

    errors = [
      ...errors,
      ...assertProperties(
        { ...node.image, type: 'Image' },
        [...path, 'image'],
        ['url', 'alt'],
      ),
    ];
  }

  return errors;
}

/**
 * Validate a page, checking that the required properties are in place
 */
function validatePage(page, path) {
  let errors = [];

  // Check for required properties
  errors = [...errors, ...assertProperties(page, path, requiredProperties[page.type])];

  if (page.children) {
    // Check that children is an array
    if (!Array.isArray(page.children)) {
      errors = [...errors, { path, error: 'Children must be an array' }];

      return errors;
    }

    page.children.forEach((node, index) => {
      errors = [...errors, ...validateNode(node, [...path, 'children', index], [page])];
    });
  }

  return errors;
}

/**
 * Validates that the schema is ok. Checking that the top level is pages
 * and recursing down from there, ending up with an array of everything that
 * isn't up to standards 👮
 */
function validateSchema(schema) {
  let errors = [];

  schema.forEach((page, index) => {
    if (!['Page', 'Result'].includes(page.type)) {
      errors = [
        ...errors,
        {
          path: ['schema', index],
          error: 'Top-level element is of invalid type. Must be Page or Result',
        },
      ];
    }

    errors = [
      ...errors,
      ...validatePage(page, ['schema', index]),
    ];
  });

  return errors;
}

export default function validate({ meta, schema }) {
  const metaErrors = validateMeta(meta);
  const schemaErrors = validateSchema(schema);

  return [...metaErrors, ...schemaErrors];
}
