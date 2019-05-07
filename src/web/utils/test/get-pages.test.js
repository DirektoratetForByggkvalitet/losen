import getPages from '../get-pages';

describe('getPages', () => {
  const reducedSchema = [
    {
      id: 'firstPage',
      heading: 'First page',
      type: 'page',
      children: [
        { type: 'input', errors: { required: true } },
      ],
    },
    {
      id: 'otherPage',
      heading: 'The other page',
      type: 'page',
      children: [
        { type: 'input', errors: { required: true } },
        { type: 'input', errors: { validation: { error: true } } },
      ],
    },
  ];

  it('gets list of pages', () => {
    expect(getPages(
      reducedSchema,
      { firstPage: 'Förste sidan', otherPage: 'The other page' },
    )).toEqual([
      {
        id: 'firstPage',
        type: 'page',
        heading: 'Förste sidan',
        errors: 1,
        completed: false,
      },
      {
        id: 'otherPage',
        type: 'page',
        heading: 'The other page',
        errors: 2,
        completed: false,
      },
    ]);
  });
});
