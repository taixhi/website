import React from 'react'
import { graphql } from 'gatsby'
import sortBy from 'lodash/sortBy'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import Card from '../components/Card'
import CardList from '../components/CardList'
import PageHeader from '../components/PageHeader'
import Pagination from '../components/Pagination'
import Container from '../components/Container'

const TagTemplate = ({ data, pageContext }) => {
  const galleries = sortBy(data.contentfulTag.gallery, 'publishDate').reverse()

  const { title, slug } = data.contentfulTag
  const numberOfPosts = galleries.length
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
      <PageHeader title={numberOfPosts + " Collections Tagged: " + title}/>
      <Container>
        <CardList>
          {galleries.slice(skip, limit * currentPage).map(gallery => (
            <Card {...gallery} key={galleries.id} />
          ))}
        </CardList>
      </Container>
      <Pagination context={pageContext} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulTag(slug: { eq: $slug }) {
      title
      id
      slug
      gallery {
        title
        id
        slug
        publishDate(formatString: "MMMM DD, YYYY")
        thumbnail {
          title
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`

export default TagTemplate
