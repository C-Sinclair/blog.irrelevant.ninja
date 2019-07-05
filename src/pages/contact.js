import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Page" />
    <h1>Contact</h1>
    <p>Why not drop me a message</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
