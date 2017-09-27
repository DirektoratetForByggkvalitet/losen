import {
  getValue,
  buildValidatorForSimpleExpression,
  buildValidatorForComplexExpression,
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

  describe('greater than', () => {
    describe('with simple value', () => {
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'gt',
        value: 3,
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({ valid: false, errors: [[{ field: 'numberOfAnimals' }, 'må være større enn', 3]] });
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({ valid: false, errors: [[{ field: 'numberOfAnimals' }, 'må være større enn', 3]] });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({ valid: true, errors: [] });
      });
    });

    describe('with field reference as value', () => {
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'gt',
        value: { field: 'love.cats' },
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 2,
          love: { cats: 3 },
        })).toEqual({ valid: false, errors: [[{ field: 'numberOfAnimals' }, 'må være større enn', { field: 'love.cats' }]] });

        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 3 },
        })).toEqual({ valid: false, errors: [[{ field: 'numberOfAnimals' }, 'må være større enn', { field: 'love.cats' }]] });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({
          numberOfAnimals: 4,
          love: { cats: 3 },
        })).toEqual({ valid: true, errors: [] });
      });
    });
  });

  describe('greater than or equal', () => {
    describe('with simple value', () => {
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'gte',
        value: 3,
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være større enn eller lik', 3]],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({ valid: true, errors: [] });
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({ valid: true, errors: [] });
      });
    });

    describe('with field reference as value', () => {
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'gte',
        value: { field: 'love.cats' },
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 2,
          love: { cats: 3 },
        })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være større enn eller lik', { field: 'love.cats' }]],
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

  describe('less than', () => {
    describe('with simple value', () => {
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'lt',
        value: 3,
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være mindre enn', 3]],
        });
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være mindre enn', 3]],
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
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'lt',
        value: { field: 'love.cats' },
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 2 },
        })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være mindre enn', { field: 'love.cats' }]],
        });

        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 3 },
        })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være mindre enn', { field: 'love.cats' }]],
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

  describe('less than or equal', () => {
    describe('with simple value', () => {
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'lte',
        value: 3,
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være mindre enn eller lik', 3]],
        });
      });

      it('succeeds when condition is met', () => {
        expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({ valid: true, errors: [] });
        expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({ valid: true, errors: [] });
      });
    });

    describe('with field reference as value', () => {
      const validatorFunc = buildValidatorForSimpleExpression({
        field: 'numberOfAnimals',
        operator: 'lte',
        value: { field: 'love.cats' },
      });

      it('returns error when condition is not met', () => {
        expect(validatorFunc({
          numberOfAnimals: 3,
          love: { cats: 2 },
        })).toEqual({
          valid: false,
          errors: [[{ field: 'numberOfAnimals' }, 'må være mindre enn eller lik', { field: 'love.cats' }]],
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

  describe('between values (in range)', () => {
    const validatorFunc = buildValidatorForSimpleExpression({
      field: 'numberOfAnimals',
      operator: 'between',
      value: [3, 5],
    });

    it('returns error when condition is not met', () => {
      expect(validatorFunc({ numberOfAnimals: 2 })).toEqual({
        valid: false,
        errors: [[{ field: 'numberOfAnimals' }, 'må være mellom', 3, 'og', 5]],
      });

      expect(validatorFunc({ numberOfAnimals: 6 })).toEqual({
        valid: false,
        errors: [[{ field: 'numberOfAnimals' }, 'må være mellom', 3, 'og', 5]],
      });
    });

    it('succeeds when condition is met', () => {
      expect(validatorFunc({ numberOfAnimals: 3 })).toEqual({ valid: true, errors: [] });
      expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({ valid: true, errors: [] });
      expect(validatorFunc({ numberOfAnimals: 5 })).toEqual({ valid: true, errors: [] });
    });
  });

  describe('required', () => {
    const validatorFunc = buildValidatorForSimpleExpression({
      field: 'numberOfAnimals',
      operator: 'required',
    });

    it('returns error when condition is not met', () => {
      expect(validatorFunc({ })).toEqual({
        valid: false,
        errors: [[{ field: 'numberOfAnimals' }, 'er påkrevd']],
      });
    });

    it('succeeds when condition is met', () => {
      expect(validatorFunc({ numberOfAnimals: 5 })).toEqual({
        valid: true,
        errors: [],
      });
    });
  });

  describe('validateComplexExpression', () => {
    describe('or expression', () => {
      const validatorFunc = buildValidatorForComplexExpression({
        type: 'or',
        clauses: [
          { field: 'love.cats', operator: 'eq', value: true },
          { field: 'allergic', operator: 'eq', value: true },
        ],
      });

      it('returns error when conditions is not met', () => {
        expect(validatorFunc({ love: { snakes: true } })).toEqual({
          errors: {
            errors: [
              [{ field: 'love.cats' }, 'må være lik', true],
              [{ field: 'allergic' }, 'må være lik', true],
            ],
            operator: 'or',
          },
          valid: false,
        });
      });

      it('succeeds when conditions is met', () => {
        expect(validatorFunc({ love: { cats: true } })).toEqual({
          errors: {
            errors: [],
            operator: 'or',
          },
          valid: true,
        });
      });
    });

    describe('and expression', () => {
      const validatorFunc = buildValidatorForComplexExpression({
        type: 'and',
        clauses: [
          { field: 'love.cats', operator: 'eq', value: true },
          { field: 'allergic', operator: 'eq', value: false },
        ],
      });

      it('returns error when conditions is not met', () => {
        expect(validatorFunc({ love: { cats: true } })).toEqual({
          errors: {
            errors: [
              [{ field: 'allergic' }, 'må være lik', false],
            ],
            operator: 'and',
          },
          valid: false,
        });
      });

      it('succeeds when conditions is met', () => {
        expect(validatorFunc({
          love: { cats: true },
          allergic: false,
        })).toEqual({
          errors: {
            errors: [],
            operator: 'and',
          },
          valid: true,
        });
      });
    });

    describe('nested expression', () => {
      /**
       * numberOfAnimals < 4 && (love.snakes || (love.cats && !allergic))
       */
      const validatorFunc = buildValidatorForComplexExpression({
        type: 'and',
        clauses: [
          { field: 'numberOfAnimals', operator: 'lt', value: 4 },
          {
            type: 'or',
            clauses: [
              { field: 'love.snakes', operator: 'eq', value: true },
              {
                type: 'and',
                clauses: [
                  { field: 'love.cats', operator: 'eq', value: true },
                  { field: 'allergic', operator: 'eq', value: false },
                ],
              },
            ],
          },
        ],
      });

      it('returns error when conditions is not met', () => {
        expect(validatorFunc({ numberOfAnimals: 4 })).toEqual({
          errors: {
            errors: [
              [{ field: 'numberOfAnimals' }, 'må være mindre enn', 4],
              {
                errors: [
                  [{ field: 'love.snakes' }, 'må være lik', true],
                  {
                    errors: [
                      [{ field: 'love.cats' }, 'må være lik', true],
                      [{ field: 'allergic' }, 'må være lik', false],
                    ],
                    operator: 'and',
                  },
                ],
                operator: 'or',
              },
            ],
            operator: 'and',
          },
          valid: false,
        });

        expect(validatorFunc({
          love: { cats: true },
          allergic: false,
        })).toEqual({
          errors: {
            errors: [
              [{ field: 'numberOfAnimals' }, 'må være mindre enn', 4],
            ],
            operator: 'and',
          },
          valid: false,
        });
      });

      it('succeeds when conditions is met', () => {
        expect(validatorFunc({
          numberOfAnimals: 2,
          love: { cats: true },
          allergic: false,
        })).toEqual({
          errors: {
            errors: [],
            operator: 'and',
          },
          valid: true,
        });
      });
    });
  });
});
