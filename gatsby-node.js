const config = require('./src/utils/siteConfig')
const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPosts = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulGallery(
          sort: { fields: [publishDate], order: DESC }
          limit: 10000
        ) {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
        allContentfulPost {
          edges {
            node {
              slug
              publishDate
            }
          }
        }
      }
    `).then(result => {
      // Blog
      const blogs = result.data.allContentfulPost.edges
      blogs.forEach((edge, i) => {
        const prev = i === 0 ? null : blogs[i - 1].node
        const next = i === blogs.length - 1 ? null : blogs[i + 1].node
        createPage({
          path: `blog/${edge.node.slug}/`,
          component: path.resolve(`./src/templates/blog.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      });
      // Blog Home
      createPage({
        path: `/blog`,
        component: path.resolve(`./src/templates/blog-home.js`),
        context: {
          limit: 1000,
          skip: 0,
        },
      })
      // Photo gallery
      const posts = result.data.allContentfulGallery.edges
      const postsPerFirstPage = config.postsPerHomePage
      const postsPerPage = config.postsPerPage
      const numPages = Math.ceil(
        posts.slice(postsPerFirstPage).length / postsPerPage
      )

      // Create main home page
      createPage({
        path: `/photography/`,
        component: path.resolve(`./src/templates/index.js`),
        context: {
          limit: 1000,
          skip: 0,
        },
      })
      createPage({
        path: `/`,
        component: path.resolve(`./src/pages/about.js`),
        context: {
        },
      })
      
      // Create each individual post
      posts.forEach((edge, i) => {
        const prev = i === 0 ? null : posts[i - 1].node
        const next = i === posts.length - 1 ? null : posts[i + 1].node
        createPage({
          path: `${edge.node.slug}/`,
          component: path.resolve(`./src/templates/gallery.js`),
          context: {
            slug: edge.node.slug,
            prev,
            next,
          },
        })
      })
      resolve()
    })
  })

  const loadTags = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulTag {
          edges {
            node {
              slug
              post {
                id
              }
            }
          }
        }
      }
    `).then(result => {
      const tags = result.data.allContentfulTag.edges
      const postsPerPage = config.postsPerPage

      // Create tag pages with pagination if needed
      tags.map(({ node }) => {
        const totalPosts = node.post !== null ? node.post.length : 0
        const numPages = Math.ceil(totalPosts / postsPerPage)
        Array.from({ length: numPages }).forEach((_, i) => {
          createPage({
            path:
              i === 0 ? `/tag/${node.slug}/` : `/tag/${node.slug}/${i + 1}/`,
            component: path.resolve(`./src/templates/tag.js`),
            context: {
              slug: node.slug,
              limit: postsPerPage,
              skip: i * postsPerPage,
              numPages: numPages,
              currentPage: i + 1,
            },
          })
        })
      })
      resolve()
    })
  })

  const loadPages = new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage {
          edges {
            node {
              slug
            }
          }
        }
      }
    `).then(result => {
      const pages = result.data.allContentfulPage.edges
      pages.map(({ node }) => {
        createPage({
          path: `${node.slug}/`,
          component: path.resolve(`./src/templates/page.js`),
          context: {
            slug: node.slug,
          },
        })
      })
      resolve()
    })
  })

  return Promise.all([loadPosts, loadTags, loadPages])
}
