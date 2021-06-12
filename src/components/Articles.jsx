import React from 'react';
import { navigate, StaticQuery, graphql } from 'gatsby';
import { useTags } from '../hooks';
import styled from '@emotion/styled';
import { neonShadow } from '../styles';

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
						emoji
					}
				}
			}
		}
	}
`;

export const Articles = ({ short = false }) => {
	const { selectedTags } = useTags();

	const handleClick = path => () => navigate(path);

	return (
		<StaticQuery
			query={query}
			render={data => (
				<Ul short={short}>
					{data.allMarkdownRemark.edges
						.map(article => article.node)
						.filter(({ frontmatter: { tags } }) =>
							selectedTags?.length > 0 ? selectedTags.reduce((a, t) => (tags?.includes(t) ? true : a), false) : true,
						)
						.map(({ frontmatter, id, excerpt }) => {
							const { path, title, emoji } = frontmatter;
							return (
								<Li onClick={handleClick(path)} key={id}>
									<IconPanel>
										<Emoji>{emoji}</Emoji>
									</IconPanel>
									<TextContainer>
										<h4>{title}</h4>
										{!short && <p>{excerpt}</p>}
									</TextContainer>
								</Li>
							);
						})}
				</Ul>
			)}
		/>
	);
};

const Ul = styled.ul`
	padding: 0 25px;
`;

const IconPanel = styled.div`
	margin-right: 20px;
	display: flex;
	justify-content: flex-start;
`;

const Emoji = styled.span``;

const Li = styled.li`
	list-style: none;
	cursor: pointer;
	display: flex;
	&:hover {
		div:first-child span {
			${neonShadow};
		}
	}
`;

const TextContainer = styled.div``;
