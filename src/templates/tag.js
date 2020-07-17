import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostPreview from "../components/postPreview"

import indexStyles from "../pages/index.module.css"

const TagTemplate = ({ pageContext, data }) => {
  const tagPosts = data.tagPosts.edges
  const tagActive = pageContext.tag

  return (
    <Layout>
      <SEO title={tagActive} />
      <div className={indexStyles.container}>
        <div className={indexStyles.category}>
          <h3>Category</h3>
          <ul>
            {data.tagList.group.map(({ fieldValue, totalCount }) => {
              if (fieldValue === tagActive) {
                return (
                  <li key={fieldValue}>
                    <Link
                      to={`/tag/${fieldValue}`}
                      style={{
                        padding: 0,
                        margin: "0 0 8px 0",
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      - {fieldValue} ({totalCount})
                    </Link>
                  </li>
                )
              } else {
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
    </Layout>
  )
}

export default TagTemplate

export const query = graphql`
  query TagQuery($tag: String) {
    tagPosts: allContentfulBlogPost(filter: { tags: { eq: $tag } }) {
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
