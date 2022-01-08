import { testRecipe } from '../test/testFactories'
import { Category } from '../types'
import { normalizeRecipe } from './recipeTransformers'

describe('recipe transformers', () => {
  describe('normalizeRecipe', () => {
    const chicken = 'Chicken' as Category

    it('normalize recipe removes redundant chicken', () => {
      const recipe = testRecipe({ categories: ['Poultry', 'Meat', chicken] })

      expect(normalizeRecipe(recipe).categories).toEqual(['Poultry', 'Meat'])
    })

    it('normalize recipe replaces chicken with poultry', () => {
      const recipe = testRecipe({ categories: ['Fish', 'Meat', chicken] })

      expect(normalizeRecipe(recipe).categories).toEqual(['Fish', 'Meat', 'Poultry'])
    })

    it('normalize recipe has no effect of other categories', () => {
      const recipe = testRecipe({ categories: ['Fish', 'Meat', 'Other'] })

      expect(normalizeRecipe(recipe)).toEqual(recipe)
    })
  })
})
