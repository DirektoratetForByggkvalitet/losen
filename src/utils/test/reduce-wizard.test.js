import { NAME } from '../../state';

import reduceWizard, {
  filterSchemaNodes,
  liftChildrenBranchPages,
  mapWizardChildren,
  reduceBranches,
} from '../reduce-wizard';

describe('reduce-wizard', () => {
  it('reduces wizard correctly based on state data', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          { type: 'Input' },
          { type: 'Input', hidden: ({ foo }) => foo === 'bar' },
          {
            type: 'Branch',
            test: ({ bar }) => bar === 'baz',
            branchTruthy: [{ type: 'Input' }],
            branchFalsy: [{ type: 'Result', title: 'The end' }],
          },
        ],
      },
      { type: 'Result', title: 'Foobar' },
    ];

    expect(reduceWizard(wizard, { [NAME]: {} })).toEqual([
      {
        type: 'Page',
        children: [
          { type: 'Input' },
          wizard[0].children[1],
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
          { type: 'Input' },
          { type: 'Input' },
        ],
      },
      { type: 'Result', title: 'Foobar' },
    ]);
  });

  describe('#filterSchemaNodes', () => {
    it('does not filter out nodes missing the hidden property', () => {
      const raw = [{
        type: 'Input',
        hidden: () => true,
      }, {
        type: 'Input',
      }];

      const filtered = raw.filter(filterSchemaNodes({}));
      expect(filtered).toEqual([raw[1]]);
    });

    it('does not filter out Branch nodes', () => {
      const raw = [{
        type: 'Branch',
        hidden: () => true,
      }, {
        type: 'Input',
      }];

      const filtered = raw.filter(filterSchemaNodes({}));
      expect(filtered).toEqual(raw);
    });

    it('filters out nodes', () => {
      const state = { [NAME]: { foo: 'bar' } };

      const raw = [{
        type: 'Input',
        title: 'Fjasebengel',
        hidden: ({ foo }) => foo === 'bar',
      }, {
        type: 'Input',
        title: 'Floppo',
        hidden: ({ foo }) => foo !== 'bar',
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

    it('replaces the branch node with the children of the correct branch when test returns true', () => {
      const state = { [NAME]: { foo: 'bar' } };

      const raw = [{
        type: 'Input',
      }, {
        type: 'Branch',
        test: ({ foo }) => foo === 'bar',
        branchTruthy: [{ type: 'Checkbox' }],
        branchFalsy: [{ type: 'Input' }],
      }];

      const filtered = raw.reduce(reduceBranches(state), []);
      expect(filtered).toEqual([raw[0], ...raw[1].branchTruthy]);
    });

    it('replaces the branch node with the children of the correct branch when test returns false', () => {
      const state = { [NAME]: { foo: 'bar' } };

      const raw = [{
        type: 'Input',
      }, {
        type: 'Branch',
        test: ({ foo }) => foo !== 'bar',
        branchTruthy: [{ type: 'Checkbox' }],
        branchFalsy: [{ type: 'Input' }],
      }];

      const filtered = raw.reduce(reduceBranches(state), []);
      expect(filtered).toEqual([raw[0], ...raw[1].branchFalsy]);
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
              { type: 'Radio', hidden: () => true },
              { type: 'Checkbox' },
            ],
          },
          { type: 'Input' },
          { type: 'Radio', hidden: () => true },
        ],
      };

      expect(mapWizardChildren({})(node)).toEqual({
        type: 'Shit',
        children: [
          {
            type: 'Stuff',
            children: [
              { type: 'Input' },
              { type: 'Checkbox' },
            ],
          },
          { type: 'Input' },
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
