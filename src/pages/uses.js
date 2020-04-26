import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Background from "../components/header/background"
import styled from "styled-components"
import { Navbar } from "../components/header/navbar"
import Footer from "../components/footer/footer"

const NameTextBox = styled.div`
  & {
    max-width: 1140px;
  }
  @media only screen and (max-width: 1200px) {
    & {
      width: 100%;
      padding: 0 2%;
    }
  }
`

const Wrapper = styled.article`
  & {
    display: flex;
    justify-content: center;
    background: #e8e8e8cc;
  }
  & > div {
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
    & > div {
      width: 90vw;
    }
  }
`

const UsesPage = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout title="Uses">
      <Background styles={{ height: "60vh" }}>
        <Navbar></Navbar>
        <NameTextBox>
          <h1 className="center">{frontmatter.title}</h1>
          <div className="tagline center">{frontmatter.subtitle}</div>
        </NameTextBox>
      </Background>
      <Wrapper>
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </Wrapper>
      <Footer></Footer>
    </Layout>
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
