import { NAME } from '../../state';

import {
  filterSchemaNodes,
  reduceBranches,
} from '../reduce-wizard';

describe('reduce-wizard', () => {
  describe('#filterSchemaNodes', () => {
    it('does not filter out nodes missing the hidden property', () => {
      const filtered = [{
        type: 'Input',
        hidden: () => true,
      }, {
        type: 'Input',
      }].filter(filterSchemaNodes({}));

      expect(filtered).toHaveLength(1);
      expect(filtered).toHaveProperty('0.type', 'Input');
    });

    it('does not filter out Branch nodes', () => {
      const filtered = [{
        type: 'Branch',
        hidden: () => true,
      }, {
        type: 'Input',
      }].filter(filterSchemaNodes({}));

      expect(filtered).toHaveLength(2);
    });

    it('filters out nodes', () => {
      const state = { [NAME]: { foo: 'bar' } };

      const filtered = [{
        type: 'Input',
        title: 'Fjasebengel',
        hidden: ({ foo }) => foo === 'bar',
      }, {
        type: 'Input',
        title: 'Floppo',
        hidden: ({ foo }) => foo !== 'bar',
      }].filter(filterSchemaNodes(state));

      expect(filtered).toHaveLength(1);
      expect(filtered).toHaveProperty('0.title', 'Floppo');
    });
  });

  describe('#reduceBranches', () => {
    it('does nothing with non-branches', () => {
      const state = { [NAME]: { foo: 'bar' } };

      const filtered = [{
        type: 'Input',
      }, {
        type: 'Branch',
        test: ({ foo }) => foo === 'bar',
        branchTruthy: [{ type: 'Checkbox' }],
        branchFalsy: [{ type: 'Input' }],
      }].reduce(reduceBranches(state), []);

      expect(filtered).toHaveLength(2);
      expect(filtered).toHaveProperty('1.type', 'Checkbox');
    });
  });
});
