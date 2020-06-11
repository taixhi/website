import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import config from '../utils/siteConfig'
import Layout from '../components/Layout'
import PageBody from '../components/PageBody'
import SEO from '../components/SEO'
import SocialIcons from '../components/SocialIcons'
import styled from 'styled-components'
import Carousel from '../components/Carousel'
const Wrapper = styled.div`
  .columns {
    display: grid;
    width: 80%;
    grid-template-columns: 65% 35%;
    grid-template-rows: auto auto;
    grid-column-gap: 30px;
    justify-items: stretch;
    align-items: stretch;
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 5em auto;
  }

  .right .profile-picture {
    height: auto;
    border-radius: 50%;
    width: 100%;
    
  }

  .center > .right {
    text-align: center;
  }

  @media (max-width: 1000px) {
    .columns {
      grid-template-columns: 75% 25%;
    }
  }

  @media (max-width: 850px) {
    .columns {
      grid-template-columns: 100%;
    }

    .content {
      margin-top: 300px;
    }

    .right {
      position: absolute;
      top: 270px;
      left: 50%;
      width: 200px;
      margin: 20px -100px;
    }
    .left {
      margin-top: 200px;
    }
    .left h1 {
      font-size: 48px;
      text-align: center;
    }

    .left h2 {
      font-size: 21px;
      text-align: center;
    }

    .intro .block {
      font-size: 16px;
      line-height: 26px;
    }
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
        <Wrapper>  
	<Carousel images={featuredPhotos}/>
	  <div className="columns">
            <div className="left column">
              <PageBody body={body} />
            </div>
            <div className = "right column">
              <img className="profile-picture" src={profileImage.fluid.src}/>
		<SocialIcons />
            </div>
          </div>
        </Wrapper>
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
