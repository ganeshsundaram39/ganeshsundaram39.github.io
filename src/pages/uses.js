import React from "react"
import { graphql } from "gatsby"
import Common from "../components/common/common"

const UsesPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your  data
  const { frontmatter, html } = markdownRemark

  return (
    <Common
      title={frontmatter.title}
      html={html}
      subtitle={frontmatter.subtitle}
      description={"Tools and utilities used by Ganesh Sundaram"}
    ></Common>
  )
}

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { path: { eq: "/uses" } }) {
      html
      frontmatter {
        title
        subtitle
      }
    }
  }
`

export default UsesPage
