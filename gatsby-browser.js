/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

// custom typeface
import "typeface-source-sans-pro";
import "typeface-righteous"
import "normalize.css"
import "./src/styles/global.css"
import "./src/styles/grid.css"

export const onClientEntry = () => {
  // IntersectionObserver polyfill for gatsby-background-image (Safari, IE)
  if (!(`IntersectionObserver` in window)) {
    import(`intersection-observer`)
    console.log(`# IntersectionObserver is polyfilled!`)
  }
}

export function onServiceWorkerUpdateReady() {
  // window.location.reload(true)
  window.location.href = window.location.href
};

// export const onInitialClientRender = () => {
//   console.log("onInitialClientRender")
// }

// export const onPostPrefetchPathname = () => {
//   console.log("onPostPrefetchPathname")
// }

// export const onPreRouteUpdate = () => {
//   console.log("onPreRouteUpdate")
// }

// export const onPrefetchPathname = () => {
//   console.log("onPrefetchPathname")
// }

// export const onRouteUpdate = () => {
//   console.log("onRouteUpdate")
// }

// export const onRouteUpdateDelayed = () => {
//   console.log("onRouteUpdateDelayed")
// }
