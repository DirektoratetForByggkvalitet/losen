import {
  getData,
  getTitle,
  getNodeTitles,
  getNodeErrors,
  getErrorPages,
  getTranslation,
  getCurrentLanguage,
} from '../selectors';

import { NAME } from '../../state/index';

describe('state selectors', () => {
  const schema = [
    {
      id: 'first',
      type: 'Page',
      heading: 'First page',
      children: [
        { id: 'first.input', type: 'Input' },
        { id: 'next.input', heading: 'The next input', type: 'Input' },
        {
          type: 'Branch',
          branches: [
            {
              children: [{ id: 'branch.input', heading: 'Input in branch', type: 'Input' }],
            },
          ],
        },
      ],
    },
    { id: 'foobar', type: 'Result', heading: 'Foobar' },
  ];

  describe('getData', () => {
    it('returns the wizard state', () => {
      expect(getData({ [NAME]: { catIsCute: true } })).toEqual({ catIsCute: true });
    });

    it('returns an empty object if state object is undefined', () => {
      expect(getData({})).toEqual({});
    });
  });

  describe('getNodeTitles', () => {
    it('gets headings for nodes in schema', () => {
      const translations = {};
      const state = { [NAME]: {} };

      expect(getNodeTitles(schema, translations, state)).toEqual({
        'branch.input': 'Input in branch',
        'first.input': 'first.input',
        'next.input': 'The next input',
        first: 'First page',
        foobar: 'Foobar',
      });
    });

    it('gets headings for translated nodes in schema', () => {
      const translations = {
        se: {
          key: 'se',
          name: 'Svenska',
          tags: {
            'next.input': { heading: 'Nästa inmatningsfält' },
            first: { heading: 'Första sidan' },
          },
        } };
      const state = { [NAME]: { $language: 'se' } };

      expect(getNodeTitles(schema, translations, state)).toEqual({
        'branch.input': 'Input in branch',
        'first.input': 'first.input',
        'next.input': 'Nästa inmatningsfält',
        first: 'Första sidan',
        foobar: 'Foobar',
      });
    });
  });

  describe('getNodeErrors', () => {
    describe('increase error count if', () => {
      it('disabled is a non zero length array', () => {
        expect(getNodeErrors({ errors: { disabled: [{}, {}] } })).toBe(2);
      });

      it('node has an error regarding a required field', () => {
        expect(getNodeErrors({ errors: { required: true } })).toBe(1);
      });

      it('there is a validation error', () => {
        expect(getNodeErrors({ errors: { validation: { error: true } } })).toBe(1);
      });

      it('children of the node has errors', () => {
        expect(getNodeErrors({
          children: [
            { errors: { disabled: [{}, {}] } }, // 2 errors
            { errors: { required: true } }, // 1 error
            { errors: { validation: { error: true } } }, // 1 error
          ],
        })).toBe(4);
      });
    });
  });

  describe('getErrorPages', () => {
    it('returns pages with errors', () => {
      expect(getErrorPages([
        { id: 'first', type: 'Page', children: [] },
        { id: 'second',
          type: 'Page',
          heading: 'The other page',
          children: [
            {
              id: 'firstName',
              type: 'Input',
              heading: 'First name',
              property: 'firstName',
            },
          ] },
      ], {})).toEqual([
        {
          errorNodes: [
            {
              errors: {
                disabled: [],
                required: true,
                validation: {},
              },
              heading: 'First name',
              property: 'firstName',
            },
          ],
          heading: 'The other page',
          id: 'second',
          type: 'Page',
        },
      ]);
    });
  });

  describe('getCurrentLanguage', () => {
    it('handles empty state', () => {
      expect(getCurrentLanguage({})).toBe('no');
    });

    it('allows specifying a default value (if no language is set)', () => {
      expect(getCurrentLanguage({}, 1337)).toBe(1337);
    });

    it('returns the selected language', () => {
      expect(getCurrentLanguage({ [NAME]: { $language: 'se' } })).toBe('se');
    });
  });

  describe('getTitle', () => {
    it('returns title of wizard', () => {
      expect(getTitle({ [NAME]: {} }, { meta: { title: 'My wizard' } }, {})).toBe('My wizard');
    });

    it('use the title from translation if one is specified, and selected', () => {
      expect(getTitle(
        { [NAME]: { $language: 'se' } },
        { meta: { title: 'My wizard' } },
        { se: { meta: { title: 'Min vägvisare' } } })).toBe('Min vägvisare');
    });
  });

  describe('getTranslation', () => {
    it('handles if no language is selected', () => {
      expect(getTranslation({}, {})).toEqual({});
    });

    it('returns the tags for the correct language', () => {
      const translations = {
        se: {
          key: 'se',
          name: 'Svenska',
          meta: { title: 'Min vägvisare' },
          tags: [
            { varemerker: { heading: 'Varumärken' } },
          ],
        },
      };
      expect(getTranslation(
        { [NAME]: { $language: 'se' } },
        translations,
      )).toEqual(translations.se.tags);
    });
  });
});
