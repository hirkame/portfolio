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
          <Logo color="black" />
          <div>
            <Link
              to="/"
              style={{
                textDecoration: `none`,
                display: "inline-block",
                padding: 0,
              }}
            >
              <h3
                style={{
                  padding: 0,
                }}
              >
                Post
              </h3>
            </Link>
            <Link
              to="/about"
              style={{
                display: "inline-block",
                textDecoration: `none`,
                marginLeft: "50px",
                padding: 0,
              }}
            >
              <h3
                style={{
                  padding: 0,
                }}
              >
                About
              </h3>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
