import { omit } from 'ramda'
import { Recipe, RecipeRecord } from './recipeTypes'

export const toRecipeRecord = (recipe: Recipe): RecipeRecord => omit(['title', 'id'], recipe)

export const emptyRecipeRecord = (): RecipeRecord => ({
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
