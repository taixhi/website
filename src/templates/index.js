import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardList from '../components/CardList'
import Card from '../components/Card'
import Container from '../components/Container'
import SEO from '../components/SEO'
import PageHeader from '../components/PageHeader'

const Index = ({ data, pageContext }) => {
  const galleries = data.allContentfulGallery.edges
  const featuredGallery = galleries[0].node

  return (
    <Layout>
      <SEO />
      <PageHeader title="Collections" description="Check out these collections of my best photos."/>
      <Container>
        <CardList>
          <Card {...featuredGallery} featured />
          {galleries.slice(1).map(({ node: gallery }) => (
            <Card key={gallery.id} {...gallery} />
          ))}
        </CardList>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulGallery(sort: {fields: [publishDate], order: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
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
  }
`

export default Index
