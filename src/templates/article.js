import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import format from 'date-fns/format'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function Template({ data }) {
	const article = data.markdownRemark
	const { frontmatter: {
		title, 
		date, 
		featuredImage,
		shortTitle
	}} = article

	const crumb = [
		{ href: '/articles', icon: 'book', text: 'Articles' },
		{ icon: 'bookmark', text: shortTitle }
	]

	const formattedDate = format(new Date(date), "do MMMM yyyy")

	return (
		<Layout crumb={crumb}>
			<SEO title="Articles" />
			<article>
				<header>
					<h1>{title}</h1>
				</header>
				<p className="date">{formattedDate}</p>
				<Img
					className="full"
					fluid={featuredImage.childImageSharp.fluid}
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
				title
				author
				date
				shortTitle
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
