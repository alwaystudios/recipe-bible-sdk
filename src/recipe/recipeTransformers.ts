import { Category, Recipe } from '../types'

export const normalizeRecipe = (recipe: Recipe): Recipe => {
  const { categories = [] } = recipe

  const normalizedCategories = categories.reduce<Category[]>((acc, curr) => {
    const currIsChicken = curr.toString() === 'Chicken'
    const accIncludesPoultry = acc.includes('Poultry')

    if (currIsChicken && accIncludesPoultry) return acc

    return [...acc, currIsChicken ? 'Poultry' : curr]
  }, [])

  return { ...recipe, categories: normalizedCategories }
}
