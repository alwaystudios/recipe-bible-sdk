import { testRecipe } from '../test/testRecipes'
import { validateRecipeSchema } from './validateRecipeSchema'

describe('validate recipe schema', () => {
  it('fails for invalid recipe', () => {
    expect(() => validateRecipeSchema({})).toThrowError(
      expect.objectContaining({
        message: expect.stringContaining(
          'Invalid recipe schema: ID = undefined: instance requires property',
        ),
      }),
    )
  })

  it('fails for unsupported field', () => {
    expect(() => validateRecipeSchema({ ...testRecipe('test'), unsupported: true })).toThrowError(
      expect.objectContaining({
        message:
          'Invalid recipe schema: ID = undefined: instance is not allowed to have the additional property "unsupported"',
      }),
    )
  })

  it('fails for invalid type on title', () => {
    const invalidrecipe = { ...testRecipe('test'), title: 1 }
    expect(() => validateRecipeSchema(invalidrecipe)).toThrowError(
      expect.objectContaining({
        message: 'Invalid recipe schema: ID = undefined: instance.title is not of a type(s) string',
      }),
    )
  })

  it('passes for valid recipe', () => {
    const recipe = testRecipe('test')
    const result = validateRecipeSchema(recipe)
    expect(result).toEqual(recipe)
  })

  it('passes for valid recipe with empty string title', () => {
    const recipe = testRecipe('')
    const result = validateRecipeSchema(recipe)
    expect(result).toEqual(recipe)
  })
})
