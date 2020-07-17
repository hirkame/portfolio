const path = require("path")
const _ = require("lodash")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
    {
      posts: allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
      tags: allContentfulBlogPost {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Create pages for each markdown file.
  const postTemplate = path.resolve(`src/templates/post.js`)
  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: `/post/${node.slug}/`,
      component: postTemplate,
      context: {
        slug: node.slug,
      },
    })
  })

  // Createg pages for each tags.
  const tagTemplate = path.resolve(`src/templates/tag.js`)
  result.data.tags.group.forEach(({ fieldValue }) => {
    createPage({
      path: `/tag/${_.kebabCase(fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: fieldValue,
      },
    })
  })
}
