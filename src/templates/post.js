import Img from "gatsby-image"
import { graphql } from "gatsby"
import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import TagLabel from "../components/tagLabel"

import postStyles from "./post.module.css"

const PostTemplate = ({ data }) => {
  const post = data.post
  const others = data.others.edges

  return (
    <Layout>
      <SEO title={post.title} description={post.description.description} />
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
                  return (
                    <Link to={`/tag/${tagName}`} key={tagName}>
                      <TagLabel tagName={tagName} />
                    </Link>
                  )
                })}
              </div>
              <p style={{ padding: 0, margin: "0 0 16px 0" }}>
                {post.description.description}
              </p>
              <p style={{ color: "#333333", padding: 0, margin: 0 }}>
                {post.publishDate}
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

        {/* Other Posts */}
        <div className={postStyles.others}>
          <h1 className={postStyles.othersTitle}>Recent Posts</h1>
          <Others data={others} />

          {/* Back to the Post page. */}
          <Link to="/#post" className={postStyles.backHome}>
            <h3 style={{ color: "#585469" }}>See All Posts</h3>
          </Link>
        </div>
      </div>
    </Layout>
  )
}

const Others = ({ data }) => {
  return (
    <div className={postStyles.othersContainer}>
      {data.map(({ node }) => {
        return (
          <div className={postStyles.otherPost} key={node.id}>
            <div>
              <Link
                to={`/post/${node.slug}`}
                style={{
                  textDecoration: "none",
                }}
              >
                <div>
                  <Img alt={node.title} fluid={node.heroImage.fluid} />
                </div>
                <h3>{node.title}</h3>
                <div>
                  {node.tags.map(tagName => {
                    return <TagLabel tagName={tagName} key={tagName} />
                  })}
                </div>
                <p style={{ padding: "8px 0 0 0 " }}>{node.publishDate}</p>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default PostTemplate

export const query = graphql`
  query PostQuery($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      publishDate(formatString: "MMMM Do, YYYY")
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
    others: allContentfulBlogPost(
      filter: { slug: { ne: $slug } }
      sort: { order: DESC, fields: publishDate }
      limit: 2
    ) {
      edges {
        node {
          id
          slug
          tags
          title
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            fluid(maxWidth: 450, maxHeight: 250) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
