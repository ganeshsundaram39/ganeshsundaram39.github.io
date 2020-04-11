import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Background = ({ children, styles }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "header-bg2018.jpg" }) {
          childImageSharp {
            fluid(quality: 40, maxWidth: 900) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const backgroundFluidImageStack = [
        `linear-gradient(rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.85))`,
        data.desktop.childImageSharp.fluid,
      ]
      return (
        <BackgroundImage
          Tag="header"
          fluid={backgroundFluidImageStack}
          className="header-bg"
          style={{
            height: '100vh',
            backgroundPosition: 'top',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            ...styles
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default Background
