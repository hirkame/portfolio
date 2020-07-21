import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

import indexStyles from "../pages/index.module.css"

const TagTemplate = ({ pageContext, data }) => {
  const tagPosts = data.tagPosts.edges
  const tagList = data.tagList.group
  const tagActive = pageContext.tag

  return (
    <Layout>
      <SEO title={tagActive} />
      <div>
        <div style={{ padding: "180px 0 100px 0", background: "#F2F2F2" }}>
          <h1 style={{ textAlign: "center", margin: "0" }}>#{tagActive}</h1>
        </div>
        <div className={indexStyles.flexBox}>
          <div className={indexStyles.category}>
            <h3>Category</h3>
            <ul>
              {tagList.map(({ fieldValue, totalCount }) => {
                if (fieldValue === tagActive) {
                  return (
                    <li key={fieldValue} className={indexStyles.tagList}>
                      <Link
                        to={`/tag/${fieldValue}`}
                        className={indexStyles.tagItem}
                        style={{
                          fontWeight: "bold",
                          textDecoration: "underline",
                          color: "#333333",
                        }}
                      >
                        #{fieldValue} ({totalCount})
                      </Link>
                    </li>
                  )
                } else {
                  return (
                    <li key={fieldValue} className={indexStyles.tagList}>
                      <Link
                        to={`/tag/${fieldValue}`}
                        className={indexStyles.tagItem}
                      >
                        #{fieldValue} ({totalCount})
                      </Link>
                    </li>
                  )
                }
              })}
            </ul>
          </div>
          <div className={indexStyles.posts}>
            <ul>
              {tagPosts.map(({ node }) => {
                return (
                  <li key={node.slug}>
                    <PostPreview data={node} />
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default TagTemplate

export const query = graphql`
  query TagQuery($tag: String) {
    tagPosts: allContentfulBlogPost(
      filter: { tags: { eq: $tag } }
      sort: { order: DESC, fields: publishDate }
    ) {
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
    tagList: allContentfulBlogPost {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
