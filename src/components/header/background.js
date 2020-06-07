import React from "react"
import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const Background = ({ children, styles }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "hero.jpg" }) {
          childImageSharp {
            fluid(quality: 30, maxWidth: 800) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const backgroundFluidImageStack = [
        `linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75))`,
        data.desktop.childImageSharp.fluid,
      ]
      return (
        <BackgroundImage
          Tag="header"
          fluid={backgroundFluidImageStack}
          className="header-bg"
          backgroundColor={`#000`}
          style={{
            height: "80vh",
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            ...styles,
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default Background
