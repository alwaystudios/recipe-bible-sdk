import { validate } from 'jsonschema'
import { Recipe } from '../types'
import schema from './recipeSchema.json'
import { SchemaError } from '../errorTypes'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const validateRecipeSchema = (data: any): Recipe => {
  const { errors, instance } = validate(data, schema)
  if (errors.length) {
    throw new SchemaError(`Invalid recipe schema: ID = ${data.id}`, errors)
  }

  return instance
}
