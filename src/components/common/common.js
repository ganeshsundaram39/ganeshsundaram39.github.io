import React from "react"
import PropTypes from "prop-types"
import Layout from "../layout"
import Background from "../header/background"
import styled from "styled-components"
import { Navbar } from "../header/navbar"
import Footer from "../footer/footer"

const FrontMatterBox = styled.div`
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

const Wrapper = styled.section`
  & {
    display: flex;
    justify-content: center;
    background: #e8e8e8cc;
    padding: 0;
  }
`

const MarkDownBody = styled.article`
  & {
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    background: #fff;
    padding: 5%;
    width: 70vw;
    position: relative;
    top: -80px;
    line-height: 1.5;
    word-spacing: 1px;
    min-height: 100vh;
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

const Common = ({
  title,
  subtitle,
  description,
  children,
  html,
  isBlogPost,
}) => {
  return (
    <Layout title={isBlogPost ? subtitle : title} description={description}>
      <Background styles={{ height: "60vh" }}>
        <Navbar />
        <FrontMatterBox>
          <h1 className="center">{title}</h1>
          <div className="tagline center">{subtitle}</div>
        </FrontMatterBox>
      </Background>
      <Wrapper>
        {html ? (
          <MarkDownBody dangerouslySetInnerHTML={{ __html: html }} />
        ) : (
          <MarkDownBody>{children}</MarkDownBody>
        )}
      </Wrapper>
      <Footer />
    </Layout>
  )
}

Common.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
}
export default Common
