import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ color }) => {
  const data = useStaticQuery(graphql`
    query {
      black: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 80, height: 32) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
      white: file(relativePath: { eq: "logo_white.png" }) {
        childImageSharp {
          fixed(width: 80, height: 32) {
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `)

  return <Img fixed={data[color].childImageSharp.fixed} alt="logo" />
}

export default Logo
