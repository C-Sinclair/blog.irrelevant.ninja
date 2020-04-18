import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/Seo'
import Articles from '../components/Articles'

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<Articles />
	</Layout>
)

export default IndexPage
