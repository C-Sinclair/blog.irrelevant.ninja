import React from 'react'
import { navigate, StaticQuery, graphql } from 'gatsby'
import { useTags } from '../hooks/useTags'

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
						tags
					}
				}
			}
		}
	}
`

const Articles = ({ short = false }) => {
	const { selectedTags } = useTags()
	
	const handleClick = path => () => navigate(path)

	return (
		<StaticQuery
			query={query}
			render={data => (
				<ul id="articles" className={short ? "short" : ""}>
					{data.allMarkdownRemark.edges
					.map(article => article.node)
					.filter(({ frontmatter: { tags }}) => selectedTags?.length > 0
						? selectedTags.reduce((a, t) => tags?.includes(t) ? true : a, false)
						: true
					)
					.map(({ frontmatter, id, excerpt }) => {
						const { path, title } = frontmatter
						return (
							<li onClick={handleClick(path)}
								key={id}>
								<h4>{title}</h4>
								{ !short && (
									<p>{excerpt}</p>
								)}
							</li>
						)
					})}
				</ul>
			)}
		/>
	)
}

export default Articles