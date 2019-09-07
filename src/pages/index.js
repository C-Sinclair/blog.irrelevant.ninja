import React from 'react'
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
			{/* <Image /> */}
		</div>
		<ArticlesList />
	</Layout>
)

export default IndexPage
