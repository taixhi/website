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
    display: flex;
    flex-direction: row;
	width: 80%;
    max-width: ${props => props.theme.sizes.maxWidth};
    margin: 5em auto;
  }

  .right .profile-picture {
    height: auto;
    border-radius: 50%;
    width: 60%;
	margin: 0 auto;
  }

  .left {
	width: 100%;
  }

  .center > .right {
    text-align: center;
  }

  @media (max-width: 1000px) {
    .columns {
    }
  }

  @media (max-width: 850px) {
    .columns {
		flex-direction: column-reverse;	
		align-items: center;
		margin: 1em auto;
	}

	.left h1 {
		text-align: center;
	}

    .right {
		max-width: 300px;
		text-align: center;
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
