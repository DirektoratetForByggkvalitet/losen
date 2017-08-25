import parse, {
  getValue,
  buildGt,
  buildGte,
  buildLt,
  buildLte,
} from '..';

const stateData = {
  love: {
    cats: 4,
    dogs: 2,
  },
  living: {
    type: 'appartment',
    petsAllowed: true,
  },
  numberOfAnimals: 7,
};

describe('DSL parser', () => {
  describe('getValue', () => {
    it('returns the passed value if a simple value', () => {
      expect(getValue(3, stateData)).toBe(3);
    });

    it('returns the passed value if it\'s an object that contains the property field', () => {
      expect(getValue({ field: 'numberOfAnimals' }, stateData)).toBe(stateData.numberOfAnimals);
    });
  });

  describe('buildGt', () => {
    describe('with simple value', () => {
      const validatorFunc = buildGt({ field: 'numberOfAnimals', value: 3 });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({ valid: false, errors: ['numberOfAnimals må være større enn 3'] });
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({ valid: false, errors: ['numberOfAnimals må være større enn 3'] });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({ valid: true, errors: [] });
      });
    });

    describe('with field reference as value', () => {
      const validatorFunc = buildGt({ field: 'numberOfAnimals', value: { field: 'love.cats' } });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 2,
          love: { cats: 3 },
        })).toEqual({ valid: false, errors: ['numberOfAnimals må være større enn love.cats'] });

        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 3 },
        })).toEqual({ valid: false, errors: ['numberOfAnimals må være større enn love.cats'] });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({
          numberOfAnimals: 4,
          love: { cats: 3 },
        })).toEqual({ valid: true, errors: [] });
      });
    });
  });

  describe('buildGte', () => {
    describe('with simple value', () => {
      const validatorFunc = buildGte({ field: 'numberOfAnimals', value: 3 });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være større enn eller lik 3',
          ],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({ valid: true, errors: [] });
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({ valid: true, errors: [] });
      });
    });

    describe('with field reference as value', () => {
      const validatorFunc = buildGte({ field: 'numberOfAnimals', value: { field: 'love.cats' } });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 2,
          love: { cats: 3 },
        })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være større enn eller lik love.cats',
          ],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 3 },
        })).toEqual({ valid: true, errors: [] });

        expect(validatorFunc({
          numberOfAnimals: 4,
          love: { cats: 3 },
        })).toEqual({ valid: true, errors: [] });
      });
    });
  });

  describe('buildLt', () => {
    describe('with simple value', () => {
      const validatorFunc = buildLt({ field: 'numberOfAnimals', value: 3 });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være mindre enn 3',
          ],
        });
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være mindre enn 3',
          ],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({
          valid: true,
          errors: [] });
        expect(validatorFunc({ numberOfAnimals: 1 })).toEqual({
          valid: true,
          errors: [] });
      });
    });

    describe('with field reference as value', () => {
      const validatorFunc = buildLt({ field: 'numberOfAnimals', value: { field: 'love.cats' } });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 2 },
        })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være mindre enn love.cats',
          ],
        });

        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 3 },
        })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være mindre enn love.cats',
          ],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({
          numberOfAnimals: 2,
          love: { cats: 3 },
        })).toEqual({ valid: true, errors: [] });
      });
    });
  });

  describe('buildLte', () => {
    describe('with simple value', () => {
      const validatorFunc = buildLte({ field: 'numberOfAnimals', value: 3 });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være mindre enn eller lik 3',
          ],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({ valid: true, errors: [] });
        expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({ valid: true, errors: [] });
      });
    });

    describe('with field reference as value', () => {
      const validatorFunc = buildLte({ field: 'numberOfAnimals', value: { field: 'love.cats' } });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 2 },
        })).toEqual({
          valid: false,
          errors: [
            'numberOfAnimals må være mindre enn eller lik love.cats',
          ],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 3 },
        })).toEqual({ valid: true, errors: [] });

        expect(validatorFunc({
          numberOfAnimals: 2,
          love: { cats: 3 },
        })).toEqual({ valid: true, errors: [] });
      });
    });
  });


  it('throws error on invalid expression', () => {
    expect(() => parse({
      type: 'and',
    })).toThrow();
  });
});
