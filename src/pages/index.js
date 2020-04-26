import React from "react"
import Header from "../components/header/header"
import Layout from "../components/layout"
import Intro from "../components/intro/intro"
import WorkSamples from "../components/work-samples/work-samples"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import { createGlobalStyle } from "styled-components"

const GridStyles = createGlobalStyle`
  .row {
    zoom: 1;
  }
  .row:before,
  .row:after {
    content: "";
    display: table;
  }
  .row:after {
    clear: both;
  }
  .col {
    display: block;
    float: left;
    margin: 1% 0 1% 1.6%;
  }
  .col:first-child {
    margin-left: 0;
  }
  @media only screen and (max-width: 480px) {
    .col {
      margin: 0;
    }
  }
  .span-2-of-2 {
    width: 100%;
  }
  .span-1-of-2 {
    width: 49.2%;
  }
  @media only screen and (max-width: 480px) {
    .span-2-of-2 {
      width: 100%;
    }
    .span-1-of-2 {
      width: 100%;
    }
  }
`

const IndexPage = () => (
  <Layout title="Front-End Web Developer">
    <GridStyles />
    <Header></Header>
    <Intro></Intro>
    <WorkSamples></WorkSamples>
    <Contact></Contact>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
