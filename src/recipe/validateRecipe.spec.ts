import { RecipeValidationError } from '../errorTypes'
import { testIngredient, testRecipe, testStep } from '../test/testFactories'
import {
  MAX_INGREDIENTS,
  MAX_STEPS,
  MAX_STEP_TEXT,
  MAX_TITLE,
  validateRecipe,
} from './validateRecipe'

const recipe = testRecipe()

describe('validate recipes', () => {
  it('passes validation for a complete recipe', () => {
    expect(validateRecipe(recipe)).toBe(null)
  })

  it('failes validation for a recipe a title that exceeds the max length', () => {
    const title = [...Array(MAX_TITLE + 1)].map(() => 'a').join('')
    expect(validateRecipe({ ...recipe, title })).toEqual(
      new RecipeValidationError('Recipe is invalid', [`exceeds max title length: ${MAX_TITLE}`]),
    )
  })

  it('failes validation for a recipe where servings not set', () => {
    expect(validateRecipe({ ...recipe, servings: 0 })).toEqual(
      new RecipeValidationError('Recipe is invalid', [`servings not set`]),
    )
  })

  it('failes validation for a recipe where cooking time not set', () => {
    expect(validateRecipe({ ...recipe, cookingTime: '' })).toEqual(
      new RecipeValidationError('Recipe is invalid', [`cooking time not set`]),
    )
  })

  it('failes validation for a recipe with steps that exceed the max length', () => {
    const step = [...Array(MAX_STEP_TEXT + 1)].map(() => 'a').join('')
    expect(validateRecipe({ ...recipe, steps: [{ step }] })).toEqual(
      new RecipeValidationError('Recipe is invalid', [`exceeds max step length: ${MAX_STEP_TEXT}`]),
    )
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
