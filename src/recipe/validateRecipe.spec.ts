import { RecipeValidationError } from '../errorTypes'
import { testIngredient, testRecipe, testStep } from '../test/testFactories'
import { MAX_INGREDIENTS, MAX_STEPS, validateRecipe } from './validateRecipe'

const recipe = testRecipe()

describe('validate recipes', () => {
  it('passes validation for a complete recipe', () => {
    expect(validateRecipe(recipe)).toBe(null)
  })

  it('failes validation for a recipe with no steps', () => {
    expect(validateRecipe({ ...recipe, steps: [] })).toEqual(
      new RecipeValidationError('Recipe is invalid', ['must contain at least 1 step']),
    )
  })

  it('failes validation for a recipe with no ingredients', () => {
    expect(validateRecipe({ ...recipe, ingredients: [] })).toEqual(
      new RecipeValidationError('Recipe is invalid', ['must contain at least 1 ingredient']),
    )
  })

  it('failes validation for a recipe with too many steps', () => {
    const steps = [...Array(MAX_STEPS + 1)].map(() => testStep())
    expect(validateRecipe({ ...recipe, steps })).toEqual(
      new RecipeValidationError('Recipe is invalid', [`exceeds max steps count: ${MAX_STEPS}`]),
    )
  })

  it('failes validation for a recipe with too many ingredients', () => {
    const ingredients = [...Array(MAX_INGREDIENTS + 1)].map(() => testIngredient())
    expect(validateRecipe({ ...recipe, ingredients })).toEqual(
      new RecipeValidationError('Recipe is invalid', [
        `exceeds max ingredients count: ${MAX_INGREDIENTS}`,
      ]),
    )
  })

  it('failes validation with multiple errors', () => {
    const ingredients = [...Array(MAX_INGREDIENTS + 1)].map(() => testIngredient())
    expect(validateRecipe({ ...recipe, ingredients, steps: [] })).toEqual(
      new RecipeValidationError('Recipe is invalid', [
        `must contain at least 1 step, exceeds max ingredients count: ${MAX_INGREDIENTS}`,
      ]),
    )
  })
})
