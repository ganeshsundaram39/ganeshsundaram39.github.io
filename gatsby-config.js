const baseColor = `#0f86d2`;
const backgroundColor = `#fafafa`;

module.exports = {
  siteMetadata: {
    title: `Ganesh Sundaram`,
    description: `Ganesh Sundaram is a Front-End Javascript developer living in Mumbai, India.`,
    author: `@ganeshsundaram_`,
    keywords: ['front-end', 'web', 'developer', 'mumbai', 'javascript', 'react.js', 'angular',],
    siteUrl: `https://ganeshsundaram39.github.io/`,
    baseColor
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ganesh Sundaram - Front End Web Developer`,
        short_name: `Ganesh Sundaram`,
        description: ` Hi, I'm Ganesh. I'm a Front-End Web developer living in Mumbai, India. I spend my days practicing my coding skills and developing side-projects. I would love to build a great and fancy website for you. Aside from web development, I enjoy listening to music, exercise and stalking beautiful looking websites.`,
        lang: `en`,
        start_url: `/`,
        theme_color: baseColor,
        background_color: backgroundColor,
        display: `standalone`,
        icon: `static/icons/icon-152x152.png`,// This path is relative to the root of the site.
        icons: [
          {
            src: "/icons/icon-16x16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "/icons/icon-32x32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png"
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png"
          },
          {
            src: "/icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png"
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png"
          },
          {
            src: "/icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png"
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png"
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
