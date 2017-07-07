import { NAME } from '../../state';

import {
  filterSchemaNodes,
  reduceBranches,
} from '../reduce-wizard';

describe('reduce-wizard', () => {
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

    it('replaces the branch node with the children of the correct branch', () => {
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
  });
});
