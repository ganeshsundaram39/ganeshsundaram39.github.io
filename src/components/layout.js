
import React from "react"
import PropTypes from "prop-types"
import SEO from './seo'

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Layout
