import { Link } from "gatsby"
import React from "react"

import Logo from "./logo"

class Header extends React.Component {
  constructor(props) {
    super(props)

    this.listener = null
    this.state = {
      color: "black",
      post: false,
    }
  }

  componentDidMount() {
    if (window.location.pathname.indexOf("/post/") !== -1) {
      const height = document.getElementById("postHead").clientHeight

      this.listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop

        if (scrolled >= height) {
          this.setState({ color: "black" })
        } else {
          this.setState({ color: "white" })
        }
      })
    }
  }

  componentDidUpdate() {
    document.removeEventListener("scroll", this.listener)
  }

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
          <Logo color={this.state.color} />
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
                  color: this.state.color,
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
              <h3 style={{ padding: 0, color: this.state.color }}>About</h3>
            </Link>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
