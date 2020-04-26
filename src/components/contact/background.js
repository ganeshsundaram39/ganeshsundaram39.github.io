import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Background = ({ children, styles }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "sealink.jpg" }) {
          childImageSharp {
            fluid(quality: 50, maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={data => {
      const backgroundFluidImageStack = [
        `linear-gradient( to right bottom,
      rgb(255, 255, 255),
      rgba(255, 255, 255,0.8)
        )`,
        data.desktop.childImageSharp.fluid,
      ]
      return (
        <BackgroundImage
          Tag="section"
          fluid={backgroundFluidImageStack}
          className="contact-bg"
          style={{
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "50% 100%",
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default Background
