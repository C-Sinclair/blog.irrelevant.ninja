import { css } from '@emotion/react';
import { theme } from '.';
import './fonts.css';
import './reset.css';

const { palette, fonts, gradients } = theme;
const { dark, darkest, gold } = palette;

export const globalStyles = css`
	::-webkit-scrollbar {
		display: none;
	}

	a {
		text-decoration: none;
		color: red;
		&:hover {
			color: ${gold};
		}
	}

	body {
		background: ${darkest};
		font-family: ${fonts.main};
		transition: all 0.5s ease;
		overflow: hidden;
		height: 100vh;
		width: 100vw;
	}

	p {
		color: #fff;
		font-size: 0.8em;
	}

	svg {
		color: #fff;
	}

	footer {
		align-self: center;
		a {
			color: #fff;
			font-size: 0.7em;
		}
	}

	main {
		width: calc(100vw - var(--sidebar-width));
		height: 100vh;
		overflow-y: scroll;
		background: ${darkest};
		transition: width 0.2s;
	}

	header {
		text-align: center;
		position: relative;
		margin-top: 20px;
	}

	article {
		padding: 0px 20px;
	}

	header .date {
		position: absolute;
		right: 10px;
		top: 10px;
		cursor: alias;
	}

	h1,
	h2,
	h3 {
		font-family: ${fonts.fancy};
		color: ${gold};
	}

	h1 {
		text-decoration: underline;
		font-size: 2.5em;
	}

	ol {
		display: flex;
		margin: 0;
		flex-wrap: wrap;
	}

	blockquote {
		margin: 20px 0;
		padding: 10px;
		background: ${gradients.purple};
		border: 1px solid ${gold}22;
		display: flex;
		align-items: center;
		&:before {
			content: '🔥';
			width: 40px;
			height: 100%;
		}
		p {
			padding-left: 10px;
			font-weight: 600;
		}
	}

	pre {
		background: ${dark};
	}

	code {
		background: ${dark};
		color: #fff;
	}

	li {
		color: #fff;
	}
`;
