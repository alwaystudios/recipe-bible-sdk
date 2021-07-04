/* eslint functional/immutable-data: 0 */
import { Recipe } from '../types'
import { RecipeValidationError } from '../errorTypes'

export const MAX_STEP_TEXT = 400
export const MAX_TITLE = 60
export const MAX_STEPS = 30
export const MAX_INGREDIENTS = 30

export const validateRecipe = (recipe: Recipe): RecipeValidationError | null => {
  const errs: string[] = []

  recipe.steps.map((step) => {
    if (step.step.length > MAX_STEP_TEXT) {
      errs.push(`exceeds max step length: ${MAX_STEP_TEXT}`)
    }
  })

  if (recipe.title.length > MAX_TITLE) {
    errs.push(`exceeds max title length: ${MAX_TITLE}`)
  }

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
