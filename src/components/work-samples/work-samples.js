import React, { useState } from "react"

import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight, faArrowDown } from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components"
import {

  isMobile
} from "react-device-detect";
const Section = styled.section`
  & {
    background-color: #e8e8e8;
  }

  .image-container {
    display: flex;
    justify-content: flex-end;
  }

  & .image {
    width: 80%;
    height: 50%;
  }

  & h3 {
    color: #555;
  }

  .type {
    font-weight: 800;
    color: #555;
    font-size: 90% !important;
  }

  & p {
    font-size: 100%;
    line-height: 145%;
  }

  & svg {
    margin: 3px 0 0 6px;
    font-size: 90%;
  }

  & .box {
    padding: 2%;
  }
  @media only screen and (max-width: 767px) {
    .image-container {
      justify-content: center;
    }
  }
`

const Anchor = styled.a`
  &:link,
  &:visited {
    border: 2px solid #0f86d2;
    background-color: #0f86d2;
    border-radius: 200px;
    padding: 5px 20px;
    margin: 10px 0 35px 0;
    display: inline-flex;
    color: #fff;
    font-weight: 500;
  }

  &:hover,
  &:active {
    background-size: 2rem 2rem;
    background-image: linear-gradient(
      ${props => (props.down ? "180deg" : "225deg")},
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 75%,
      transparent 75%,
      transparent
    );
    animation: back 2.8s linear infinite;
    animation-direction: ${props => (props.down ? "normal" : "reverse")};
  }
`

const works = [
  {
    image: "budget-webapp",
    name: "Budget WebApp",
    para:
      "Budget WebApp is developed using Reactjs + react-snap and is used to save your monthly budget.",
    alt: "Budget WebApp using react",
    live: "https://ganeshsundaram39.github.io/budgetic-redux/",
    notInMobile:true,
  },
  {
    image: "recipe-webapp",
    name: "Recipe WebApp",
    para:
      "Recipe WebApp is developed using Reactjs + react-snap and is used to save your food recipes.",
    alt: "recipe WebApp using react",
    live: "https://ganeshsundaram39.github.io/recipe-react-webapp/",
    notInMobile:true,

  },
  {
    image: "search-countries",
    name: "Search Countries",
    para:
      "Search Countries is developed using Angular + Scully and it helps in searching countries.",
    alt: "Search Countries",
    live: "https://ganeshsundaram39.github.io/search-countries/",
  },
  {
    image: "got",
    name: "GOT",
    para:
      "GOT is a SPA developed using Angular + Scully and it gives you information related to Game of thrones.",
    alt: "GOT",
    live: "https://ganeshsundaram39.github.io/got/",
  },
  {
    image: "open-movie",
    name: "Open Movie",
    para:
      "Open movie is powered by OMDb api and it helps you in obtaining movie information.",
    alt: "Open Movie",
    live: "https://ganeshsundaram39.github.io/open-movie/dist/",
  },
  {
    image: "responsive-whatsapp",
    name: "Responsive Whatsapp",
    para: "This looks good both in mobile and web.",
    alt: "Responsive Whatsapp",
    live: "https://ganeshsundaram39.github.io/responsive-whatsapp/",
  },
  {
    image: "bootstrap-components",
    name: "Bootstrap Components",
    para: "Components made using Jquery",
    alt: "Bootstrap Components",
    live: "https://ganeshsundaram39.github.io/Bootstrap-Components/",
  },
]

const WorkSamples = () => {
  const data = useStaticQuery(graphql`
    query WorkSamples {
      allFile(filter: { relativeDirectory: { eq: "work-samples" } }) {
        edges {
          node {
            name
            childImageSharp {
              fluid(quality: 70, maxWidth: 450) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `).allFile.edges.reduce((p, n) => {
    p[n.node.name] = n.node.childImageSharp
    return p
  }, {})

  const [count, setCount] = useState(1)
  const checkMobile= live=>{
    if(isMobile){
      alert('Made for Desktop and Laptop Experience!')
    }

    return {
      href:live
    }
  }
  return (
    <Section id="samples">
      <div className="row center">
        <h2>My Work Samples</h2>
      </div>
      {works.slice(0, 4 * count).map(work => (
        <div key={work.name} className="row">
          <div className="col span-1-of-2 image-container">
            <Img
              fluid={data[work.image].fluid}
              alt={work.alt}
              className="image"
              backgroundColor
            />
          </div>
          <div className="col span-1-of-2 box">
            <h3>{work.name}</h3>
            <p>{work.para}</p>
            <Anchor rel="noopener noreferrer"

           {...(work.notInMobile?checkMobile(work.live) : {href:work.live})}

              target="_blank">
              I Wanna Look
              <FontAwesomeIcon
                icon={faArrowRight}
                transform={{ rotate: -35 }}
              />
            </Anchor>
          </div>
        </div>
      ))}
      {count < Math.ceil(works.length / 4) && (
        <div className="row center" style={{ marginTop: "2%" }}>
          {" "}
          <Anchor
            down
            rel="noopener noreferrer"
            href="#"
            onClick={e => {
              e.preventDefault()
              setCount(count + 1)
            }}
          >
            Show More <FontAwesomeIcon icon={faArrowDown} />
          </Anchor>
        </div>
      )}
    </Section>
  )
}

export default WorkSamples
