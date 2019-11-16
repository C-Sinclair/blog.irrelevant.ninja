import { Link } from 'gatsby'
import React from 'react'
import ThemeButton from './themeButton'

const Header = () => (
	<header>
		<div className="title">
			<Link
				to="/"
				style={{
					textDecoration: 'none'
				}}
			>
				<h1>Irrelevant</h1>
				<span>Blog</span>
			</Link>
		</div>
		<ThemeButton />
	</header>
)

export default Header
