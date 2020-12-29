import React from "react"

import {Link} from "gatsby"

import Layout from '../components/Layout'
import SEO from "../components/Seo"

const NotFoundPage = () => {
  return (
    <Layout layoutType="blog">
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>Please use the menu to find content. If you believe this is an error let me know.  <Link to="/contact">contact link</Link></p>
    </Layout>
  )
}

export default NotFoundPage

