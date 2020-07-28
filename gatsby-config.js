const dotenv = require("dotenv")

if (process.env.NODE_ENV != "production") {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Hiroki Kameyama`,
    description: `Hiroki Kameyama is a student at University of Tokyo. His academic interests are Political Science and African Politics.`,
    siteUrl: `https://hirokikameyama.com`,
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
        name: `Hiroki Kameyama`,
        short_name: `hirkame`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#333333`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
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
        fonts: [`Noto Sans JP\:400,500,700`],
        display: "swap",
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
  ],
}
