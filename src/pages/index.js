import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Articles from '../components/Articles'
import Logo from '../components/Logo'

const IndexPage = () => (
	<Layout tags>
		<SEO title="Home" />
		<header>
			<Logo />
		</header>
		<div className="wrap">
			<p>Check out the archived of tech articles:</p>
		</div>
		<Articles />
	</Layout>
)

export default IndexPage
