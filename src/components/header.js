import { Link } from "gatsby"
import React from "react"

import Logo from "./logo"

class Header extends React.Component {
  render() {
    return (
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          zIndex: 100,
        }}
      >
        　
        <div
          style={{
            width: "90%",
            maxWidth: 900,
            height: "32px",
            margin: "auto",
            padding: `25px 0`,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Link to="/" style={{ padding: 0 }}>
            <Logo />
          </Link>
          <div>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                display: "inline-block",
                padding: 0,
                color: "#585469",
                fontDamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "150%",
                letterSpacing: "0.05em",
              }}
              activeStyle={{
                color: "#333333",
                textDecoration: "underline",
              }}
            >
              Post
            </Link>
            <Link
              to="/about"
              style={{
                textDecoration: `none`,
                display: "inline-block",
                padding: 0,
                marginLeft: "50px",
                color: "#585469",
                fontDamily: "Helvetica",
                fontStyle: "normal",
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "150%",
                letterSpacing: "0.05em",
              }}
              activeStyle={{
                color: "#333333",
                textDecoration: "underline",
              }}
            >
              About
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
