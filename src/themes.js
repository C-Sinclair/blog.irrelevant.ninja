/**
 * @typedef {{
 *  icon: import('svelte').SvelteComponentDev
 * }} ThemeMeta
 * @typedef {string} ThemeName
 * @typedef {Record<ThemeName, ThemeMeta>} Themes
 */

import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte'
import FaSun from 'svelte-icons/fa/FaSun.svelte'
import FaDAndD from 'svelte-icons/fa/FaDAndD.svelte'

/**
 * @type Themes
 */
export const themes = {
  dark: {
    icon: FaRegMoon
  },
  light: {
    icon: FaSun
  },
  'nightly-purple': {
    icon: FaDAndD
  }
}
