import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ArticlesList from '../components/articlesList'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1>Welcome</h1>
		<div
			style={{
				maxWidth: `300px`,
				marginBottom: `1.45rem`
			}}
		>
			<Image />
		</div>
		<ArticlesList />
		<Link to="/contact/">Get in contact</Link>
	</Layout>
)

export default IndexPage
