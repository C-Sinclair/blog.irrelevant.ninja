import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import ApiTest from '../components/api-test'

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
		<ApiTest />
		<Link to="/contact/">Go to page 2</Link>
	</Layout>
)

export default IndexPage
