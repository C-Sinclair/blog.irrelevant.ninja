import React from 'react'
import { Layout, SEO } from '../components'

const ContactPage = () => (
	<Layout crumb={[{ href: '/contact', icon: 'person', text: 'Contact' }]}>
		<SEO title="Contact" />
		<header>
			<h1>Contact</h1>
		</header>
		<div style={{ padding: 25, textAlign: 'center' }}>
			<p>Why not drop me a message</p>
		</div>
	</Layout>
)

export default ContactPage
