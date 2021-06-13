import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Sidebar, Tags } from '.';
import { TagContext } from '../hooks';
import styled from '@emotion/styled';
import { useSidebar } from '../hooks/useSidebar';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../styles';

export const Layout = ({ children, tags = false, article = false, className }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`);

	const [selectedTags, setSelectedTags] = useState([]);
	const [sidebarOpen] = useSidebar();

	return (
		<ThemeProvider theme={theme}>
			<TagContext.Provider value={{ selectedTags, setSelectedTags }}>
				<Root data-sidebar-open={sidebarOpen} className={className}>
					<Sidebar title={data.site.siteMetadata.title} article={article}>
						{tags && <Tags />}
					</Sidebar>
					<main>{children}</main>
				</Root>
			</TagContext.Provider>
		</ThemeProvider>
	);
};

const Root = styled.div`
	display: flex;
	--sidebar-width: 0px;

	&[data-sidebar-open='true'] {
		--sidebar-width: 300px;
	}
`;
