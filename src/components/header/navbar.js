import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  position: absolute;
  top: 0;
  width:100%;

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
  { name: "About", href: "#about", hide: true },
  { name: "Samples", href: "#samples", hide: true },
  {
    name: "What I Use",
    href: "https://codepen.io/ganeshsundaram39/post/tool-i-use-for-web-development",
    openBlank: true,
  },
  { name: "Resume", href: "/resume/resume.pdf", hide: true, download: true },
]

export const Navbar = () => {
  return (
    <Nav>
      <div className="row">
        <ul className="main-nav">
          {navs.map(nav =>
            nav.hide ? null : (
              <li key={nav.name}>
                <a
                  rel="noopener noreferrer"
                  className={nav.name === "Resume" ? "resume" : ""}
                  {...(nav.openBlank && { target: "_blank" })}
                  {...(nav.download && { download: true })}
                  href={nav.href}
                >
                  {nav.name}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
    </Nav>
  )
}
