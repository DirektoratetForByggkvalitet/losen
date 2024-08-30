import { template } from "../VariableText"

describe('VariableText', () => {
  describe('template', () => {
    it('should make a template from a string', () => {
      const compile = template('Hei!')
      expect(compile({})).toEqual('Hei!')
    })

    it('should replace a variable', () => {
      const compile = template('Hei, ${name}!')
      expect(compile({ name: 'Kristoffer' })).toEqual('Hei, Kristoffer!')
    })

    it('should replace multiple variables', () => {
      const compile = template('Hei, ${name}! For en fin ${day}!')
      expect(compile({ name: 'Kristoffer', day: 'morgen' })).toEqual('Hei, Kristoffer! For en fin morgen!')
    })

    it('should replace variables multiple times', () => {
      const compile = template('${name}, ${name}, ${name}!')
      expect(compile({ name: 'Kristoffer' })).toEqual('Kristoffer, Kristoffer, Kristoffer!')
    })
  })
})