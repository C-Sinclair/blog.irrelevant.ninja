import { css } from '@emotion/react'
import { theme } from '.'

const { light, primary } = theme

export const neonShadow = css`
	text-shadow: 0.1vw 0vw 0.25vw ${light}, 0.1vw 0vw 0.3vw ${light}, 0.1vw 0vw 0.4vw ${light},
		0.1vw 0vw 0.5vw ${light}, 0.1vw 0vw 0.7vw ${primary}, 0.1vw 0vw 0.7vw ${primary},
		0.1vw 0vw 1vw ${primary}, 0.1vw 0vw 1vw ${primary};
`
