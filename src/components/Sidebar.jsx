import React from 'react'
import { Breadcrumbs } from '@blueprintjs/core'
import { Link } from 'gatsby'

const Sidebar = () => {
    
    const crumbs = [
        { href: '/', icon: 'home' },
    ]

    return (
        <nav id="sidebar">
            <Breadcrumbs items={crumbs} />
            <Profile />
            <p>Conor Sinclair</p>
            <p>A software developer of high esteem</p>
			<footer>
				<Link to="/contact/">Get in contact</Link>
			</footer>
        </nav>
    )
}

export default Sidebar