export const kebabify = (str: string): string => {
  return str ? str.trim().replace('-', ' ').replace(/ /g, '-') : ''
}

export const dekebabify = (str: string): string => {
  return str ? str.trim().replace(/-/g, ' ') : ''
}
