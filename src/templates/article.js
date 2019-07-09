import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'

export default function Template({ data }) {
	const article = data.markdownRemark
	return (
		<Layout>
			<SEO title="Articles" />
			<article>
				<Link to="/blog">Back</Link>
				<p>{article.frontmatter.date}</p>
				<h1>{article.frontmatter.title}</h1>
				<h6>By {article.frontmatter.author}</h6>
				<Img
					fluid={
						article.frontmatter.featuredImage.childImageSharp
							.fluid
					}
				/>
				<div dangerouslySetInnerHTML={{ __html: article.html }} />
			</article>
		</Layout>
	)
}

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		markdownRemark(frontmatter: { path: { eq: $path } }) {
			html
			frontmatter {
				path
				title
				author
				date
				featuredImage {
					childImageSharp {
						fluid(maxWidth: 800) {
							...GatsbyImageSharpFluid
						}
					}
				}
			}
		}
	}
`
