/**
 * 
 * @param {string} variable -- name to parse to css style
 */
export function jsToCss(variable) {
  return variable
    .replace(/([a-zA-Z])(?=[A-Z])/g, '$1-')
    .toLowerCase()
}