import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Icon } from '@blueprintjs/core'

export default function Template({ data }) {
	const article = data.markdownRemark
	return (
		<Layout>
			<SEO title="Articles" />
			<article>
				<Link to="/blog" className="back">
					<Icon icon="step-backward" />
				</Link>
				<h1>{article.frontmatter.title}</h1>
				<p className="date">{article.frontmatter.date}</p>
				<h6>By {article.frontmatter.author}</h6>
				<Img
					className="full"
					fluid={article.frontmatter.featuredImage.childImageSharp.fluid}
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
