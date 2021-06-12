import React, { useMemo } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import { Layout, SEO } from '../components';
import styled from '@emotion/styled';
import { VscCalendar } from 'react-icons/vsc';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { MDXProvider } from '@mdx-js/react';
import Code from '../components/Code';
import format from 'date-fns/format';

export default function Template({ data }) {
	const article = data.mdx;
	const {
		frontmatter: { title, date, featuredImage, emoji, language },
	} = article;

	const formattedDate = useMemo(() => format(new Date(date), 'do MMMM yyyy'), [date]);

	const mdxComponents = useMemo(
		() => ({
			code: props => <Code {...props} language={language} />,
		}),
		[],
	);

	return (
		<Layout article>
			<SEO title='Articles' />
			<article>
				<header>
					<Emoji>{emoji}</Emoji>
					<h1>{title}</h1>
					<DateContainer title={formattedDate}>
						<VscCalendar />
					</DateContainer>
				</header>
				<BannerImage fullWidth fluid={featuredImage.childImageSharp.fluid} />
				<MDXProvider components={mdxComponents}>
					<MDXRenderer>{article.body}</MDXRenderer>
				</MDXProvider>
			</article>
		</Layout>
	);
}

const Emoji = styled.div`
	position: absolute;
	left: 0;
	top: 10px;
	font-size: 1.5em;
`;

const DateContainer = styled.div`
	position: absolute;
	right: 0;
	top: 10px;
	cursor: help;
`;

const BannerImage = styled(Img)(
	({ fullWidth }) => `
  ${
		fullWidth &&
		`
			margin-left: -30px;
			width: calc(100% + 60px);
		`
	}
`,
);

export const postQuery = graphql`
	query BlogPostByPath($path: String!) {
		mdx(frontmatter: { path: { eq: $path } }) {
			body
			frontmatter {
				title
				author
				date
				emoji
				language
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
`;
