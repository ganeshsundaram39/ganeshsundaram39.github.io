import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import Common from "../components/common/common"
import Img from "gatsby-image"

const PostWrapper = styled.div`
  & {
    position: relative;
    height: 100%;
  }
  hr {
    position: absolute;
    bottom: 0;
    width: 100%;
  }
`

const Post = styled.article`
  display: flex;
  margin-bottom: 25px;
  .featured-image-wrapper {
    flex-basis: 35%;
  }

  .other-frontmatter {
    flex-basis: 65%;
    padding-left: 2%;
  }
  strong {
    font-size: 15px;
    font-weight: bold;
  }
  @media only screen and (max-width: 767px) {
    & {
      flex-direction: column;
    }
    .other-frontmatter {
      padding-left: 0%;
      padding-top: 4%;
    }
  }
`

const Posts = props => {
  return props.posts.map(({ node }) => {
    return (
      <Post key={node.fields.slug}>
        <div className="featured-image-wrapper">
          {" "}
          <Img
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
            backgroundColor
            style={{
              boxShadow: `0px 10px 1px #ddd, 0 10px 20px #ccc`,
            }}
          />
        </div>
        <div className="other-frontmatter">
          <h3>
            <Link to={node.fields.slug}>
              {node.frontmatter.title} {node.frontmatter.subtitle}
            </Link>
          </h3>
          <strong>{node.frontmatter.date}</strong>
          <p>{node.frontmatter.description}.</p>
        </div>
      </Post>
    )
  })
}

const BlogPage = ({ data }) => {
  return (
    <Common
      title={"Blog"}
      subtitle={"Talking about web development, life or just rambling"}
    >
      <PostWrapper>
        <Posts posts={data.allMarkdownRemark.edges} />
        <hr />
      </PostWrapper>
    </Common>
  )
}

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { path: { ne: "/uses" } } }
      sort: { fields: [frontmatter___title], order: [DESC] }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            subtitle
            description
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 300) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }
        }
      }
    }
  }
`

export default BlogPage
