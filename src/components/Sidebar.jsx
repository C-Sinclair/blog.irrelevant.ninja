import React from 'react';
import { RiHomeSmileFill as HomeIcon } from 'react-icons/ri';
import { BiCaretLeftCircle as CaretIcon } from 'react-icons/bi';
import { Link } from 'gatsby';
import { Profile } from '.';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useSidebar } from '../hooks/useSidebar';
import { ifEnter } from '../util/events';

export const Sidebar = ({ children, article = false }) => {
	const [open, toggleOpen] = useSidebar();
	return (
		<Nav aria-hidden={!open}>
			<Link to='/' className='home-link' data-article={article}>
				<HomeIcon size={20} />
			</Link>
			<CaretIcon
				size={30}
				onClick={toggleOpen}
				onKeyPress={ifEnter(toggleOpen)}
				className='nav-toggle'
				role='button'
				tabIndex={0}
				title={open ? 'Close sidebar' : 'Open sidebar'}
			/>
			{/* empty div to facilitate flex */}
			<div />
			<a href='https://c.sinclair.software' className='profile-container'>
				<Profile key={`profile-svg-${open}`} />
				<h4 key={`profile-h4-${open}`}>Conor Sinclair</h4>
				<p key={`profile-p-${open}`}>A Software Developer of high esteem</p>
			</a>
			<div className='content'>{open && children}</div>
			<footer>
				<Link to='/contact/'>Get in contact</Link>
			</footer>
		</Nav>
	);
};

const Nav = styled.nav(
	({ theme }) => css`
		width: var(--sidebar-width);
		height: 100vh;
		padding: var(--sidebar-padding, 0);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: width 0.4s ease;
		position: relative;

		.home-link {
			cursor: pointer;
			position: absolute;
			top: 25px;
			left: 25px;
			z-index: 100;
		}

		.nav-toggle {
			position: absolute;
			right: -35px;
			top: 45%;
			background: none;
			border-radius: 100%;
			border: none;
			cursor: pointer;
			transform: rotate(180deg);
			transition: transform 0.7s, right 0.4s;
		}

		.profile-container {
			display: flex;
			flex-direction: column;
			align-items: center;

			svg {
				transition-delay: 0.2s;
			}

			h4 {
				color: #fff;
				transition-delay: 0.3s;
			}

			p {
				background: ${theme.palette.dark};
				padding: 10px;
				border-radius: 2px;
				font-size: 0.7em;
				transition-delay: 0.4s;
			}

			& > * {
				opacity: 1;
				transition: opacity 0.2s;
			}
		}

		.content {
			height: 30%;
			position: relative;
			transition: transform 0.2s;
			transition-delay: 0.5s;
		}

		&[aria-hidden='false'] {
			background: ${theme.palette.primary};
			--sidebar-padding: 25px;

			.nav-toggle {
				transform: rotate(0deg);
				right: -14px;
				z-index: 1000;
			}
		}

		&[aria-hidden='true'] {
			.profile-container > * {
				opacity: 0;
			}

			.profile-container,
			footer {
				opacity: 0;
				width: 0;
				visibility: hidden;
			}

			.content {
				transform: translateX(-500px);
			}

			.home-link[data-article='true'] {
				left: -25px;
			}
		}

		@media (max-width: 950px) {
			background: ${theme.palette.darkest};
		}
	`,
);
