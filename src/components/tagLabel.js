import React from "react"

const TagLabel = ({ tagName }) => (
  <p
    key={tagName}
    style={{
      display: "inline-block",
      background: "#1F4C66",
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
