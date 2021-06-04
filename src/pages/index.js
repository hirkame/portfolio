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
      <SEO title="Hiroki Kameyama" />
      <div>
        <div
          style={{
            padding: "180px 0 100px 0",
            textAlign: "center",
            background: "#F2F2F2",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              width: "90%",
              maxWidth: "900px",
            }}
          >
            <h1
              style={{
                textAlign: "left",
                marginBottom: "25px",
                padding: "0",
                lineHeight: "220%",
              }}
            >
              Hello, my name is Hiroki KAMEYAMA.
              <br/>
              <span style={{ fontWeight: "normal" }}>
                I am a graduate student at University of Tokyo.
                My academic intertests lie in Public Policy and African Politics. 
              </span>
            </h1>
            <div
              style={{
                textAlign: "left",
              }}
            >
              <Link
                to="/about"
                style={{
                  padding: 0,
                }}
              >
                <h3
                  style={{
                    color: "#585469",
                    padding: 0,
                  }}
                >
                  About me →
                </h3>
              </Link>
            </div>
          </div>
        </div>
        <div className={indexStyles.flexBox} id="post">
          <div className={indexStyles.category}>
            <h3>Category</h3>
            <ul>
              {data.tags.group.map(({ fieldValue, totalCount }) => {
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
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MyQuery {
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
