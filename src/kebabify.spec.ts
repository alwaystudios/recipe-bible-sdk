import { kebabify, dekebabify } from './kebabify'

describe('kebabify / dekebabify', () => {
  it('kebabifies replacing hyphens', () => {
    expect(kebabify('  nice-and-easy spaghetti bolognese  ')).toBe(
      'nice-and-easy-spaghetti-bolognese',
    )
  })

  it('kebabifies', () => {
    expect(kebabify('  nice and easy spaghetti bolognese  ')).toBe(
      'nice-and-easy-spaghetti-bolognese',
    )
  })

  it('dekebabifies', () => {
    expect(dekebabify('  nice-and-easy-spaghetti-bolognese  ')).toBe(
      'nice and easy spaghetti bolognese',
    )
  })
})
