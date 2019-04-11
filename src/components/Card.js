import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const Post = styled.li`
  width: 100%;
  margin-bottom: 2rem;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 49%')};
    margin: 0 0 2vw 0;
  }
  @media screen and (min-width: ${props => props.theme.responsive.medium}) {
    flex: ${props => (props.featured ? '0 0 100%' : '0 0 32%')};
  }
  a {
    position: relative;
    margin: 0 0 1em 0;
    color: ${props => props.theme.colors.base};
    text-decoration: none;
    .gatsby-image-wrapper {
      height: 0;
      padding-bottom: 60%;
      @media screen and (min-width: ${props => props.theme.responsive.small}) {
        padding-bottom: ${props => (props.featured ? '60%' : '100%')};
      }
      opacity: 1;
      transition: opacity .25s ease-in-out;
      -moz-transition: opacity .25s ease-in-out;
      -webkit-transition: opacity .25s ease-in-out;
      &:hover {
        opacity: 0.8;
      }
    }
  }
  &:hover h2 {
    color: ${props => props.theme.colors.highlight};
    font-style: italic;

  }
`

const Title = styled.h2`
  font-size: 14px;
  font-weight: 800;
  text-transform: uppercase;
  text-align: left;
  margin-top: 1rem;
  color: black;
`

const Date = styled.h3`
  margin: 0 1rem 1.5rem 1rem;
  color: gray;
`

const Card = ({ slug, thumbnail, title, publishDate, ...props }) => {
  return (
    <Post featured={props.featured}>
      <Link to={`/${slug}/`}>
        <Img fluid={thumbnail.fluid} backgroundColor={'#eeeeee'} />
      </Link>
      <Title>{title + " // " + publishDate}</Title>
    </Post>
  )
}

export default Card
