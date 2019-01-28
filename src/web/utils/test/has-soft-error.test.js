import hasSoftError from '../has-soft-error';

describe('has-soft-error', () => {
  it('returns true if error in children', () => {
    expect(hasSoftError({
      children: [{ type: 'Error' }],
    })).toBeTruthy();
  });
});
