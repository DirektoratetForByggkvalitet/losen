import { NAME } from '../../state';
import { filterSchemaNodes } from '../reduce-wizard';

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
});
