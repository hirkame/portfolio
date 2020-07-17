const dotenv = require("dotenv")

if (process.env.NODE_ENV != "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Hiroki Kameyama`,
    description: `Portfolio.`,
    author: `@hirkame`,
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `portfolio-v2`,
        short_name: `portfolio2`,
        start_url: `/`,
        background_color: `#333333`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `xz85us8035bz`,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        downloadLocal: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Noto Sans JP\:400,700`],
        display: "swap",
      },
    },
    "gatsby-transformer-remark",
  ],
}
