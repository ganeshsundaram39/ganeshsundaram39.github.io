import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Common from '../components/common/common'


const PostWrapper = styled.section`
  display: flex;
    flex-direction: row-reverse;
    padding: 13vh 5vw;
    min-height:100vh;
`
const Posts = styled.div`
  flex-basis:80%;
  display:flex;
  flex-wrap:wrap;
  align-content: flex-start;
`
const Post = styled.article`
  padding: 0;
  transition: 0.1s ease-in;
  border-radius: 12px;
  box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06);
  border-width: 1px;
  border-color: #EDF2F7;
  display: flex;
  flex-direction: column;
`

const SearchPost = styled.div`
  flex-basis:20%;
`

const BlogPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  console.log({ data })
  const posts = data.allMarkdownRemark.edges // data.markdownRemark holds your post data
  console.log({ posts })

  return (
    <Common title={'Blog'} subtitle={'Talking about web development, life or just rambling'} styles={{ height: '50vh' }}>
      <PostWrapper>
        <SearchPost></SearchPost>
        <Posts>
          {
            posts.map(({ node }) => {
              return (
                <Post key={node.fields.slug}>
                  <b>{node.frontmatter.subtitle}</b>
                </Post>)
            })
          }
        </Posts>
      </PostWrapper>
    </Common>
  )
}

export const pageQuery = graphql`
    {
      allMarkdownRemark(filter: {frontmatter: {path: {ne: "/uses"}}}) {
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
            }
          }
        }
      }
    }
`

export default BlogPage
