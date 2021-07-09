export type Category =
  | 'Chicken'
  | 'Meat'
  | 'Fish'
  | 'Pasta'
  | 'Salads'
  | 'Vegetarian'
  | 'Vegan'
  | 'Soups'
  | 'Snacks'
  | 'Desserts'
  | 'Other'

export type Nutrition = {
  fat?: string
  carbs?: string
  protein?: string
}

export type Step = {
  imgSrc?: string
  step: string
}

export type Metadata = {
  focused: boolean
  published: boolean
}

export type Measure = 'qty' | 'g' | 'ml' | 'tsp' | 'tbsp' | 'handful' | 'cup' | 'slice(s)' | 'kg'
export const Measures: Measure[] = [
  'qty',
  'g',
  'ml',
  'tsp',
  'tbsp',
  'handful',
  'cup',
  'slice(s)',
  'kg',
]

export type Ingredient = {
  name: string
  quantity?: string | number
  measure?: Measure
  imgSrc?: string
}

export type Recipe = {
  imgSrc: string
  title: string
  story: string
  categories: Category[]
  ingredients: Ingredient[]
  steps: Step[]
  metadata: Metadata
  ratings: number[]
  cookingTime: string
  prepTime: string
  youWillNeed: string[]
  servings: number
  nutrition: Nutrition
}

export type User = {
  'https://recipebible.net/roles': string[]
  isAdmin: boolean
  given_name: string
  family_name: string
  nickname: string
  name: string
  picture: string
  locale: string
  updated_at: string
  email: string
  email_verified: boolean
  iss: string
  sub: string
  aud: string
  iat: number
  exp: number
  at_hash: string
  nonce: string
}

export type Advert = {
  src: string
  href: string
}
