import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  .main-nav {
    display: flex;
    list-style: none;
    margin-top: 6vh;
    justify-content: flex-end;
  }

  .main-nav li {
    margin-left: 2vw;
  }

  .main-nav li a:link,
  .main-nav li a:visited {
    color: #fff;
    text-transform: uppercase;
    font-size: 90%;
    border-bottom: 2px solid transparent;
    transition: border-bottom 0.2s;
    padding: 8px 0;
  }

  .main-nav li a:hover,
  .main-nav li a:active {
    border-bottom: 2px solid #0669a8;
  }

  .main-nav li a.resume {
    border: 2px solid #0f86d2;
    border-radius: 13px;
    padding: 6px 12px;
    color: #fff;
    font-weight: 400;
    letter-spacing: 1px;
  }
  .main-nav li a.resume:hover,
  .main-nav li a.resume:active {
    border: 2px solid #0669a8;
  }
  @media only screen and (max-width: 767px) {
    .main-nav li {
      margin-left: 5vw;
    }
  }
`

const navs = [
  { name: "home", to: "/" },
  { name: "blog", to: "/blog" },
  { name: "uses", to: "/uses" },
]
const isActive = ({ isCurrent, location }) => {
  return isCurrent && location.pathname === "/"
    ? { style: { display: "none" } }
    : isCurrent
    ? { style: { borderBottom: "2px solid #0669a8" } }
    : {}
}
export const Navbar = () => {
  return (
    <Nav>
      <div className="row">
        <ul className="main-nav">
          {navs.map(nav => (
            <li key={nav.name}>
              <Link to={nav.to} getProps={isActive}>
                {nav.name}
              </Link>
            </li>
          ))}
          {true && (
            <li>
              {" "}
              <a
                rel="noopener noreferrer"
                className="resume"

                href="/resume/Resume.pdf"
                target="_blank"
              >
                Resume
              </a>
            </li>
          )}
        </ul>
      </div>
    </Nav>
  )
}
