import React from 'react';
import { navigate, StaticQuery, graphql } from 'gatsby';
import { useTags } from '../hooks';
import styled from '@emotion/styled';
import { neonShadow } from '../styles';
import { css } from '@emotion/react';

const query = graphql`
	query ArticleListQuery {
		allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
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
					{data.allMdx.edges
						.map(article => article.node)
						.filter(({ frontmatter: { tags } }) =>
							selectedTags?.length > 0 ? selectedTags.reduce((a, t) => (tags?.includes(t) ? true : a), false) : true,
						)
						.map(({ frontmatter, id, excerpt }) => {
							const { path, title, emoji } = frontmatter;
							return (
								<Li onClick={handleClick(path)} key={`article-${id}`} data-short={short}>
									<div className='icon-panel'>
										<span>{emoji}</span>
									</div>
									<div className='text'>
										<h4>{title}</h4>
										<p>{excerpt}</p>
									</div>
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

const Li = styled.li(
	({ theme }) => css`
		list-style: none;
		cursor: pointer;
		display: flex;
		border-radius: 8px;
		border: 1px solid ${theme.palette.gold}99;
		padding: 10px;
		background-color: ${theme.palette.dark}99;
		height: auto;
		max-height: 400px;
		overflow-y: hidden;
		transition: max-height 0.4s ease;

		.icon-panel {
			margin-right: 20px;
			display: flex;
			justify-content: flex-start;
		}

		&:hover {
			border-color: ${theme.palette.gold};
			background-color: ${theme.palette.dark};

			div:first-child span {
				${neonShadow};
			}
		}

		&[data-short='true'] {
			max-height: 45px;
			&:hover {
				max-height: 400px;
			}
		}
	`,
);
