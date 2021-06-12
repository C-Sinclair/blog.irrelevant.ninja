import React, { useCallback, useState } from 'react';
import { RiHomeSmileFill as HomeIcon } from 'react-icons/ri';
import { BiCaretLeftCircle as CaretIcon } from 'react-icons/bi';
import { Link } from 'gatsby';
import { Profile } from '.';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useSidebar } from '../hooks/useSidebar';

export const Sidebar = ({ children }) => {
	const [open, toggleOpen] = useSidebar();
	return (
		<Nav aria-hidden={!open}>
			{open && (
				<Home to='/'>
					<HomeIcon size={20} />
				</Home>
			)}
			<CaretIcon size={30} onClick={toggleOpen} className='nav-toggle' role='button' />
			<a href='https://c.sinclair.software' className='profile-container'>
				<Profile />
				<h4>Conor Sinclair</h4>
				<p>A Software Developer of high esteem</p>
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
		padding: 25px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: width 0.4s ease;
		position: relative;

		.nav-toggle {
			position: absolute;
			right: 0;
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
				transition: opacity 0.2s, transform 0.2s;
			}
		}

		.content {
			height: 30%;
			position: relative;
			transition: all 0.2s;
			transition-delay: 0.5s;
		}

		&[aria-hidden='false'] {
			background: ${theme.palette.primary};

			.nav-toggle {
				transform: rotate(0deg);
				right: -14px;
			}
		}

		&[aria-hidden='true'] {
			.profile-container > *,
			.content {
				opacity: 0;
			}

			.profile-container,
			footer,
			.content {
				${hide};
			}
		}

		@media (max-width: 950px) {
			width: 50px;
			max-width: 50px;
			background: ${theme.palette.darkest};

			.profile-container,
			footer,
			.content {
				${hide};
			}
		}
	`,
);

const Home = styled(Link)`
	cursor: pointer;
`;

const hide = css`
	opacity: 0;
	width: 0;
`;
