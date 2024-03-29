import { Recipe, Ingredient, Step, User, Advert, RecipeRating } from '../types'
import { datatype, internet, lorem, system } from 'faker'
import { kebabify } from '../kebabify'

export const testIngredient = (overrides?: Partial<Ingredient>): Ingredient => ({
  name: lorem.word(),
  measure: 'qty',
  quantity: datatype.number(10),
  ...overrides,
})

export const testStep = (step = 'some step info', imgSrc = 'pic.jpeg'): Step => ({
  step,
  imgSrc,
})

export const testRecipe = (overrides?: Partial<Recipe>): Recipe => ({
  title: lorem.word(),
  imgSrc: system.fileName(),
  story: lorem.words(3),
  categories: ['Meat'],
  ingredients: [testIngredient()],
  steps: [testStep()],
  metadata: {
    focused: false,
    published: false,
  },
  ratings: [],
  cookingTime: '20 mins',
  prepTime: '5 mins',
  youWillNeed: [],
  servings: 2,
  nutrition: {
    fat: '',
    carbs: '',
    protein: '',
  },
  ...overrides,
})

export const testUser = (overrides?: Partial<User>): User => ({
  'https://recipebible.net/roles': ['admin'],
  isAdmin: true,
  given_name: 'Gary',
  family_name: 'Alway',
  nickname: 'garyalway',
  name: 'Gary Alway',
  picture:
    'https://lh3.googleusercontent.com/a-/AOh14GjdyZ5eCaU-x0oXGnyRx4W0WyTPvPMnXYSU3DkuWA=s96-c',
  locale: 'en',
  updated_at: '2021-05-17T06:33:29.089Z',
  email: 'garyalway@gmail.com',
  email_verified: true,
  iss: 'https://eu.auth0.com/',
  sub: 'google-oauth2|12345',
  aud: 'abc',
  iat: 1621233349,
  exp: 1621269349,
  at_hash: 'abc',
  nonce: 'abc',
  ...overrides,
})

export const testAdvert = (overrides?: Partial<Advert>): Advert => ({
  src: internet.url(),
  href: internet.url(),
  ...overrides,
})

export const testRecipeRating = (overrides?: Partial<RecipeRating>): RecipeRating => ({
  title: kebabify(lorem.words(3)),
  rating: datatype.number(),
  ...overrides,
})
