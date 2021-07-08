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
  margin: 0 0 1rem 0;
  text-transform: uppercase;
`
const DateText = styled.p`
  font-weight: 300;
  text-align: left;
  text-transform: uppercase;
  min-width: 8rem;
`
const Header = styled.div`
    margin: 0 auto auto;
    min-height: 10em;
    width: 100%;
    max-width: ${props => props.theme.sizes.maxWidth};
    padding: 1.5em 1.5em 1em;
    flex-grow: 1;
`

const List = styled.li`
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    line-height: 1.6;
    font-size: 1.2rem;
`
const BlogLink = styled(props => <Link {...props} />)`
    &:hover {
      background-image: linear-gradient(transparent, transparent 4px, #0044f0 4px, #0044f0);
      font-weight: 600;
    }
    margin: 0 0 1rem 0;
    font-weight: 300;
    overflow: hidden;
    white-space: nowrap; /* Don't forget this one */
    text-overflow: ellipsis;
    color: black;
    text-decoration: none;
    background-image: linear-gradient(transparent, transparent 5px, black 5px, black);
    background-position: bottom;
    background-size: 100% 6px;
    background-repeat: repeat-x;

`

const BlogList = props => {
  return(
      <Header>
        <ul style={{"list-style-position": "inside"}}>
        {props.posts.map(({ node: post }, i) => (
            <List key={i} style={{"Listst-style": "disc",  "list-style-position": "inside"}}>
              <DateText> {post.publishDate} </DateText>
              <BlogLink to={`/blog/${post.slug}/`}>
                {post.title}
              </BlogLink>
            </List>
          ))}
        </ul>
      </Header>
    )
}

export default BlogList
