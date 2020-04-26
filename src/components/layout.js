import React from "react"
import PropTypes from "prop-types"
import SEO from "./seo"
import { createGlobalStyle } from "styled-components"
import { config, dom } from "@fortawesome/fontawesome-svg-core"

config.autoAddCss = false
const FontAwesomeStyles = createGlobalStyle`
    ${dom.css()}
`

const Layout = ({ children, title }) => {
  return (
    <>
      <SEO title={title} />
      <FontAwesomeStyles />
      {children}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default Layout
