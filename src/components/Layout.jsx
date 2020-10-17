import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Sidebar, Tags } from '.'
import { TagContext } from '../hooks'
import { Global } from '@emotion/core'
import { globalStyles, theme } from '../styles'
import { ThemeProvider } from 'emotion-theming'
// import '../styles/main.sass'

export const Layout = ({ children, tags = false }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	const [selectedTags, setSelectedTags] = useState([])

	return (
		<ThemeProvider theme={theme}>
			<TagContext.Provider value={{ selectedTags, setSelectedTags }}>
				<Global styles={globalStyles} />
				<div id="root">
					<Sidebar title={data.site.siteMetadata.title}>
						{tags && <Tags />}
					</Sidebar>
					<main>{children}</main>
				</div>
			</TagContext.Provider>
		</ThemeProvider>
	)
}