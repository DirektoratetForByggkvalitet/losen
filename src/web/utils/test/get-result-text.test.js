import getResultText from '../get-result-text';

describe('get-result-text', () => {
  it('get result text for simple string', () => {
    expect(getResultText('apekatt', true, true)).toBe('apekatt');
  });

  it('gets the right text from object value', () => {
    const heading = {
      complete: 'Ferdig',
      completeWithError: 'Ferdig, med feil',
      incomplete: 'Ikke ferdig, ingen feil',
      incompleteWithError: 'Ikke ferdig, og har feil',
    };

    expect(getResultText(heading, false, false)).toBe(heading.complete);
    expect(getResultText(heading, false, true)).toBe(heading.completeWithError);
    expect(getResultText(heading, true, false)).toBe(heading.incomplete);
    expect(getResultText(heading, true, true)).toBe(heading.incompleteWithError);
  });
});
