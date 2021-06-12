export class RecipeValidationError extends Error {
  public readonly errors: string[]

  constructor(message: string, errors: string[]) {
    super(`${message}: ${errors.join(', ')}`)
    this.errors = errors
  }
}
