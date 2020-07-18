import Img from "gatsby-image"
import { graphql } from "gatsby"
import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagLabel from "../components/tagLabel"

import postStyles from "./post.module.css"

const PostTemplate = ({ data }) => {
  const post = data.contentfulBlogPost

  return (
    <Layout headerColor="#fff">
      <SEO title="Home" />
      <div>
        {/* Head */}
        <div className={postStyles.head} id="postHead">
          <div className={postStyles.headArea}>
            <div className={postStyles.photo}>
              <Img alt={post.title} fluid={post.heroImage.fluid} />
            </div>
            <div className={postStyles.summary}>
              <h1 style={{ padding: 0, margin: "0 0 16px 0" }}>{post.title}</h1>
              <div style={{ padding: 0, margin: "0 0 16px 0" }}>
                {post.tags.map(tagName => {
                  return <TagLabel tagName={tagName} key={tagName} />
                })}
              </div>
              <p style={{ padding: 0, margin: "0 0 16px 0" }}>
                {post.description.description}
              </p>
              <p style={{ color: "#333333", padding: 0, margin: 0 }}>
                {post.createdAt}
              </p>
            </div>
          </div>
        </div>
        {/* Post Body */}
        <div
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
          className={postStyles.body}
        />
      </div>
    </Layout>
  )
}

export default PostTemplate

export const query = graphql`
  query PostQuery($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      createdAt(formatString: "MMMM Do, YYYY")
      slug
      title
      tags
      description {
        description
      }
      childContentfulBlogPostBodyTextNode {
        body
      }
      body {
        childMarkdownRemark {
          html
        }
      }
      heroImage {
        fluid(maxWidth: 800) {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
    }
  }
`
