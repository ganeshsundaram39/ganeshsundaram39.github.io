import React from "react"
import Header from '../components/header/header'
import Layout from '../components/layout'
import Intro from '../components/intro/intro'
import WorkSamples from '../components/work-samples/work-samples'
import Contact from '../components/contact/contact'
import Map from '../components/map/map'
import Footer from '../components/footer/footer'

const IndexPage = () => (
  <Layout title="Front-End Web Developer">
    <Header></Header>
    <Intro></Intro>
    <WorkSamples></WorkSamples>
    <Contact></Contact>
    <Map></Map>
    <Footer></Footer>
  </Layout>
)

export default IndexPage
