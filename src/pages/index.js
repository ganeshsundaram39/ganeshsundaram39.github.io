import React from "react"
import Header from "../components/header/header"
import Layout from "../components/layout"
import Intro from "../components/intro/intro"
import WorkSamples from "../components/work-samples/work-samples"
import Contact from "../components/contact/contact"
import Footer from "../components/footer/footer"
import { createGlobalStyle } from "styled-components";
import { config, dom } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
const GlobalStyles = createGlobalStyle`
    ${dom.css()}
`;
const IndexPage = () => (
  <Layout title="Front-End Web Developer">
    <GlobalStyles />
    <Header></Header>
    <Intro></Intro>
    <WorkSamples></WorkSamples>
    <Contact></Contact>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
