import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Container from '../components/Container'
import BlogHeader from '../components/BlogHeader'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'

const BlogTemplate = ({ data }) => {
  const { title, slug, body , publishDate} = data.contentfulPost
  const postNode = data.contentfulPost

  return (
    <Layout>
      <Helmet>
        <h1>{`${title} - ${config.siteTitle}`}</h1>
      </Helmet>
      <SEO pagePath={slug} postNode={postNode} pageSEO />

      <Container>
        <BlogHeader title={title} description={publishDate}/>
        <PageBody body={body} />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulPost(slug: { eq: $slug }) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      publishDate(formatString: "YYYY-DD-MM")
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
    }
  }
`

export default BlogTemplate
