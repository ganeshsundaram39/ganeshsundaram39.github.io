import React from "react"
import { graphql } from "gatsby"
import Common from "../components/common/common"

const BlogPostTemplate = ({ data, pageContext }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata.title
  const { title, subtitle, date, description } = data.markdownRemark.frontmatter
  const { previous, next } = pageContext
  return (
    <Common
      title={title}
      isBlogPost={true}
      subtitle={subtitle}
      description={description}
      html={post.html}
    ></Common>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        subtitle
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`

export default BlogPostTemplate
