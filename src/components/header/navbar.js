import React from "react"
import styled from "styled-components"

const Nav = styled.nav`
  position: absolute;
  top: 0;
  right: 5vw;

  .main-nav {
    display: flex;
    list-style: none;
    margin-top: 6vh;
    margin-right: 6vh;
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
  @media only screen and (min-width: 480px) {
    & {
      display: block;
    }
  }
`

const navs = [
  { name: "About", href: "#about", hide: true },
  { name: "Samples", href: "#samples", hide: true },
  {
    name: "Blog",
    href: "https://codepen.io/ganeshsundaram39/posts/published/",
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
