import React from "react"

const TagLabel = ({ tagName }) => (
  <p
    key={tagName}
    style={{
      display: "inline-block",
      background: "#585469",
      color: "#ffffff",
      padding: "4px 8px",
      margin: "8px 8px 8px 0",
    }}
    to={`/tag/${tagName}/`}
  >
    #{tagName}
  </p>
)

export default TagLabel
