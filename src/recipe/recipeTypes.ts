// yarn generate-recipe-schema

export type RecipeList = ReadonlyArray<{
  title: string
}>

export type Measure = 'qty' | 'g' | 'ml' | 'tsp' | 'tbsp' | 'handful' | 'cup' | 'slice(s)' | 'kg'

export type Ingredient = {
  name: string
  measure: Measure
  quantity: string | number
}

export type Step = {
  imgSrc?: string
  step: string
}

export type Nutrition = {
  fat?: string
  satFat?: string
  salt?: string
  carbs?: string
  fibre?: string
  sugar?: string
  protein?: string
  calories?: string
}

export type RecipeMetadata = {
  focused: boolean
  reviewed: boolean
  published: boolean
}

export type RecipeRecord = {
  servings: number
  cookingTime: string
  story?: string
  imgSrc: string
  nutrition: Nutrition
  categories: string[]
  ingredients: Ingredient[]
  steps: Step[]
  metadata: RecipeMetadata
}

export type Recipe = RecipeRecord & {
  id?: number
  title: string
}
