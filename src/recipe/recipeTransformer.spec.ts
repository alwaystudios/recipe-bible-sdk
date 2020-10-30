import { omit } from 'ramda'
import { testRecipe } from '../test/testRecipes'
import { emptyRecipeRecord, toRecipeRecord } from './recipeTransformer'

describe('recipe transformers', () => {
  describe('toRecipeRecord', () => {
    it('transforms a recipe to a recipe record', () => {
      const recipe = testRecipe('test')
      const recipeRecord = omit(['title', 'id'], recipe)
      expect(toRecipeRecord(recipe)).toEqual(recipeRecord)
    })
  })

  describe('emptyRecipeRecord', () => {
    it('returns an empty record', () => {
      expect(emptyRecipeRecord()).toEqual({
        servings: 0,
        cookingTime: '',
        imgSrc: '',
        nutrition: {},
        categories: [],
        ingredients: [],
        steps: [],
        metadata: {
          focused: false,
          reviewed: false,
          published: false,
        },
      })
    })
  })
})
