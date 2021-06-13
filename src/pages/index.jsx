import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useEffect, useRef, useState } from 'react';
import { CgDisplayFullwidth } from 'react-icons/cg';
import { IoMdResize } from 'react-icons/io';
import { Layout, SEO, Articles, Logo } from '../components';
import { Ninja } from '../components/Ninja';
import { neonShadow } from '../styles';

const IndexPage = () => {
	const timer = useRef();

	const [short, setShort] = useState(false);
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		timer.current = setTimeout(() => {
			setLoaded(true);
		}, 2750);
		return () => {
			clearTimeout(timer.current);
		};
	}, [setLoaded]);

	return (
		<Root tags>
			<SEO title='Home' />
			<header>
				<Logo />
			</header>
			<div className='loading-ninja' aria-hidden={loaded}>
				<Ninja />
			</div>
			<section aria-hidden={!loaded}>
				<div className='subtitle'>
					<p>Check out the archive of tech articles:</p>
					<div className='filter-options'>
						{short ? (
							<IoMdResize onClick={() => setShort(false)} />
						) : (
							<CgDisplayFullwidth onClick={() => setShort(true)} />
						)}
					</div>
				</div>
				<Articles short={short} />
			</section>
		</Root>
	);
};

const Root = styled(Layout)(
	({ theme }) => css`
		position: relative;

		header {
			transform: translateY(-150px);
			animation: ${slideDown} 0.4s forwards;
			animation-delay: 1s;
		}

		.loading-ninja {
			animation: ${scaleIn} 0.2s forwards;
			position: absolute;
			transition: left 0.4s;
			width: 100%;
			display: flex;
			justify-content: center;
			left: 0;

			&[aria-hidden='true'] {
				left: 100vw;
			}
		}

		section[aria-hidden='true'] .subtitle {
			opacity: 0;
		}

		section[aria-hidden='false'] .subtitle {
			opacity: 1;
		}

		.subtitle {
			position: relative;
			padding: 10px 50px 0 50px;

			p {
				font-size: 0.8em;
			}
		}

		.filter-options {
			position: absolute;
			top: 10px;
			right: 20px;

			* {
				cursor: pointer;
				&:hover {
					${neonShadow};
				}
			}
		}

		section ul {
			opacity: 0;
			transform: translateY(100px);
			transition: opacity 0.4s, transform 0.4s;
		}

		section[aria-hidden='false'] ul {
			opacity: 1;
			transform: translateY(0px);
		}
	`,
);

const slideDown = keyframes`
	from {
		transform: translateY(-150px);
	}
	to {
		transform: translateY(0px);
	}
`;

const scaleIn = keyframes`
	from {
		transform: scale(1.2);
	}
	to {
		transform: scale(1);
	}
`;

const fadeOut = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`;

export default IndexPage;
