/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* {
        if (window.location.pathname.indexOf("/post/")){
          console.log("yay")
        }
      } */}
      <main>{children}</main>
      <footer
        style={{
          width: "90%",
          maxWidth: 900,
          padding: "25px 0",
          margin: "0 auto",
        }}
      >
        <p style={{ padding: 0, margin: 0 }}>© Hiroki Kameyama</p>
      </footer>
    </>
  )
}

export default Layout
