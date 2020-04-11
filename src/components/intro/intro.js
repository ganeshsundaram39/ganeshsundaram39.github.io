import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faReact, faAngular, faSass, faNode, faUbuntu, faGit, faCss3Alt, faJs } from '@fortawesome/free-brands-svg-icons'
import { faDatabase, faLightbulb, faChartBar, faCode, faTachometerAlt } from '@fortawesome/free-solid-svg-icons';

import styled from "styled-components"

const Section = styled.section`
  & .col {
    margin-left: 0;
  }

  .profile-pic-container {
    display: flex;
    justify-content: flex-end;
  }

  .profile-pic {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin:15px;
  }

  & p {
    font-size: 105%;
    width: 90%;
    margin: 4% 5%;
    line-height: 145%;
  }

  .skill-set {
    list-style: none;
    width: 60%;
    margin: 5% 20%;
    color: #797979;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  .skill-set li {
    font-size: 350%;
    margin-top: 5%;
    flex-basis: 20%;
  }

  & .box {
    padding: 1%;
  }

  & .box svg {
    font-size: 160%;
    margin-bottom: 10px;
    color: #0f86d2;
    display: inline-block;
    max-height: 30px;
  }

  @media only screen and (max-width: 1023px) {
      & .box svg {
      font-size: 150%;
    }
  }

  @media only screen and (max-width: 767px) {
      & p {
      width: 99%;
      margin: 0 1%;
    }

    & .box svg {
      margin-bottom: 5px;
    }
      .profile-pic-container {
      justify-content: center;
    }

    .profile-pic {
      width: 150px;
      height: 150px;
    }

    .skill-set {
      width: 100%;
      margin: 5% 1%;
    }

    .skill-set li {
      margin-left: 5%;
    }
  }

  @media (max-width: 576px) {
      & .box:first-child {
      margin-top: 10%;
    }
    & .row:last-child .box:first-child {
      margin-top: 0;
    }
  }
`


const skills = [
  { title: "HTML", icon: faHtml5 },
  { title: "CSS", icon: faCss3Alt },
  { title: "Javascript", icon: faJs },
  { title: "React JS", icon: faReact },
  { title: "Angular", icon: faAngular },
  { title: "SASS", icon: faSass },
  { title: "Node JS", icon: faNode },
  { title: "MySql", icon: faDatabase },
  { title: "Git", icon: faGit },
  { title: "Ubuntu", icon: faUbuntu },
]

const Intro = () => {

  const data = useStaticQuery(graphql`
    query MyQuery {
      placeholderImage: file(relativePath: { eq: "profilepic2018.jpg" }) {
        childImageSharp {
          # Specify the image processing specifications right in the query.
          fluid(quality: 70, maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <Section id="about">
      <div className="row">
        <h2 className="center">About Me</h2>
      </div>
      <div className="row">
        <div className="col span-1-of-2 profile-pic-container">
          <Img
            fluid={data.placeholderImage.childImageSharp.fluid}
            alt="my photo"
            className="profile-pic"
          />
        </div>
        <div className="col span-1-of-2">
          <p>
            Hi, I'm Ganesh. I'm a Front-End developer living in Mumbai, India.
            I spend my days practicing my coding skills and learning new
            techniques. I would love to build a great and fancy website for you.
            Aside from web development, I enjoy listening to music, nature walk, exercise and
            stalking beautiful looking websites.
        </p>
        </div>
      </div>
      <div className="row">
        <ul className="skill-set">
          {
            skills.map(skill => <li key={skill.title} title={skill.title}> <FontAwesomeIcon icon={skill.icon} /></li>)
          }
        </ul>
      </div>
      <div className="row center">
        <div className="col span-1-of-2 box">
          <FontAwesomeIcon icon={faLightbulb} />
          <h3>1. Define and Planning</h3>
          <p>
            Define your audience and goal of your project. Plan the site
            structure and the content carefully.
        </p>
        </div>
        <div className="col span-1-of-2 box">
          <FontAwesomeIcon icon={faChartBar} />
          <h3>2. Research and Prototyping</h3>
          <p>
            Research current website design trends, marketing techniques and
            analyzing its impact on the audience. Create multiple prototypes
            using pen and paper.
        </p>
        </div>
      </div>
      <div className="row center">
        <div className="col span-1-of-2 box">
          <FontAwesomeIcon icon={faCode} />
          <h3>3. Code</h3>
          <p>
            Once I'am happy with the prototype I code the project using my
            favorite text editor.
        </p>
        </div>
        <div className="col span-1-of-2 box">
          <FontAwesomeIcon icon={faTachometerAlt} />
          <h3>4. Optimize</h3>
          <p>
            In the end, I work on responsiveness and make website loading
            blazingly fast.
        </p>
        </div>
      </div>
    </Section>
  )
}

export default Intro
