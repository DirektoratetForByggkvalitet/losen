import {
  getNodeTitles,
} from '../selectors';

describe('state selectors', () => {
  it('gets headings for nodes in schema', () => {
    const wizard = [
      {
        type: 'Page',
        children: [
          { property: 'first.input', type: 'Input' },
          { property: 'next.input', heading: 'The next input', type: 'Input' },
          {
            type: 'Branch',
            branches: [
              {
                children: [{ property: 'branch.input', heading: 'Input in branch', type: 'Input' }],
              },
            ],
          },
        ],
      },
      { type: 'Result', heading: 'Foobar' },
    ];

    expect(getNodeTitles(wizard)).toEqual({
      'branch.input': 'Input in branch',
      'first.input': 'first.input',
      'next.input': 'The next input',
    });
  });
});
