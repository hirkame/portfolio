import { Link } from "gatsby"
import React from "react"

import TagLabel from "./tagLabel"

import postStyles from "./postPreview.module.css"

const PostPreview = ({ data }) => {
  return (
    <div className={postStyles.card}>
      <Link to={`/post/${data.slug}`}>
        <h3 style={{ padding: "8px 0", margin: 0 }}>{data.title}</h3>

        {data.tags.map(tagName => {
          return <TagLabel tagName={tagName} key={tagName} />
        })}
        <p style={{ padding: "8px 0", margin: 0 }}>
          {data.description.description}
        </p>
        <p style={{ color: "#6A6776", padding: "8px 0", margin: 0 }}>
          {data.publishDate}
        </p>
      </Link>
    </div>
  )
}

export default PostPreview
