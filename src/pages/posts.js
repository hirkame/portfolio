import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

import postStyles from "./posts.module.css"

const Posts = ({ data }) => {
  const posts = data.posts.edges

  return (
    <Layout>
      <SEO title="Posts | Hiroki Kameyama" />
        <div className={postStyles.flexBox} id="post">
          <div className={postStyles.category}>
            <h3>Category</h3>
            <ul>
              {data.tags.group.map(({ fieldValue, totalCount }) => {
                return (
                  <li key={fieldValue} className={postStyles.tagList}>
                    <Link
                      to={`/tag/${fieldValue}`}
                      className={postStyles.tagItem}
                    >
                      #{fieldValue} ({totalCount})
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className={postStyles.posts}>
            <ul>
              {posts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <PostPreview data={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
    </Layout>
  )
}

export default Posts

export const query = graphql`
  query PostsQuery {
    posts: allContentfulBlogPost(sort: { order: DESC, fields: publishDate }) {
      edges {
        node {
          title
          slug
          description {
            description
          }
          publishDate(formatString: "MMMM Do, YYYY")
          tags
        }
      }
    }
    tags: allContentfulBlogPost {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
