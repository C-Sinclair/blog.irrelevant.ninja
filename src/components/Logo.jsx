import styled from '@emotion/styled';
import React from 'react';

export const Logo = () => {
	return (
		<LogoContainer>
			<h1>Irrelevant Ninja</h1>
			<Blog>Blog</Blog>
		</LogoContainer>
	);
};

const LogoContainer = styled.div`
	position: relative;
	font-size: 25px;
	margin-top: 20px;
`;

const Blog = styled.sub`
	position: absolute;
	top: 75px;
	margin-left: 95px;
	color: ${({ theme }) => theme.palette.gold};
`;
