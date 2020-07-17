import { Link } from "gatsby"
import React from "react"

const TagLabel = ({ tagName }) => (
  <Link
    key={tagName}
    style={{
      display: "inline-block",
      background: "#333",
      color: "white",
      padding: "4px 8px",
      margin: "8px 8px 8px 0",
    }}
    to={`/tag/${tagName}/`}
  >
    {tagName}
  </Link>
)

export default TagLabel
