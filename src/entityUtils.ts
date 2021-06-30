import { Measure } from './types'
import { CATEGORIES } from './categories'
import { truthy } from './truthy'
import { dekebabify, kebabify } from './kebabify'

type RatingDetail = {
  averageRating: number
  numberOfRatings: number
}

const pluralException = (word: string) =>
  word.endsWith('peas') ||
  word.endsWith('chips') ||
  word.endsWith('flakes') ||
  word.endsWith('hummus') ||
  word.endsWith('berries') ||
  word.endsWith('seeds') ||
  word.endsWith('raisins') ||
  word.endsWith('crumbs') ||
  word.endsWith('beans') ||
  word.endsWith('almonds') ||
  word.endsWith('stalks') ||
  word.endsWith('herbs') ||
  word.endsWith('nuts') ||
  word.endsWith('sprouts') ||
  word.endsWith('lentils') ||
  word.endsWith('capers')

export const calculateRatingDetails = (ratings: number[]): RatingDetail => {
  const ratingsSum = ratings.reduce((acc, curr) => acc + curr, 0)
  const numberOfRatings = ratings.length
  const averageRating = numberOfRatings ? ratingsSum / numberOfRatings : 0
  return {
    averageRating,
    numberOfRatings,
  }
}

export const normalizeCategories = (list: string[]): string[] =>
  list.map((c) => (CATEGORIES.includes(c as any) ? c : null)).filter(truthy)

const isHalfOrIsNan = (quantity: string) => {
  const value = quantity.toLowerCase()
  return value === 'half' || value === '1/2' || value === '.5'
    ? '0.5'
    : isNaN(Number(quantity))
    ? '1'
    : quantity
}

export const normalizeMeasure = (quantity: string, measure: Measure): string | null => {
  if (!quantity || !measure) {
    return null
  }

  switch (measure) {
    case 'slice(s)':
    case 'g':
    case 'ml': {
      return isNaN(Number(quantity)) ? '1' : quantity
    }
    case 'qty': {
      return isHalfOrIsNan(quantity)
    }
    default: {
      return quantity
    }
  }
}

export const pluralize = (word: string, quantity: number | string, measure: string): string => {
  if (pluralException(word)) {
    return word
  }

  if (measure === 'qty' && Number(quantity) === 1) {
    return word
  }

  return word.endsWith('potato')
    ? word.replace('potato', 'potatoes')
    : word.endsWith('tomato')
    ? word.replace('tomato', 'tomatoes')
    : word.endsWith('leaf')
    ? word.replace('leaf', 'leaves')
    : word.endsWith('radish')
    ? word.replace('radish', 'radishes')
    : measure === 'qty' && quantity > 1
    ? `${word}s`.replace('ss', 's')
    : word
}

export const depluralize = (word: string): string => {
  if (pluralException(word)) {
    return word
  }

  return word.endsWith('potatoes')
    ? word.replace('potatoes', 'potato')
    : word.endsWith('tomatoes')
    ? word.replace('tomatoes', 'tomato')
    : word.endsWith('leaves')
    ? word.replace('leaves', 'leaf')
    : word.endsWith('radishes')
    ? word.replace('radishes', 'radish')
    : word.endsWith('ss')
    ? word
    : word.replace(/s\s*$/, '')
}

export const recipeTitleTransformer = (title: string) => {
  const name = dekebabify(title)
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export const toSlug = (value: string) => kebabify(value.toLocaleLowerCase())

export const getSlug = (value: string): string => value.substring(value.lastIndexOf('/') + 1)
