import { css } from '@emotion/core'
import { theme } from '.'

const { light, primary } = theme

export const neonShadow = css`
  text-shadow: .1vw 0vw .25vw ${light}, .1vw 0vw .3vw ${light}, .1vw 0vw .4vw ${light}, .1vw 0vw .5vw ${light}, .1vw 0vw .7vw ${primary}, .1vw 0vw .7vw ${primary}, .1vw 0vw 1vw ${primary}, .1vw 0vw 1vw ${primary};
`