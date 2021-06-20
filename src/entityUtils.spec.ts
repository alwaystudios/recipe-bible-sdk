import {
  pluralize,
  depluralize,
  normalizeMeasure,
  normalizeCategories,
  calculateRatingDetails,
  recipeTitleTransformer,
  toSlug,
} from './entityUtils'
import { Measure } from './types'
import { CATEGORIES } from './categories'

describe('entity utils', () => {
  it('toSlug', () => {
    expect(toSlug('  This is My recipe sluG  ')).toBe('this-is-my-recipe-slug')
  })

  it('recipeTitleTransformer', () => {
    expect(recipeTitleTransformer('  this-is-my-recipe  ')).toBe('This is my recipe')
  })

  describe('calculateRatingDetails', () => {
    it('calculates average ratings for an array of ratings', () => {
      const ratings = [2, 3, 5, 5, 5]
      const result = calculateRatingDetails(ratings)
      expect(result).toEqual({
        averageRating: 4,
        numberOfRatings: 5,
      })
    })

    it('calculates average ratings for an empty array of ratings', () => {
      const ratings: number[] = []
      const result = calculateRatingDetails(ratings)
      expect(result).toEqual({
        averageRating: 0,
        numberOfRatings: 0,
      })
    })
  })

  describe('pluralize', () => {
    it('does not pluralize a single item qty', () => {
      expect(pluralize('carrot', 1, 'qty')).toBe('carrot')
    })

    it('does not pluralize if already pluralized', () => {
      expect(pluralize('carrots', 2, 'qty')).toBe('carrots')
    })

    it('pluralizes when more than single item qty', () => {
      expect(pluralize('carrot', 2, 'qty')).toBe('carrots')
    })

    it('does not pluralize a non string qty', () => {
      expect(pluralize('curry powder', '1/2', 'tsp')).toBe('curry powder')
    })

    it('does not pluralize a non numberic qty', () => {
      expect(pluralize('water', 100, 'ml')).toBe('water')
    })

    it('pluralizes special case potato', () => {
      expect(pluralize('potato', 2, 'qty')).toBe('potatoes')
    })

    it('pluralizes special case tomato', () => {
      expect(pluralize('tomato', 2, 'qty')).toBe('tomatoes')
    })

    it('does not pluralizes special case tomato if only 1 qty', () => {
      expect(pluralize('tomato', 1, 'qty')).toBe('tomato')
    })

    it('pluralizes special case leaf', () => {
      expect(pluralize('leaf', 2, 'qty')).toBe('leaves')
    })

    it('pluralizes special case radish', () => {
      expect(pluralize('radish', 2, 'qty')).toBe('radishes')
    })

    it('pluralizes special case sweet potato', () => {
      expect(pluralize('sweet potato', 2, 'qty')).toBe('sweet potatoes')
    })

    it('pluralizes special case cheery tomato', () => {
      expect(pluralize('cherry tomato', 2, 'qty')).toBe('cherry tomatoes')
    })

    it('does not pluralize special case chips', () => {
      expect(pluralize('oven chips', 2, 'qty')).toBe('oven chips')
    })

    it('does not pluralize special case flakes', () => {
      expect(pluralize('chilli flakes', 2, 'qty')).toBe('chilli flakes')
    })

    it('does not pluralize special case peas', () => {
      expect(pluralize('garden peas', 2, 'qty')).toBe('garden peas')
    })
  })

  describe('depluralize', () => {
    it('does not de-pluralize words that end in a double s', () => {
      expect(depluralize('cress')).toBe('cress')
    })

    it('does not de-pluralize a non plural', () => {
      expect(depluralize('some sliced carrot')).toBe('some sliced carrot')
    })

    it('de-pluralizes a plural', () => {
      expect(depluralize('some sliced carrots')).toBe('some sliced carrot')
    })

    it('de-pluralizes a plural and removes trailing spaces', () => {
      expect(depluralize('some sliced carrots ')).toBe('some sliced carrot')
    })

    it('de-pluralizes special case potatoes', () => {
      expect(depluralize('potatoes')).toBe('potato')
    })

    it('de-pluralizes special case tomatoes', () => {
      expect(depluralize('tomatoes')).toBe('tomato')
    })

    it('de-pluralizes special case sweet potatoes', () => {
      expect(depluralize('sweet potatoes')).toBe('sweet potato')
    })

    it('de-pluralizes special case cherry tomatoes', () => {
      expect(depluralize('cherry tomatoes')).toBe('cherry tomato')
    })

    it('de-pluralizes special case leaves', () => {
      expect(depluralize('leaves')).toBe('leaf')
    })

    it('de-pluralizes special case radishes', () => {
      expect(depluralize('some radishes')).toBe('some radish')
    })

    it('does not de-pluralize special case chips', () => {
      expect(depluralize('oven chips')).toBe('oven chips')
    })

    it('does not de-pluralize special case flakes', () => {
      expect(depluralize('chilli flakes')).toBe('chilli flakes')
    })

    it('does not de-pluralize special case peas', () => {
      expect(depluralize('garden peas')).toBe('garden peas')
    })
  })

  describe('normalizeMeasure', () => {
    test.each<[string | null, Measure | null, string | null]>([
      ['some', null, null],
      [null, null, null],
      [null, 'g', null],
      ['400', 'g', '400'],
      ['BlaH', 'g', '1'],
      ['1/2', 'handful', '1/2'],
      ['200', 'ml', '200'],
      ['1/2', 'ml', '1'],
      ['.5', 'qty', '0.5'],
      ['1/2', 'qty', '0.5'],
      ['half', 'qty', '0.5'],
      ['2', 'qty', '2'],
      ['7.5', 'qty', '7.5'],
      ['1/2', 'tbsp', '1/2'],
      ['1', 'tbsp', '1'],
      ['1/2', 'tsp', '1/2'],
      ['1', 'tsp', '1'],
    ])('normalizes quantity %s measure %s to %s', (quantity, measure, result) => {
      expect(normalizeMeasure(quantity as any, measure as any)).toEqual(result)
    })
  })

  it('normalizeCategories removes non categories', () => {
    expect(normalizeCategories(['invalid', ...CATEGORIES, 'another invalid', ''])).toEqual(
      CATEGORIES,
    )
  })
})
