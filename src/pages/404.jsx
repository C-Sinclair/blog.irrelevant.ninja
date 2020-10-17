import styled from '@emotion/styled'
import { Link } from 'gatsby'
import React from 'react'
import { Layout, SEO } from '../components'

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Container>
			<h1>NOT FOUND</h1>
			<p>This route does not exist</p>
			<div>
				<p>There's plenty more content if you click here though!</p>
				<Link>Show me the money 💸</Link>
			</div>
		</Container>
	</Layout>
)

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
	margin-bottom: 20px;
	justify-content: space-between;
	height: calc(100vh - 40px);
	text-align: center;

	h1 {
		text-decoration: none;
		font-family: ${({ theme }) => theme.fonts.main};
	}
`

export default NotFoundPage
