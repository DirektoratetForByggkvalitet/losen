import repeatQuestion from './RepeatQuestion';

const exampleImage = { url: 'someurl', alt: 'some alt' };
const shortText = 'short';
const longText = 'a'.repeat(201);

describe('repeatQuestion', () => {
  it('to be function', () => {
    expect(typeof repeatQuestion).toBe('function');
  });

  it('returns false with no input', () => {
    expect(repeatQuestion()).toBeFalsy();
  });

  it('returns false with only image', () => {
    expect(repeatQuestion(exampleImage)).toBeFalsy();
  });

  it('returns false with image and short text', () => {
    expect(repeatQuestion(exampleImage, shortText)).toBeFalsy();
  });

  it('returns true with image and long text', () => {
    expect(repeatQuestion(exampleImage, longText)).toBeTruthy();
  });
});
