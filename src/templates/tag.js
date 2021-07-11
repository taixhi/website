import React from 'react'
import { graphql } from 'gatsby'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import BlogList from '../components/BlogList'
import PageHeader from '../components/PageHeader'
import Pagination from '../components/Pagination'
import Container from '../components/Container'

const TagTemplate = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  const { title, slug } = data.contentfulTag
  const numberOfPosts = posts.length
  const skip = pageContext.skip
  const limit = pageContext.limit
  const currentPage = pageContext.currentPage
  const isFirstPage = currentPage === 1

  return (
    <Layout>
      {isFirstPage ? (
        <Helmet>
          <title>{`Tag: ${title} - ${config.siteTitle}`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - ${config.siteTitle}`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      ) : (
        <Helmet>
          <title>{`Tag: ${title} - Page ${currentPage} - ${
            config.siteTitle
          }`}</title>
          <meta
            property="og:title"
            content={`Tag: ${title} - Page ${currentPage} - ${
              config.siteTitle
            }`}
          />
          <meta property="og:url" content={`${config.siteUrl}/tag/${slug}/`} />
        </Helmet>
      )}
      <Container>
        <PageHeader title={title}/>
        <BlogList posts={posts}/>
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($skip: Int!, $limit: Int!, $slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
    }
    allContentfulPost(sort: {fields: [publishDate], order: DESC}, limit: $limit, skip: $skip, filter: {tags: {elemMatch: {title: {}, slug: {eq: $slug}}}}) {
      edges {
        node {
          title
          tags {
            title
          }
          id
          slug
          publishDate(formatString: "YYYY-MM-DD")
        }
      }
    }

  }
`

export default TagTemplate
