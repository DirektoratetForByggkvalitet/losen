import { omit } from 'lodash';

import { NAME } from '../../state';

import reduceWizard, {
  filterSchemaNodes,
  liftChildrenBranchPages,
  mapWizardChildren,
  reduceBranches,
  translateNode,
  buildNodeMap,
} from '../reduce-wizard';

describe('reduce-wizard', () => {
  it('replaces references', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          {
            type: 'Branch',
            branches: [
              {
                test: {
                  field: 'apekatt',
                  operator: 'neq',
                  value: 'hipp hopp ostepop',
                },
                children: [
                  { type: 'Input' },
                  { type: 'Reference', nodeId: 'resultPage' },
                  {
                    type: 'Radio',
                    options: [
                      { heading: 'Ostepop', id: 'ostepop' },
                      { heading: 'Godt & Blanda', id: 'diggsnop' },
                    ],
                  },
                ],
              },
            ],
          },
          { type: 'Input', id: 'apekatt' },
        ],
      },
      {
        type: 'Result',
        id: 'resultPage',
        heading: 'Foobar',
        children: [
          {
            type: 'Reference',
            nodeId: 'apekatt',
            hide: { field: 'foo', operator: 'eq', value: 'bar' },
          },
          {
            type: 'Radio',
            options: [
              {
                type: 'Reference',
                nodeId: 'diggsnop',
                show: { field: 'foo', operator: 'eq', value: 'bar' },
              },
              {
                type: 'Reference',
                nodeId: 'ostepop',
              },
            ],
          },
        ],
      },
    ];

    expect(reduceWizard(wizard, { [NAME]: { foo: 'bar' } })).toEqual([
      {
        type: 'Page',
        children: [
          {
            type: 'Input',
            errors: {
              disabled: [],
              validation: {},
              required: true,
            },
            errorDescription: '',
          },
        ],
      },
      {
        type: 'Result',
        id: 'resultPage',
        heading: 'Foobar',
        children: [
          {
            type: 'Radio',
            options: [
              {
                heading: 'Godt & Blanda',
                id: 'diggsnop',
                messages: [],
                show: {
                  field: 'foo',
                  operator: 'eq',
                  value: 'bar',
                },
              },
              {
                heading: 'Ostepop',
                id: 'ostepop',
                messages: [],
              },
            ],
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
    ]);
  });

  it('removes empty pages', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          {
            type: 'Branch',
            branches: [
              {
                test: {
                  field: 'fjasebengel',
                  operator: 'required',
                },
                children: [
                  { type: 'Input' },
                ],
              },
            ],
          },
        ],
      },
      { type: 'Result', heading: 'Foobar' },
    ];

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      { heading: 'Foobar', type: 'Result' },
    ]);
  });

  it('leaves groups in place', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          { type: 'Radio' },
          {
            type: 'Group',
            children: [
              { type: 'Input' },
              { type: 'Input', hide: { field: 'foo', operator: 'eq', value: 'bar' } },
              {
                type: 'Branch',
                branches: [
                  {
                    test: { field: 'foo', operator: 'eq', value: 'bar' },
                    children: [
                      { type: 'Input', hide: { field: 'foo', operator: 'neq', value: 'bar' } },
                      { type: 'Result', show: { field: 'foo', operator: 'eq', value: 'bar' }, heading: 'The other end' },
                    ],
                  },
                  {
                    children: [{ type: 'Result', heading: 'The end' }],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'Result', heading: 'Foobar' },
    ];

    expect(reduceWizard(wizard, { [NAME]: { foo: 'bar' } })).toEqual([
      {
        type: 'Page',
        children: [
          {
            type: 'Radio',
            errors: { disabled: [], validation: {}, required: true },
            errorDescription: '',
          },
          {
            type: 'Group',
            children: [
              {
                type: 'Input',
                errors: { disabled: [], validation: {}, required: true },
                errorDescription: '',
              },
              {
                type: 'Input',
                errors: { disabled: [], validation: {}, required: true },
                errorDescription: '',
              },
            ],
          },
        ],
      },
      {
        heading: 'The other end',
        type: 'Result',
      },
    ]);
  });

  it('reduces wizard correctly based on state data', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          { type: 'Input' },
          { type: 'Input', hide: { field: 'foo', operator: 'eq', value: 'bar' } },
          {
            type: 'Branch',
            branches: [
              {
                test: { field: 'foo', operator: 'eq', value: 'baz' },
                children: [{ type: 'Input' }],
              },
              {
                test: { field: 'foo', operator: 'neq', value: 'baz' },
                children: [{ type: 'Result', heading: 'The end' }],
              },
            ],
          },
        ],
      },
      { type: 'Result', heading: 'Foobar' },
    ];

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      {
        type: 'Page',
        children: [
          {
            type: 'Input',
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...omit( // we expect the show, hide and hidden props to be gone
              wizard[0].children[1],
              ['show', 'hide', 'hidden'],
            ),
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      { heading: 'The end', type: 'Result' },
    ]);

    expect(reduceWizard(wizard, {
      [NAME]: {
        foo: 'bar',
        bar: 'baz',
      },
    })).toEqual([
      {
        type: 'Page',
        children: [
          {
            type: 'Input',
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      { type: 'Result', heading: 'The end' },
    ]);
  });

  it("doesn't add error stuff to result page", () => {
    const wizard = [
      { type: 'Page' },
      { type: 'Result', heading: 'Foobar' },
    ];

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      { heading: 'Foobar', type: 'Result' },
    ]);
  });

  it('filters out children nodes correctly', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          {
            type: 'Branch',
            branches: [
              {
                test: { field: 'foo', operator: 'required' },
                children: [
                  {
                    type: 'Input',
                    errorDescription: '',
                    errors: {
                      disabled: [],
                      required: true,
                      validation: {},
                    },
                  },
                  {
                    type: 'Radio',
                    errorDescription: '',
                    errors: {
                      disabled: [],
                      required: true,
                      validation: {},
                    },
                    hide: {
                      field: 'foo',
                      operator: 'not',
                    },
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'Result',
        heading: 'Foobar',
      },
    ];

    expect(reduceWizard(wizard, { [NAME]: { foo: 'test' } })).toEqual([
      {
        type: 'Page',
        children: [
          {
            type: 'Input',
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...omit( // we expect the show, hide and hidden props to be gone
              wizard[0].children[0].branches[0].children[1],
              ['show', 'hide', 'hidden'],
            ),
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      { type: 'Result', heading: 'Foobar' },
    ]);

    expect(reduceWizard(wizard, {
      [NAME]: {
        foo: 'bar',
      },
    })).toEqual([
      {
        type: 'Page',
        children: [
          {
            type: 'Input',
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...omit( // we expect the show, hide and hidden props to be gone
              wizard[0].children[0].branches[0].children[1],
              ['show', 'hide', 'hidden'],
            ),
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      },
      { type: 'Result', heading: 'Foobar' },
    ]);
  });

  describe('#filterSchemaNodes', () => {
    it('does not filter out nodes missing the hidden property', () => {
      const raw = [{
        type: 'Input',
        hide: { field: 'foo', operator: 'eq', value: 'test' },
      }, {
        type: 'Input',
      }];

      const filtered = raw.filter(filterSchemaNodes({ [NAME]: { foo: 'test' } }));
      expect(filtered).toEqual([raw[1]]);
    });

    it('does not filter out Branch nodes', () => {
      const raw = [{
        type: 'Branch',
        hide: { field: 'foo', operator: 'eq', value: 'test' },
      }, {
        type: 'Input',
      }];

      const filtered = raw.filter(filterSchemaNodes({ [NAME]: { foo: 'test' } }));
      expect(filtered).toEqual(raw);
    });

    it('filters out nodes', () => {
      const state = { [NAME]: { foo: 'bar' } };

      const raw = [{
        type: 'Input',
        heading: 'Fjasebengel',
        hide: { field: 'foo', operator: 'eq', value: 'bar' },
      }, {
        type: 'Input',
        heading: 'Floppo',
        hide: { field: 'foo', operator: 'neq', value: 'bar' },
      }];

      const filtered = raw.filter(filterSchemaNodes(state));
      expect(filtered).toEqual([raw[1]]);
    });
  });

  describe('#reduceBranches', () => {
    it('does nothing with non-branches', () => {
      const raw = [{
        type: 'Input',
      }, {
        type: 'Radio',
      }];

      const filtered = raw.reduce(reduceBranches({}), []);
      expect(filtered).toEqual(raw);
    });

    it('replaces the branch node with the children of the correct branch', () => {
      const raw = [{
        type: 'Input',
      }, {
        type: 'Branch',
        branches: [
          {
            test: { field: 'foo', operator: 'eq', value: 'bar' },
            children: [{ type: 'Radio' }],
          },
          {
            test: { field: 'foo', operator: 'eq', value: 'baz' },
            children: [{ type: 'Input' }],
          },
        ],
      }];

      expect(
        raw.reduce(reduceBranches({ [NAME]: { foo: 'bar' } }), []),
      ).toEqual([
        raw[0],
        {
          ...raw[1].branches[0].children[0],
          errorDescription: '',
          errors: {
            disabled: [],
            required: true,
            validation: {},
          },
        },
      ]);

      expect(
        raw.reduce(reduceBranches({ [NAME]: { foo: 'baz' } }), []),
      ).toEqual([
        raw[0],
        {
          ...raw[1].branches[1].children[0],
          errorDescription: '',
          errors: {
            disabled: [],
            required: true,
            validation: {},
          },
        },
      ]);

      expect(
        raw.reduce(reduceBranches({ [NAME]: { foo: 'ban' } }), []),
      ).toEqual([raw[0]]);
    });
  });


  describe('#mapWizardChildren', () => {
    it('processes child nodes recursively', () => {
      const node = {
        type: 'Shit',
        children: [
          {
            type: 'Stuff',
            children: [
              { type: 'Input' },
              { type: 'Radio', hide: { field: 'foo', operator: 'eq', value: 'bar' } },
              { type: 'Checkbox' },
            ],
          },
          { type: 'Input' },
          { type: 'Radio', hide: { field: 'foo', operator: 'eq', value: 'bar' } },
        ],
      };

      expect(mapWizardChildren(
        { [NAME]: { foo: 'bar' } },
      )(node)).toEqual({
        type: 'Shit',
        children: [
          {
            type: 'Stuff',
            children: [
              {
                type: 'Input',
                errorDescription: '',
                errors: {
                  disabled: [],
                  required: true,
                  validation: {},
                },
              },
              {
                type: 'Checkbox',
                errorDescription: '',
                errors: {
                  disabled: [],
                  required: true,
                  validation: {},
                },
              },
            ],
          },
          {
            type: 'Input',
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
        ],
      });
    });

    describe('sets error.required for', () => {
      const node = {
        id: 'snakez',
        property: 'snakez',
        type: 'Checkbox',
        heading: 'Dat is snakes?',
        options: [
          {
            id: 'creeps',
            type: 'Answer',
            heading: 'Gimme creeps',
            value: 'creaps',
          },
          {
            id: 'sneak',
            type: 'Answer',
            heading: 'Many sneak',
            value: 'sneak',
          },
          {
            id: 'evil',
            type: 'Answer',
            heading: 'Very evil',
            value: 'evil',
          },
        ],
      };

      const allMandatoryNode = { ...node, allMandatory: true };

      it('non-optional checkbox with nothing selected', () => {
        expect(
          mapWizardChildren({ [NAME]: { foo: 'bar' } })(node),
        ).toHaveProperty('errors.required', true);
      });

      it('allMandatory checkbox with something, but not all selected', () => {
        expect(
          mapWizardChildren({ [NAME]: { snakez: {
            creaps: true,
          } } })(allMandatoryNode),
        ).toHaveProperty('errors.required', true);
      });
    });

    describe('does not set error.required for', () => {
      const node = {
        id: 'snakez',
        property: 'snakez',
        type: 'Checkbox',
        heading: 'Dat is snakes?',
        options: [
          {
            id: 'creeps',
            type: 'Answer',
            heading: 'Gimme creeps',
            value: 'creaps',
          },
          {
            id: 'sneak',
            type: 'Answer',
            heading: 'Many sneak',
            value: 'sneak',
          },
          {
            id: 'evil',
            type: 'Answer',
            heading: 'Very evil',
            value: 'evil',
          },
        ],
      };

      const optionalNode = { ...node, optional: true };

      it('optional checkbox with nothing selected', () => {
        expect(
          mapWizardChildren({ [NAME]: {} })(optionalNode).errors,
        ).toEqual({ disabled: [], validation: {} });
      });

      it('non-allMandatory checkbox with one option selected', () => {
        expect(
          mapWizardChildren({ [NAME]: { snakez: {
            creaps: true,
          } } })(node),
        ).toHaveProperty('errors.required', false);
      });
    });
  });

  describe('#liftChildrenBranchPages', () => {
    it('hoists page if the last node is a result page', () => {
      const raw = [
        {
          type: 'Page',
          children: [
            { type: 'Input' },
            { type: 'Result', heading: 'Hey yo' },
          ],
        },
      ];

      expect(raw.reduce(liftChildrenBranchPages, [])).toEqual([
        {
          type: 'Page',
          children: [{ type: 'Input' }],
        },
        { type: 'Result', heading: 'Hey yo' },
      ]);
    });
  });

  describe('#buildNodeMap', () => {
    it('ignores refs with no nodeId property', () => {
      const raw = [
        { type: 'Page' },
        { type: 'Page', id: 'apekatt' },
      ];

      expect(buildNodeMap(raw)).toEqual({ apekatt: { type: 'Page', id: 'apekatt' } });
    });

    it('includes child node of node ignored because of missing id', () => {
      const raw = [
        {
          type: 'Page',
          children: [
            { type: 'Input', id: 'apekatt' },
          ],
        },
      ];

      expect(buildNodeMap(raw)).toEqual({ apekatt: { type: 'Input', id: 'apekatt' } });
    });

    it('includes pages and result pages', () => {
      const raw = [
        { type: 'Page' },
        { type: 'Page', id: 'apekatt' },
        { type: 'Result' },
        { type: 'Result', id: 'fjasebengel' },
      ];

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: 'Page', id: 'apekatt' },
        fjasebengel: { type: 'Result', id: 'fjasebengel' },
      });
    });

    it('includes branch children', () => {
      const raw = [
        {
          type: 'Page',
          children: [
            {
              type: 'Branch',
              branches: [
                {
                  test: {
                    field: 'houseType',
                    operator: 'eq',
                    value: 'enebolig',
                  },
                  children: [
                    { type: 'Input', id: 'apekatt' },
                  ],
                },
                {
                  test: {
                    field: 'houseType',
                    operator: 'eq',
                    value: 'rekkehus',
                  },
                  children: [
                    { type: 'Input', id: 'fjasebengel' },
                  ],
                },
              ],
            },
          ],
        },
      ];

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: 'Input', id: 'apekatt' },
        fjasebengel: { type: 'Input', id: 'fjasebengel' },
      });
    });

    it('includes options', () => {
      const raw = [
        {
          type: 'Page',
          children: [
            {
              type: 'Radio',
              options: [
                {
                  test: {
                    field: 'houseType',
                    operator: 'eq',
                    value: 'enebolig',
                  },
                  children: [
                    { type: 'Input', id: 'apekatt' },
                  ],
                },
                {
                  test: {
                    field: 'houseType',
                    operator: 'eq',
                    value: 'rekkehus',
                  },
                  children: [
                    { type: 'Input', id: 'fjasebengel' },
                  ],
                },
              ],
            },
          ],
        },
      ];

      expect(buildNodeMap(raw)).toEqual({
        apekatt: { type: 'Input', id: 'apekatt' },
        fjasebengel: { type: 'Input', id: 'fjasebengel' },
      });
    });
  });

  describe('#translateNode', () => {
    const translations = {
      se: {
        key: 'se',
        name: 'Svenska',
        tags: {
          varemerker: {
            heading: 'Varumärken',
          },
          risikovurdering: {
            heading: 'Riskbedömning',
            description: 'Vi behöver veta hur mycket risk',
          },
          fasade: {
            heading: 'Fasade',
            image: {
              large: 'http://example.com/large.jpeg',
            },
          },
        },
      },
    };

    it('returns node if no translation is found', () => {
      const node = {
        id: 'varemerker',
        type: 'Input',
        heading: 'Varemerker',
      };

      expect(translateNode(node, {}, translations)).toEqual(node);
    });

    it('returns translated heading', () => {
      const node = {
        id: 'varemerker',
        type: 'Input',
        heading: 'Varemerker',
      };

      expect(translateNode(
        node,
        { [NAME]: { $language: 'se' } },
        translations,
      )).toEqual({
        ...node,
        heading: translations.se.tags.varemerker.heading,
      });
    });

    it('returns translated lead/text', () => {
      ['Page', 'Result', 'Input'].forEach((type) => {
        const descriptionNodeProperty = type === 'Input' ? 'text' : 'lead';

        const node = {
          type,
          id: 'risikovurdering',
          [descriptionNodeProperty]: 'Risikovurdering',
        };

        const translatedNode = translateNode(
          node,
          { [NAME]: { $language: 'se' } },
          translations,
        );

        expect(translatedNode).toEqual({
          ...node,
          heading: translations.se.tags.risikovurdering.heading,
          [descriptionNodeProperty]: translations.se.tags.risikovurdering.description,
        });
      });
    });

    it('sets image from translation', () => {
      const node = {
        type: 'Image',
        id: 'fasade',
      };

      const translatedNode = translateNode(
        node,
        { [NAME]: { $language: 'se' } },
        translations,
      );

      expect(translatedNode).toEqual({
        ...node,
        heading: translations.se.tags.fasade.heading,
        image: {
          url: translations.se.tags.fasade.image.large,
          alt: `Illustrasjon for ${translations.se.tags.fasade.heading}`,
        },
      });
    });
  });
});
