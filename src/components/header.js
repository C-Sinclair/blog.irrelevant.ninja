import { Link } from 'gatsby'
import React from 'react'

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
	</header>
)

export default Header
