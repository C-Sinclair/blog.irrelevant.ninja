import React from 'react'
import { navigate, StaticQuery } from 'gatsby'

export default ({ children }) => (
	<StaticQuery
		query={graphql`
			query ArticleListQuery {
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
		`}
		render={data => (
			<ul>
				{data.allMarkdownRemark.edges.map(article => {
					const { path, title } = article.node.frontmatter
					return (
						<li onClick={() => navigate(path)}>
							<h4>{title}</h4>
						</li>
					)
				})}
			</ul>
		)}
	/>
)
