import { ValidationError } from 'jsonschema'

export class SchemaError extends Error {
  public readonly errors: ValidationError[]

  constructor(message: string, errors: ValidationError[]) {
    super(`${message}: ${errors.map((error) => `${error.property} ${error.message}`).join(',')}`)
    this.errors = errors
  }
}

export class RecipeValidationError extends Error {
  public readonly errors: string[]

  constructor(message: string, errors: string[]) {
    super(`${message}: ${errors.join(', ')}`)
    this.errors = errors
  }
}
