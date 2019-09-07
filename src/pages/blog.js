import React from 'react'
import { navigateTo, graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPage = ({ data }) => (
	<Layout>
		<SEO title="Articles" />
		{data.allMarkdownRemark.edges.map(article => (
			<article
				key={article.node.id}
				onClick={() => navigateTo(article.node.frontmatter.path)}
			>
				<h4>{article.node.frontmatter.title}</h4>
				<small>By {article.node.frontmatter.author}</small>
				<p>{article.node.excerpt}</p>
			</article>
		))}
	</Layout>
)

export const query = graphql`
	query BlogIndexQuery {
		allMarkdownRemark {
			edges {
				node {
					id
					excerpt
					frontmatter {
						date
						author
						path
						title
					}
				}
			}
		}
	}
`

export default BlogPage
