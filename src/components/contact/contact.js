import React, { useState } from "react"

import emailjs from "emailjs-com"

import styled from "styled-components"
import Background from "./background"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"

const MyForm = styled.form`
  & {
    width: 50%;
    margin: 4% 25%;
  }

  & input,
  & textarea {
    width: 80%;
    margin-top: 23px;
    margin: 2% 10%;
    font-size: 90%;
    padding: 2%;
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.44);
    background: transparent;
  }

  & input:focus,
  & textarea:focus {
    border-color: #0f86d2;
  }

  & p {
    color: #000000c4;
  }

  & .send {
    border: 2px solid #0f86d2;
    background-color: #0f86d2;
    border-radius: 200px;
    padding: 5px 20px;
    color: #fff;
    font-weight: 500;
    width: 80%;
    margin: 0 10%;
    cursor: pointer;
  }

  & .send > svg {
    padding-left: 1%;
    position: relative;
    top: 1px;
  }

  & .send:hover {
    background-size: 2rem 2rem;
    background-image: linear-gradient(
      225deg,
      rgba(0, 0, 0, 0.1) 25%,
      transparent 25%,
      transparent 50%,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(0, 0, 0, 0.1) 75%,
      transparent 75%,
      transparent
    );
    animation: back 2.8s linear infinite;
    animation-direction: reverse;
  }
  @media only screen and (max-width: 767px) {
    & {
      width: 80%;
      margin: 4% 10%;
    }
  }
  @media only screen and (max-width: 480px) {
    & {
      width: 100%;
      margin: 4% 0;
    }

    & input,
    & textarea {
      width: 100%;
      margin: 3% 0;
      padding: 4%;
    }
  }
`

const Contact = props => {
  const [sendMessage, setSendMessage] = useState(false)

  const sendEmail = e => {
    console.log({ e: e.target })
    e.preventDefault()
    setSendMessage(true)
    emailjs
      .sendForm(
        "ganeshsundaram",
        "gscode_template",
        e.target,
        "user_3NB50omIWwpQToXY0ergt"
      )
      .then(
        () => {
          alert("Hey there, I will contact you soon!")
          setSendMessage(false)
        },
        err => {
          alert("Something went wrong!")
          console.error(
            "Send email failed!\r\n Response:\n " + JSON.stringify(err)
          )
          setSendMessage(false)
        }
      )
  }
  return (
    <Background>
      <div className="row">
        <h2 className="center">Get In Touch</h2>
      </div>
      <div className="row center">
        <p>Got any project I can help out with? Tell me more about it.</p>
      </div>
      <div className="row">
        <MyForm method="post" onSubmit={sendEmail}>
          <div className="row">
            <input
              type="text"
              name="from_name"
              aria-label="Your name"
              placeholder="Your name"
              required
            />
          </div>
          <div className="row">
            <input
              type="text"
              name="from_email"
              aria-label="Your email address"
              placeholder="Your email address"
              required
            />
          </div>
          <div className="row">
            <textarea
              rows="4"
              cols="50"
              name="message"
              aria-label="Short description of your project"
              placeholder="Short description of your project"
              required
            ></textarea>
          </div>
          <br />
          <div className="row">
            <button className="send">
              {sendMessage ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FontAwesomeIcon icon={faTelegramPlane} />
                </>
              )}
            </button>
          </div>
        </MyForm>
      </div>
    </Background>
  )
}

export default Contact
