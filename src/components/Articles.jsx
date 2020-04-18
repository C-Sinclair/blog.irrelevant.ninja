import React from 'react'
import { navigate, StaticQuery } from 'gatsby'

const query = graphql`
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
`

const Articles = ({ short = false }) => {
	const handleClick = path => () => navigate(path)
	return (
		<StaticQuery
			query={query}
			render={data => (
				<ul id="articles" className={short && "short"}>
					{data.allMarkdownRemark.edges.map(article => {
						const { path, title } = article.node.frontmatter
						return (
							<li onClick={handleClick(path)}>
								<h4>{title}</h4>
							</li>
						)
					})}
				</ul>
			)}
		/>
	)
}

export default Articles