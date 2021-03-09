import { writable } from "svelte/store";
import { themes } from "../themes";
import { jsToCss } from '../utils/variables'

const LS_KEY = 'IRRELEVANT_NINJA_BLOG_THEME_y000ooo'
const defaultTheme = 'dark'

function createStore() {
  const themeName = localStorage.getItem(LS_KEY) || defaultTheme
  const theme = themes[themeName]
  const currentTheme = writable(theme)
  themeToCss(theme)

  /**
   * @param {ThemeName} themeName 
   */
  function set(themeName) {
    const theme = themes[themeName]
    currentTheme.set(theme)
    themeToCss(theme)
    localStorage.setItem(LS_KEY, themeName)
  }

  return {
    set,
    subscribe: currentTheme.subscribe
  }
}

/**
 * @param {Theme} theme 
 */
export function themeToCss(theme) {
  Object.entries(theme).forEach(([key, value]) => {
    const variable = `--${jsToCss(key)}`
    if (typeof value === 'string') {
      document.documentElement.style.setProperty(variable, value);
    }
  });
}

const theme = createStore()

export default theme