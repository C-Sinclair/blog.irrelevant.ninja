import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Header from './header'
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
			<Header siteTitle={data.site.siteMetadata.title} />
			<main>{children}</main>
			<footer>
				<Link to="/contact/">Get in contact</Link>© {new Date().getFullYear()}, Built with
				{` `}
				<a href="https://www.gatsbyjs.org">Gatsby</a>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired
}

export default Layout
