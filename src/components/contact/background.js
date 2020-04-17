import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'

const Background = ({ children, styles }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "dombivli-railway-station.jpg" }) {
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
        `linear-gradient( to right bottom,
      rgb(255, 255, 255),
      hsla(0, 0%, 100%, 0.82)
        )`,
        data.desktop.childImageSharp.fluid,
      ]
      return (
        <BackgroundImage
          Tag="section"
          fluid={backgroundFluidImageStack}
          className="contact-bg"
          id="contact"
          style={{
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: '50% 100%',
          }}
        >
          {children}
        </BackgroundImage>
      )
    }}
  />
)

export default Background
