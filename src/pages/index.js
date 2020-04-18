import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Articles from '../components/Articles'

const IndexPage = () => (
	<Layout tags>
		<SEO title="Home" />
		<header>
			<h1>Irrelevant Ninja</h1>
			<sub id="blogName">Blog</sub>
		</header>
		<div className="wrap">
			<p>Check out the archived of tech articles:</p>
		</div>
		<Articles />
	</Layout>
)

export default IndexPage
