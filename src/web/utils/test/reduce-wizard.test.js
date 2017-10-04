import { NAME } from '../../state';

import reduceWizard, {
  filterSchemaNodes,
  liftChildrenBranchPages,
  mapWizardChildren,
  reduceBranches,
} from '../reduce-wizard';

describe('reduce-wizard', () => {
  it.only('leaves groups in place', () => {
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
                      { type: 'Input', hidden: { field: 'foo', operator: 'neq', value: 'bar' } },
                      { type: 'Result', title: 'The other end' },
                    ],
                  },
                  {
                    children: [{ type: 'Result', title: 'The end' }],
                  },
                ],
              },
            ],
          },
        ],
      },
      { type: 'Result', title: 'Foobar' },
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
                hidden: { field: 'foo', operator: 'neq', value: 'bar' },
                errors: { disabled: [], validation: {}, required: true },
                errorDescription: '',
              },
            ],
          },
        ],
      },
      { title: 'The other end', type: 'Result' },
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
                children: [{ type: 'Result', title: 'The end' }],
              },
            ],
          },
        ],
      },
      { type: 'Result', title: 'Foobar' },
    ];

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      {
        type: 'Page',
        children: [
          { type: 'Input', errors: [], errorDescription: '' },
          { ...wizard[0].children[1], errors: [], errorDescription: '' },
        ],
      },
      { title: 'The end', type: 'Result' },
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
          { type: 'Input', errors: [], errorDescription: '' },
        ],
      },
      { type: 'Result', title: 'The end' },
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
                  { type: 'Input' },
                  { type: 'Radio', hidden: { field: 'foo', operator: 'not' } },
                ],
              },
            ],
          },
        ],
      },
      { type: 'Result', title: 'Foobar' },
    ];

    expect(reduceWizard(wizard, { [NAME]: { foo: 'test' } })).toEqual([
      {
        type: 'Page',
        children: [
          {
            type: 'Input',
            errors: [],
            errorDescription: '',
          },
          {
            ...wizard[0].children[0].branches[0].children[1],
            errors: [],
            errorDescription: '',
          },
        ],
      },
      { type: 'Result', title: 'Foobar' },
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
            errors: [],
            errorDescription: '',
          },
          {
            ...wizard[0].children[0].branches[0].children[1],
            errors: [],
            errorDescription: '',
          },
        ],
      },
      { type: 'Result', title: 'Foobar' },
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
        title: 'Fjasebengel',
        hidden: { field: 'foo', operator: 'eq', value: 'bar' },
      }, {
        type: 'Input',
        title: 'Floppo',
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
              { type: 'Input', errors: [], errorDescription: '' },
              { type: 'Checkbox', errors: [], errorDescription: '' },
            ],
          },
          { type: 'Input', errors: [], errorDescription: '' },
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
            { type: 'Result', title: 'Hey yo' },
          ],
        },
      ];

      expect(raw.reduce(liftChildrenBranchPages, [])).toEqual([
        {
          type: 'Page',
          children: [{ type: 'Input' }],
        },
        { type: 'Result', title: 'Hey yo' },
      ]);
    });
  });
});
