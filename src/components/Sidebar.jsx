import React from 'react'
import { Breadcrumbs } from '@blueprintjs/core'
import { Link } from 'gatsby'
import Profile from './Profile'

const Sidebar = ({ children, crumb = []}) => {
    
    const crumbs = [
        { href: '/', icon: 'home' },
        ...crumb
    ]

    return (
        <nav id="sidebar">
            <Breadcrumbs items={crumbs} />
            <a className="profile" href="https://c.sinclair.software">
                <Profile />
                <h4>Conor Sinclair</h4>
                <p>A Software Developer of high esteem</p>
            </a>
            <div className="content">
                { children }
            </div>
			<footer>
				<Link to="/contact/">Get in contact</Link>
			</footer>
        </nav>
    )
}

export default Sidebar