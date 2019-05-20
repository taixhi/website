import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Container from '../components/Container'
import SEO from '../components/SEO'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import PageHeader from '../components/PageHeader'
import BlogList from '../components/BlogList'



const BlogHome = ({ data, pageContext }) => {
  const posts = data.allContentfulPost.edges
  return (
    <Layout>
      <SEO />
      <Helmet>
        <h1>{`${"Blog"} - ${config.siteTitle}`}</h1>
      </Helmet>
      <Container>
        <PageHeader title="Blogs" description="some of my writings"/>
        <BlogList posts={posts}/>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulPost(sort: {fields: [publishDate], order: DESC}, limit: $limit, skip: $skip) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "MMMM DD, YYYY")
        }
      }
    }
  }
`

export default BlogHome
