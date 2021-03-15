import { writable } from "svelte/store";

const LS_KEY = 'IRRELEVANT_NINJA_BLOG_THEME_y000ooo'
const defaultTheme = 'dark'

function createStore() {
  let theme = defaultTheme
  if (global.window !== undefined) {
    localStorage.getItem(LS_KEY)
  }
  const currentTheme = writable(theme)
  themeToCss(theme)

  /**
   * @param {ThemeName} theme 
   */
  function set(theme) {
    currentTheme.set(theme)
    themeToCss(theme)
    localStorage.setItem(LS_KEY, theme)
  }

  return {
    set,
    subscribe: currentTheme.subscribe
  }
}

/**
 * @param {ThemeName} theme 
 */
export function themeToCss(theme) {
  if (global.window !== undefined) {
    document.body.setAttribute('data-theme', theme)
  }
}

const theme = createStore()

export default theme