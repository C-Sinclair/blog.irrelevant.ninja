import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Articles from '../components/Articles'

const ArticlesPage = () => (
	<Layout tags crumb={[{ icon: 'book', text: 'Articles' }]}>
		<SEO title="Articles" />
		<header>
			<h1>Articles</h1>
		</header>
		<Articles />
	</Layout>
)

export default ArticlesPage
