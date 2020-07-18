import { Link } from "gatsby"
import React from "react"

import TagLabel from "./tagLabel"

import postStyles from "./postPreview.module.css"

const PostPreview = ({ data }) => {
  return (
    <div className={postStyles.card}>
      <Link
        to={`/post/${data.slug}`}
        style={{
          textDecoration: "none",
        }}
      >
        <h3 className={postStyles.title}>{data.title}</h3>
        {data.tags.map(tagName => {
          return <TagLabel tagName={tagName} key={tagName} />
        })}
        <p className={postStyles.desc}>{data.description.description}</p>
        <p className={postStyles.date}>{data.publishDate}</p>
      </Link>
    </div>
  )
}

export default PostPreview
