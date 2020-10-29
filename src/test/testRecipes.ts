import { Recipe, Ingredient, RecipeList } from '..'
import sampleRecipe from './super-tasty-pasta-bolognese.json'

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
