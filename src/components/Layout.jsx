import React, { useState } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { Sidebar, Tags } from '.';
import { TagContext } from '../hooks';
import styled from '@emotion/styled';
import { useSidebar } from '../hooks/useSidebar';

export const Layout = ({ children, tags = false }) => {
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
		<TagContext.Provider value={{ selectedTags, setSelectedTags }}>
			<Root data-sidebar-open={sidebarOpen}>
				<Sidebar title={data.site.siteMetadata.title}>{tags && <Tags />}</Sidebar>
				<main>{children}</main>
			</Root>
		</TagContext.Provider>
	);
};

const Root = styled.div`
	display: flex;
	--sidebar-width: 0;

	&[data-sidebar-open='true'] {
		--sidebar-width: 300px;
	}
`;
