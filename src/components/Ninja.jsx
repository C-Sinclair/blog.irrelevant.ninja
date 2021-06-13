import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export function Ninja() {
	const data = useStaticQuery(query);
	return <StyledImg fixed={data.file.childImageSharp.fixed} />;
}

const StyledImg = styled(Img)(
	({ theme }) => css`
		/* width: 400px; */
	`,
);

const query = graphql`
	query {
		file(relativePath: { eq: "ninja-panda-transparent.png" }) {
			childImageSharp {
				fixed(width: 450, height: 485) {
					...GatsbyImageSharpFixed
				}
			}
		}
	}
`;
