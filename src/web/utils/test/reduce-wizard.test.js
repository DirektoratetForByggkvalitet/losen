import { NAME } from '../../state';

import reduceWizard, {
  filterSchemaNodes,
  liftChildrenBranchPages,
  mapWizardChildren,
  reduceBranches,
} from '../reduce-wizard';

describe('reduce-wizard', () => {
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
              { type: 'Input', hidden: { field: 'foo', operator: 'eq', value: 'bar' } },
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
            currentValue: undefined,
            type: 'Radio',
            errors: { disabled: [], validation: {}, required: true },
            errorDescription: '',
          },
          {
            type: 'Group',
            children: [
              {
                currentValue: undefined,
                type: 'Input',
                errors: { disabled: [], validation: {}, required: true },
                errorDescription: '',
              },
              {
                currentValue: undefined,
                type: 'Input',
                hide: { field: 'foo', operator: 'neq', value: 'bar' },
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
        show: {
          field: 'foo',
          operator: 'eq',
          value: 'bar',
        },
      },
    ]);
  });

  it('reduces wizard correctly based on state data', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          { type: 'Input' },
          { type: 'Input', hidden: { field: 'foo', operator: 'eq', value: 'bar' } },
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
            currentValue: undefined,
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...wizard[0].children[1],
            currentValue: undefined,
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
            currentValue: undefined,
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
                    currentValue: undefined,
                    errorDescription: '',
                    errors: {
                      disabled: [],
                      required: true,
                      validation: {},
                    },
                  },
                  {
                    type: 'Radio',
                    currentValue: undefined,
                    errorDescription: '',
                    errors: {
                      disabled: [],
                      required: true,
                      validation: {},
                    },
                    hidden: {
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
            currentValue: undefined,
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...wizard[0].children[0].branches[0].children[1],
            currentValue: undefined,
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
            currentValue: undefined,
            errorDescription: '',
            errors: {
              disabled: [],
              required: true,
              validation: {},
            },
          },
          {
            ...wizard[0].children[0].branches[0].children[1],
            currentValue: undefined,
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
        hidden: { field: 'foo', operator: 'eq', value: 'test' },
      }, {
        type: 'Input',
      }];

      const filtered = raw.filter(filterSchemaNodes({ [NAME]: { foo: 'test' } }));
      expect(filtered).toEqual([raw[1]]);
    });

    it('does not filter out Branch nodes', () => {
      const raw = [{
        type: 'Branch',
        hidden: { field: 'foo', operator: 'eq', value: 'test' },
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
        hidden: { field: 'foo', operator: 'eq', value: 'bar' },
      }, {
        type: 'Input',
        heading: 'Floppo',
        hidden: { field: 'foo', operator: 'neq', value: 'bar' },
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
            children: [{ type: 'Checkbox' }],
          },
          {
            test: { field: 'foo', operator: 'eq', value: 'baz' },
            children: [{ type: 'Input' }],
          },
        ],
      }];

      expect(
        raw.reduce(reduceBranches({ [NAME]: { foo: 'bar' } }), []),
      ).toEqual([raw[0], ...raw[1].branches[0].children]);

      expect(
        raw.reduce(reduceBranches({ [NAME]: { foo: 'baz' } }), []),
      ).toEqual([raw[0], ...raw[1].branches[1].children]);

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
              { type: 'Radio', hidden: { field: 'foo', operator: 'eq', value: 'bar' } },
              { type: 'Checkbox' },
            ],
          },
          { type: 'Input' },
          { type: 'Radio', hidden: { field: 'foo', operator: 'eq', value: 'bar' } },
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
                currentValue: undefined,
                errorDescription: '',
                errors: {
                  disabled: [],
                  required: true,
                  validation: {},
                },
              },
              {
                type: 'Checkbox',
                currentValue: undefined,
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
            currentValue: undefined,
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
});
