import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Common from '../components/common/common'

const Wrapper = styled.section`
  & {
    display: flex;
    justify-content: center;
    background: #e8e8e8cc;
    padding:0;
  }
`

const MarkDownBody = styled.article`
  &  {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
    padding: 5%;
    width: 70vw;
    position: relative;
    top: -80px;
    line-height: 1.5;
    word-spacing: 1px;
  }
  hr {
    border: 0;
    border-bottom: 2px dashed #ccc;
  }
  a {
    color: #0f86d2;
    transition: all 0.2s ease-in-out;
  }
  a:hover {
    color: #0669a8;
  }
  @media only screen and (max-width: 767px) {
    & {
      width: 90vw;
    }
  }
`

const UsesPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your  data
  const { frontmatter, html } = markdownRemark

  return (
    <Common title={frontmatter.title} subtitle={frontmatter.subtitle} styles={{ height: '60vh' }}>
      <Wrapper>
        <MarkDownBody dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
    </Common>
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
