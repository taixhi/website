import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const Title = styled.h2`
  font-size: 2rem;
  font-family: 'Merriweather',serif;
  font-weight: 800;
  text-transform: capitalize;
  text-align: left;
  color: #222;
`
const Text = styled.p`
  font-weight: 300;
  text-align: left;
  margin-top: 1rem;
`
const Header = styled.div`
    margin: 0 auto auto;
    min-height: 10em;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidth};
    padding: 1.5em 1.5em 1em;
    flex-grow: 1;
`

const BlogList = props => {
  return(
      <Header>
        <ul style={{"list-style-position": "inside"}}>
        {props.posts.map(({ node: post }, i) => (
            <li key={i} style={{"list-style": "disc",  "list-style-position": "inside"}}>
              <Link to={`/blog/${post.slug}/`}>
                {post.title + " - " + post.publishDate}
              </Link>
            </li>
          ))}
        </ul>
      </Header>
    )
}

export default BlogList
