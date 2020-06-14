import React, { useEffect, useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const CanvasWrapper = styled.div`
  & {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: relative;
  }

  canvas {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  h1 {
    color: black;
    margin: 20vh 0 0;
    margin-left: 5vw;
  }
  p {
    margin-left: 5vw;
  }
`


// Canvas tutorial by WES BOS's JAVACRIPT30 implemented in react hooks

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;
let ctx;


function draw({ clientX, clientY }) {
  if (!isDrawing) return; // stop the fn from running when they are not moused down
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(clientX, clientY);
  ctx.stroke();
  lastX = clientX
  lastY = clientY

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 150 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if (direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }
}
const NotFoundPage = () => {
  const canvasEl = useRef(null)

  useEffect(() => {
    ctx = canvasEl.current.getContext('2d');
    canvasEl.current.width = window.innerWidth;
    canvasEl.current.height = window.innerHeight;
    ctx.strokeStyle = '#BADA55';
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.lineWidth = 100;
  }, [])

  return (
    <Layout title="Page not Found">
      <SEO title="Page not found" />
      <CanvasWrapper>
        <canvas
          ref={canvasEl}
          onMouseDown={e => {
            isDrawing = true;
            lastX = e.clientX
            lastY = e.clientY
          }}
          onMouseMove={e => draw(e)}
          onMouseOut={() => isDrawing = false}
          onMouseUp={() => isDrawing = false}
        ></canvas>
        <h1>PAGE NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </CanvasWrapper>
    </Layout>
  )
}

export default NotFoundPage
