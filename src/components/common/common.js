import React from "react"
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

const Common = ({
  styles,
  title,
  subtitle,
  children
}) => {
  return (
    <Layout title={title}>
      <Background styles={{ ...styles }}>
        <Navbar />
        <FrontMatterBox>
          <h1 className="center">{title}</h1>
          <div className="tagline center">{subtitle}</div>
        </FrontMatterBox>
      </Background>
      {children}
      <Footer />
    </Layout>
  )
}

export default Common
