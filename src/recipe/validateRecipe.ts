/* eslint functional/immutable-data: 0 */
import { Recipe } from './recipeTypes'
import { RecipeValidationError } from '../errorTypes'

export const MAX_INGREDIENTS = 40
export const MAX_STEPS = 25

export const validateRecipe = (recipe: Recipe): RecipeValidationError | null => {
  const errs: string[] = []

  if (recipe.steps.length === 0) {
    errs.push('must contain at least 1 step')
  }

  if (recipe.ingredients.length === 0) {
    errs.push('must contain at least 1 ingredient')
  }

  if (recipe.steps.length > MAX_STEPS) {
    errs.push(`exceeds max steps count: ${MAX_STEPS}`)
  }

  if (recipe.ingredients.length > MAX_INGREDIENTS) {
    errs.push(`exceeds max ingredients count: ${MAX_INGREDIENTS}`)
  }

  return errs.length ? new RecipeValidationError('Recipe is invalid', errs) : null
}
