import styled from '@emotion/styled'
import React, { useState } from 'react'
import { CgDisplayFullwidth } from 'react-icons/cg'
import { IoMdResize } from 'react-icons/io'
import { Layout, SEO, Articles, Logo } from '../components'
import { neonShadow } from '../styles'

const IndexPage = () => {
	const [short, setShort] = useState(false)
	return (
		<Layout tags>
			<SEO title="Home" />
			<header>
				<Logo />
			</header>
			<Subtitle>
				<p>Check out the archive of tech articles:</p>
				<FilterOptions>
					{short
						? <IoMdResize onClick={() => setShort(false)} />
						: <CgDisplayFullwidth onClick={() => setShort(true)} />
					}
				</FilterOptions>
			</Subtitle>
			<Articles short={short} />
		</Layout>
	)
}

const Subtitle = styled.div`
	position: relative;
	padding: 10px 50px 0 50px;
	p {
		font-size: 0.8em;
	}
`

const FilterOptions = styled.div`
	position: absolute;
	top: 10px;
	right: 20px;
	* {
		cursor: pointer;
		&:hover {
			${neonShadow};
		}
	}
`

export default IndexPage
