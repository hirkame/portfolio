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
      <div>
        <div
          style={{
            padding: "180px 0 100px 0",
            textAlign: "center",
            background: "#E9F2F8",
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
                color: "black",
                textAlign: "left",
                marginBottom: "16px",
                padding: "0",
                lineHeight: "220%",
              }}
            >
              Hello, my name is Hiroki.{" "}
              <span style={{ fontWeight: "normal" }}>
                I am a student at University of Tokyo. I am interested in
                Political Science and African Politics. I post random stories on
                this website.
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
                  paddingBottom: 0,
                  textDecoration: "underline",
                  fontFamily: "Helvetica",
                  fontSize: "18px",
                }}
              >
                About me
              </Link>
            </div>
          </div>
        </div>
        <div className={indexStyles.flexBox}>
          <div className={indexStyles.category}>
            <h3>Category</h3>
            <ul>
              {data.tags.group.map(({ fieldValue, totalCount }) => {
                return (
                  <li key={fieldValue}>
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
