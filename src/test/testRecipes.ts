import { Recipe, Ingredient, RecipeList, Step, Measure } from '../recipe/recipeTypes'
import sampleRecipe from './super-tasty-pasta-bolognese.json'
import faker from 'faker'

export const testIngredient = (
  name = 'some ingredient',
  measure: Measure = 'qty',
  quantity = 1,
): Ingredient => ({
  name,
  measure,
  quantity,
})

export const testStep = (step = 'some step info', imgSrc = 'pic.jpeg'): Step => ({
  step,
  imgSrc,
})

export const testRecipe = (title: string, id?: number): Recipe => ({
  id,
  title,
  ...sampleRecipe,
  ingredients: sampleRecipe.ingredients as Ingredient[],
})

export const testRecipeListEntry = () => ({
  title: faker.random.word(),
  imgSrc: faker.image.imageUrl(),
  categories: [faker.random.word()],
  ingredients: [faker.random.word()],
  metadata: {
    focused: false,
    reviewed: true,
    published: true,
  },
})

export const testRecipes = (): RecipeList => [
  testRecipeListEntry(),
  testRecipeListEntry(),
  testRecipeListEntry(),
]
