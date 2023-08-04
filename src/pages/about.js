import React from 'react'
import { graphql, Link } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import SocialIcons from '../components/SocialIcons'
import styled from 'styled-components'
import Container from '../components/Container'
import Carousel from '../components/Carousel'
import profile from "../images/profile.jpg"
const Wrapper = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-transform: capitalize;
  margin: 1rem 0;
  color: black;
`
const Text = styled.p`
  text-align: left;
  font-size: 1.06rem;
  line-height: 1.7em;
`
const Img = styled.img`
  height: auto;
  width: 200px;
  border-radius: 50%;
  @media (max-width: 768px) {
    margin: 0 auto;
  }
`
const Left = styled.div`
  flex-grow: 2;
  @media (max-width: 768px) {
    order: 20;
  }
`
const Right = styled.div`
  margin: 1rem;
  @media (max-width: 768px) {
    order: 10;
  }
`

const About = (props) => {
  const { title, body, featuredPhotos, profileImage } = props.data.contentfulPage
  const postNode = props.data.contentfulPage

  return (
    <Layout>
      <Helmet>
        <title>{`${title} - ${config.siteTitle}`}</title>
      </Helmet>
      <SEO pagePath="aboutme" postNode={postNode} pageSEO />
      <Container>
        <Wrapper>
          <Right>
            <Img src={profile}/>
          </Right>
          <Left>
            <Title>Taichi Kato</Title>
            <Text>Welcome to my homepage.</Text><br/>
            <Text>I am studying Math and Computer Science at <a href="https://www.amherst.edu/">Amherst College</a>.
            </Text><br/>
          </Left>
        </Wrapper>
      </Container>
		<Carousel images={featuredPhotos}/>
    </Layout>
  )
}
export const pageQuery = graphql`
  query pageQuery{
    contentfulPage(slug: { eq: "about"}) {
      title
      slug
      metaDescription {
        internal {
          content
        }
      }
      body {
        childMarkdownRemark {
          html
          excerpt(pruneLength: 320)
        }
      }
      profileImage{
        fluid(maxWidth: 640){
          src
        }
      }
      featuredPhotos {
        id
	fixed(width: 150, height: 150) {
          ...GatsbyContentfulFixed_withWebp
          src
          srcSet
        }
 
        fluid(maxWidth: 1000) {
          ...GatsbyContentfulFluid_withWebp
          src
          srcSet
        }
      }
    }
  }
`

export default About
