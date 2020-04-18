import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons"

export default (
  <>
    <a
      href="https://www.linkedin.com/in/ganesh-sundaram-647446136/"
      title="My Linkedin"
      aria-label="My Linkedin"
      rel="noopener noreferrer"
      target="_blank"
    >
      {/* <i
          className="icon-linkedin"></i> */}
      <FontAwesomeIcon icon={faLinkedin} />
    </a>
    <a
      href="https://github.com/ganeshsundaram39"
      title="My Github"
      aria-label="My Github"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faGithub} />
    </a>
    <a
      href="https://twitter.com/@ganeshsundaram_"
      title="My Twitter"
      aria-label="My Twitter"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faTwitter} />
    </a>
    <a
      href="https://codepen.io/ganeshsundaram39/"
      title="My Codepen"
      aria-label="My Codepen"
      rel="noopener noreferrer"
      target="_blank"
    >
      <FontAwesomeIcon icon={faCodepen} />
    </a>
  </>
)
