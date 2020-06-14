import React from "react"

import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import SocialLinks from "../header/social-links"

const Footer = styled.footer`
  & {
    font-size: 80%;
    padding: 2%;
    background-color: #555555;
    color: #fff;
    margin-top: -5px;
  }

  .footer__links {
    display: flex;
    flex-direction: column;
    height: 50vh;
    padding: 1% 2%;
    margin: 0 2%;
  }

  .footer__links > div {
    flex-basis: 50%;
    display: flex;
    justify-content: center;
  }

  .footer__links .contacts {
    flex-direction: column;
  }

  .footer__links .links {
    justify-content: flex-start;
  }

  .footer__links * {
    font-size: 0.9rem;
  }
  .footer__links .links a {
    height: 0;
  }
  .footer__links .links svg {
    color: #fff;
    margin-right: 15px;
    transition: all 0.2s ease-in-out;
  }

  .footer__links .links svg:hover {
    color: #0f86d2;
  }

  .footer__links .contact {
    margin-bottom: 4%;
  }

  .footer__links span#whatsapp,
  .footer__links span#gmail {
    font-weight: 400;
    margin-left: 2%;
    transition: all 0.2s ease-in-out;
  }

  @media only screen and (min-width: 480px) {
    .footer__links * {
      font-size: 1rem;
    }
    .icon-menu,
    .icon-cancel {
      display: none;
    }
    nav {
      display: block;
    }
  }

  @media only screen and (min-width: 480px) {
    .footer__links * {
      font-size: 1rem;
    }
  }

  @media only screen and (min-width: 767px) {
    .footer__links {
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
    }
    .footer__links > div {
      justify-content: flex-start;
    }
    .footer__links .links {
      justify-content: flex-end;
    }
    .footer__links .links svg {
      font-size: 1.4rem;
    }
    .footer__links .contact {
      font-size: 1.1rem;
    }
  }
`

const footer = props => {
  return (
    <Footer>
      <div className="footer__links">
        <div className="contacts">
          <div className="contact">
            <FontAwesomeIcon icon={faWhatsapp} />
            <span x-ms-format-detection="none" id="whatsapp">+91 976 8721 841</span>
          </div>
          <div className="contact">
            <FontAwesomeIcon icon={faEnvelope} />
            <span id="gmail">ganeshsundaram39@gmail.com</span>
          </div>
        </div>
        <div className="links">{SocialLinks}</div>
      </div>
      <div className="row center">
        © Copyright {new Date().getFullYear()}
      </div>
    </Footer>
  )
}

export default footer
