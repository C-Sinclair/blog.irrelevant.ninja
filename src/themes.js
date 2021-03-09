/**
 * @typedef {{
 *  background1: string
 *  background2: string
 *  text: string
 *  icon: import('svelte').SvelteComponent
 * }} Theme
 * @typedef {string} ThemeName
 * @typedef {Record<ThemeName, Theme>} Themes
 */

import FaRegMoon from 'svelte-icons/fa/FaRegMoon.svelte'
import FaSun from 'svelte-icons/fa/FaSun.svelte'
import FaDAndD from 'svelte-icons/fa/FaDAndD.svelte'

const gold = 'rgb(251, 251, 52)'
const titleFont = '"Pattaya", sans-serif'
const bodyFont = '-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'

const spacing = 7
const shared = {
  ...(Array.from({ length: 20 }).reduce((acc, _, i) => ({ ...acc, [`spacing-${i}`]: `${spacing * i}px`}))),
  titleFont,
  bodyFont,
  gold,
}


/**
 * @type Themes
 */
export const themes = {
  dark: {
    ...shared,
    background1: 'black',
    background2: 'black',
    text: 'rgb(232, 230, 227)',
    Icon: FaRegMoon
  },
  light: {
    ...shared,
    background1: 'white',
    background2: 'white',
    text: 'black',
    icon: FaSun
  },
  'nightly purple': {
    ...shared,
    background1: 'rgb(26, 6, 71)',
    background2: 'rgb(91, 16, 112)',
    text: 'rgb(232, 230, 227)',
    icon: FaDAndD
  }
}