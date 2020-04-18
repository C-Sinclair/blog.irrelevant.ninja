import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Sidebar from './Sidebar'
import '../styles/main.sass'

const Layout = ({ children }) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Sidebar title={data.site.siteMetadata.title} />
			<main>{children}</main>
		</>
	)
}

export default Layout
