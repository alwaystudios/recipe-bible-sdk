import { Recipe, Ingredient, RecipeList, Step, Measure } from '../recipe/recipeTypes'
import sampleRecipe from './super-tasty-pasta-bolognese.json'

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

export const testRecipes = (): RecipeList => [
  {
    title: 'messy-thai-pork-omelette',
  },
  {
    title: 'chicken-salad-with-ginger-dressing',
  },
  {
    title: 'cashew-nuts-and-mango-protein-bites',
  },
  {
    title: 'baked-salmon-and-aubergine-rainbow-salad',
  },
  {
    title: 'burrito-bowl',
  },
  {
    title: 'chicken-tabbouleh-salad',
  },
  {
    title: "aunt-alicia's-sponge-cake",
  },
  {
    title: 'no-knead-versatile-rye-bread-recipe',
  },
  {
    title: 'cream-of-potatoes,-squash,-brussel-sprouts-soup',
  },
  {
    title: "bangers'n'mash-with-homemade-gravy",
  },
  {
    title: 'peanut-butter-dressing',
  },
]
