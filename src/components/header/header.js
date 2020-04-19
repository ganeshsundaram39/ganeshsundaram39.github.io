import React from "react"
import { Navbar } from "./navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
import SocialLinks from "./social-links"
import Background from './Background';
import styled from "styled-components"

const NameTextBox = styled.div`
  & {
    max-width: 1140px;
  }

  .tagline {
    font-size: 150%;
    margin-top: 15px;
    color: #fff;
    letter-spacing: 1px;
    word-spacing: 2px;
    font-family: "Righteous", cursive;
  }

  .social-links {
    font-size: 150%;
    margin-top: 10vh;
  }

  .social-links a {
    margin: 0 3vw;
  }

  .social-links a:link,
  .social-links a:visited {
    display: inline-block;
    transition: all 0.4s;
    color: #fff;
  }

  .social-links a:hover,
  .social-links a:active {
    color: #0669a8;
  }

  .know-me-better {
    margin-top: 9vh;
    font-size: 110%;
    font-weight: 500;
  }

  .know-me-better a:link,
  .know-me-better a:visited {
    color: #fff;
    border: 1px solid #0f86d2;
    border-radius: 200px;
    padding: 10px 30px;
    background-color: #0f86d2;
  }

  .know-me-better a:hover,
  .know-me-better a:active {
    background-size: 2rem 2rem;
    background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 75%,
      transparent 75%,
      transparent
    );
    animation: back 2.8s linear infinite;
  }

  .know-me-better a svg {
    margin-left: 7px;
    height: 22px;
    position: relative;
    top: 1px;
  }

  @media only screen and (max-width: 1200px) {
    & {
      width: 100%;
      padding: 0 2%;
    }
  }

  @media only screen and (max-width: 480px) {
    .social-links {
      word-spacing: 30px;
      margin-top: 5vh;
    }
    .know-me-better {
      margin-top: 6vh;
    }
  }
`

const Header = () => (
  <Background>
    <Navbar></Navbar>
    <NameTextBox >
      <h1 className="center">Ganesh Sundaram</h1>
      <div className="tagline center">Front-End Web Developer</div>
      <div className="center social-links">{SocialLinks}</div>
      <div className="center know-me-better">
        <a href="#about" rel="noopener noreferrer">
          Know Me Better
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </NameTextBox>
  </Background>
)

export default Header
