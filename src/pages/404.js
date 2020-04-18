import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const style = {
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
	marginTop: 100
}

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<div style={style}>
			<h1>NOT FOUND</h1>
			<p>This route does not exist</p>
		</div>
	</Layout>
)

export default NotFoundPage
