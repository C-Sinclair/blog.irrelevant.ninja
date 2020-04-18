import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Sidebar from './Sidebar'
import { TagContext } from '../hooks/useTags'
import Tags from './Tags'
import '../styles/main.sass'

const Layout = ({ children, crumb, tags = false }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [ selectedTags, setSelectedTags ] = useState([])

	return (
		<TagContext.Provider value={{ selectedTags, setSelectedTags }}>
			<div id="root">
				<Sidebar title={data.site.siteMetadata.title} crumb={crumb}>
					{ tags && <Tags /> }
				</Sidebar>
				<main>{children}</main>
			</div>
		</TagContext.Provider>
	)
}

export default Layout
