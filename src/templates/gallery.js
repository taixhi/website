import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Container from '../components/Container'
import PageHeader from '../components/PageHeader'
import ImageMasonry from '../components/ImageMasonry'

const GalleryTemplate = ({ data, location }) => {
  const { title, slug, tags, images } = data.contentfulGallery
  const description = data.contentfulGallery.description.internal.content
  const galleryNode = data.contentfulGallery
  return (
    <Layout location={location}>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath={slug} galleryNode={galleryNode} gallerySEO />
      <PageHeader title={title} description={description}/>
      <Container>
        <ImageMasonry images={images}/>
      </Container>
      
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      id
      slug
      metaDescription {
        internal {
          content
        }
      }
      description {
        internal{
          content
        }
      }
      publishDate(formatString: "MMMM DD, YYYY")
      publishDateISO: publishDate(formatString: "YYYY-MM-DD")
      tags {
        title
        id
        slug
      }
      images {
        id
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
          src
          srcSet
        }
      }
    }
  }
`
export default GalleryTemplate
