import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

import indexStyles from "./index.module.css"

const IndexPage = ({ data }) => {
  const posts = data.posts.edges

  return (
    <Layout>
      <SEO title="Home" />
      <div className={indexStyles.container}>
        <div className={indexStyles.category}>
          <h3>Category</h3>
          <ul>
            {data.tags.group.map(({ fieldValue, totalCount }) => {
              return (
                <li key={fieldValue}>
                  <Link
                    to={`/tag/${fieldValue}`}
                    style={{ padding: 0, margin: "0 0 8px 0" }}
                  >
                    - {fieldValue} ({totalCount})
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div className={indexStyles.posts}>
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

export default IndexPage

export const query = graphql`
  query MyQuery {
    posts: allContentfulBlogPost {
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
