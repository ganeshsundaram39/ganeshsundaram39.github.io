import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 style={{
      color: 'black',
      margin: '20vh 0 0',
      marginLeft: '5vw',
    }}>NOT FOUND</h1>
    <p style={{
      marginLeft: '5vw'
    }}>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
